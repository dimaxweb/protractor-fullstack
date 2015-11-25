/**
 * Created by Dmitry.Mogilko on 10/29/2015.
 */

var _ = require('lodash');

var request = require('request');

var colors = require('colors');

var Q = require('q');

var logger = require('../logger');

/**
 * Utility for testing the browser console
 * @constructor
 * @param {object} config -  configuration for testing the browser console for errors.
 */
function ConsolePlugin(config) {

    this.init(config);

}

function parseBrowserLog(browserLog, config) {

    console.log("Config in parse log is:",config);

    var detectedErrors = [];

    browserLog.forEach(function (log) {

        var entryTypeConfig =  config[log.level.name];

        console.log("Entry type is :",entryTypeConfig);

        if (entryTypeConfig && entryTypeConfig.isEnabled) {

            console.log("Entry is detected as error:",entryTypeConfig);
            console.log("Log message is:",log);
            var detectedError = true;

            if (entryTypeConfig.excludeByText.length > 0) {
                entryTypeConfig.excludeByText.forEach(function (text) {

                    /*
                     if error found , test against the patterns to ignore
                     */
                    if (log.message.indexOf(text) === -1) {

                        detectedError = false;

                    }

                });

                if (detectedError) {
                    detectedErrors.push(log);
                }
            }
            else {
                detectedErrors.push(log);
            }


        }

    });


    return detectedErrors;
}

function getBrowserName(){
      return browser.getCapabilities().then(function (cap) {
          return (cap.caps_.browserName || "").toLowerCase()
      });
}

/**
 *
 * @param init instance with new config
 */
ConsolePlugin.prototype.init = function (config) {
    /**
     * set default configuration
     */
     this.config = {

        "chrome" : {
            "isEnabled": true,
            "SEVERE": {"isEnabled": true, level: {"name": "SEVERE"}, "excludeByText": []},
            "WARNING": {"isEnabled": false, level: {"name": "WARNING"}, "excludeByText": []}
        }


    },

    this.setConfig(config);



}

/**
 *
 * @param set the user config with defualts
 */
ConsolePlugin.prototype.setConfig = function (config) {

    console.log("User config is :",config);

    if (config) {
        _.merge(this.config, config);
    }

    console.log("Config is :",this.config);

}

/**
 * Process the browser log together with configuration
 * @returns {promise}  - the result contains the browser logs identified as errros according to confguration
 */
ConsolePlugin.prototype.getApplicationErrors = function () {

    var self = this;
    var config = self.config;

    return Q.Promise(function (resolve, reject, notify) {


        getBrowserName().then(function (browserName) {

            var browserConfig = self.config[browserName.toLowerCase()];

            if(browserConfig && browserConfig.isEnabled){
                browser.manage().logs().get('browser').then(function (browserLog) {
                    console.log("Browser log is : ", browserLog);
                    var applicationErrors = parseBrowserLog(browserLog,browserConfig);
                    resolve(applicationErrors);
                })
            }

            else{
                logger.info("Browser config is not enabled or doesn't exists.Browser name :",browserName);
                resolve([]);
            }


        });


    });


}


module.exports = ConsolePlugin;





