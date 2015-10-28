/**
 * Created by Dmitry.Mogilko on 12/8/2014.
 */


var path  = require('path')
var appConfig  = require(path.resolve(__dirname,'configuration/nconfWrapper.js'));

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['lib/runner.js'],

    multiCapabilities: [{
        'browserName': 'chrome'
    }],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000
    },

    framework: 'jasmine2',


    onPrepare: function() {


        var jasmineReporters = require('jasmine-reporters');

        var reportsConfig =  appConfig.get('reports').jasmineReporters;

        console.log("jasmineReporters configuration is :",reportsConfig);

        for(var reporterKey in reportsConfig){

            if(reportsConfig[reporterKey].isEnabled){

                console.log("Enabling the reporter :%s . Configuration : %j ",reporterKey,reportsConfig[reporterKey]);

                var reporterInstance  = eval("new "  + reporterKey  +  "(reportsConfig[reporterKey])");

                jasmine.getEnv().addReporter(reporterInstance);
            }
        }


    }
}
