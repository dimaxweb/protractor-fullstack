/**
 * Created by Dmitry.Mogilko on 10/29/2015.
 */

var extend = require('util')._extend;

var request = require('request');

var colors = require('colors');

var Q = require('q');

/**
 * Utility for testing the browser console
 * @constructor
 * @param {object} config -  configuration for testing the browser console for errors.
 */
function ConsolePlugin(config) {

    this.init(config);

}

function processBrowserLog(browserLog,config) {

    var detectedErrors = [];

    var errorRules  = config['errors'];

    /**
     * errors
     */
    if(errorRules.isEnabled){

        browserLog.forEach(function (log) {

            if (log.level.name === errorRules.level.name) {

                var detectedError = false;

                if(errorRules.excludeByText.length  > 0){
                    errorRules.excludeByText.forEach(function (text) {

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
                else{
                    detectedErrors.push(log);
                }



            }

        });
    }



    return detectedErrors;
}

/**
 *
 * @param init instance with new config
 */
ConsolePlugin.prototype.init = function(config){
    /**
     * set default configuration
     */
    this.defaulConfig = this.config = {

        "isEnabled": true,
        "errors": {"isEnabled": true, level : {"name": "SEVERE"}, "excludeByText": ["Test Ignore  :"]},
        "warnings": {"isEnabled": false, level : {"name": "WARNING"}, "excludeByText": []},
        "info": {"isEnabled": false, level : {"name": "WARNING"}, "includeByText": []}
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

        return Q.Promise(function (resolve, reject, notify) {

            browser.manage().logs().get('browser').then(function (browserLog) {
                console.log("Browser log is : ",browserLog);
                var applicationErrors = processBrowserLog(browserLog, self.config);
                resolve(applicationErrors);
            })


        });


}


module.exports = ConsolePlugin;





