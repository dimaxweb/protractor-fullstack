/**
 * Created by Dmitry.Mogilko on 11/11/2015.
 */

/**
 * Created by Dmitry.Mogilko on 11/1/2015.
 */



exports.config = {

    "seleniumAddress ": "http://localhost:4444/wd/hub",

    "specs": ["spec/*.js"],

    suites  : { "nonAngularPage" : "spec/switchToNonAngular.js","testConsoleForErrors" : "spec/testConsoleForErrors.js","interactWithClientJavascript" : "spec/interactWithClientJavascript.js"},


    "multiCapabilities": [
        {
            "browserName": "chrome"
        }


    ],
    "jasmineNodeOpts": {
        "showColors": true,
        "defaultTimeoutInterval": 300000
    },




    "framework": "jasmine2"



}
