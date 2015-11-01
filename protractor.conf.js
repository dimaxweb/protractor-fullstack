/**
 * Created by Dmitry.Mogilko on 12/8/2014.
 */


var path = require('path');

var appConfig = require(path.resolve(__dirname, 'configuration/nconfWrapper.js'));

/*
   Load protractor config from the application configuration
 */

var protractorConfig = appConfig.get('protractrorConfig');


/*
 Configure the reports from configuration
 */
protractorConfig.onPrepare = function () {

    var jasmineReporters = require('jasmine-reporters');

    var reportsConfig = appConfig.get('reports').jasmineReporters;

    console.log("jasmineReporters configuration is :", reportsConfig);

    for (var reporterKey in reportsConfig) {

        if (reportsConfig[reporterKey].isEnabled) {

            console.log("Enabling the reporter :%s . Configuration : %j ", reporterKey, reportsConfig[reporterKey]);

            var reporterInstance = eval("new " + reporterKey + "(reportsConfig[reporterKey])");

            jasmine.getEnv().addReporter(reporterInstance);
        }
    }

}

exports.config = protractorConfig;


