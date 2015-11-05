/**
 * Created by Dmitry.Mogilko on 10/29/2015.
 */

var extend = require('util')._extend;

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

    var detectedErrors = [];

    browserLog.forEach(function (log) {

        var entryTypeConfig =  config[log.level.name];

        if (entryTypeConfig && entryTypeConfig.isEnabled) {

            var detectedError = false;

            if (entryTypeConfig.excludeByText.length > 0) {
                entryTypeConfig.excludeByText.forEach(function (text) {

                    /*
                     if error found , test against the patterns to ignore
                     */
                    if (log.message.indexOf(text) === -1) {

                        detectedError = true;

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

/**
 *
 * @param init instance with new config
 */
ConsolePlugin.prototype.init = function (config) {
    /**
     * set default configuration
     */
    this.defaulConfig = this.config = {

        "isEnabled": true,
        "SEVERE": {"isEnabled": true, level: {"name": "SEVERE"}, "excludeByText": ["Test Ignore  :"]},
        "WARNING": {"isEnabled": false, level: {"name": "WARNING"}, "excludeByText": []}
    },

        this.setConfig(config);
}

/**
 *
 * @param set the user config
 */
ConsolePlugin.prototype.setConfig = function (config) {

    if (config) {
        this.config = extend(this.defaulConfig, config);
    }

}

/**
 * Process the browser log together with configuration
 * @returns {promise}  - the result contains the browser logs identified as errros according to confguration
 */
ConsolePlugin.prototype.getApplicationErrors = function () {

    var self = this;
    var config = self.config;

    return Q.Promise(function (resolve, reject, notify) {

        browser.getCapabilities().then(function (cap) {
            return (cap.caps_.browserName || "").toLowerCase()
        }).then(function (browserName) {

            var browserConfig = self.config;

            if(browserConfig && browserConfig.isEnabled){
                browser.manage().logs().get('browser').then(function (browserLog) {
                    console.log("Browser log is : ", browserLog);
                    var applicationErrors = parseBrowserLog(browserLog, self.config);
                    resolve(applicationErrors);
                })
            }

            else{
                logger.info("Browser config is not enabled or doesn't exists.Browser name :",browserName);
                resolve([]);
            }


        })


    });


}


module.exports = ConsolePlugin;





