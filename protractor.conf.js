/**
 * Created by Dmitry.Mogilko on 12/8/2014.
 */


var path = require('path');

var appConfig = require(path.resolve(__dirname, 'configuration/appConfig.js'));
var Logger = require('./lib/logger');

/*
 Load protractor config from the application configuration
 */

var protractorConfig = appConfig.get('protractrorConfig');


/*
 Configure the reports from configuration
 */
protractorConfig.onPrepare = function () {

    var allReportsConfig = appConfig.get('reports');

    if (allReportsConfig) {

        var jasmineReporters = require('jasmine-reporters');

        var reportsConfig = allReportsConfig.jasmineReporters;

        Logger.info("jasmineReporters configuration is :", reportsConfig);

        if (reportsConfig) {
            for (var reporterKey in reportsConfig) {

                if (reportsConfig[reporterKey].isEnabled) {

                    Logger.info("Enabling the reporter :%s . Configuration : %j ", reporterKey, reportsConfig[reporterKey]);

                    var reporterInstance = eval("new " + reporterKey + "(reportsConfig[reporterKey])");

                    jasmine.getEnv().addReporter(reporterInstance);
                }
            }
        }
    }


}

exports.config = protractorConfig;


