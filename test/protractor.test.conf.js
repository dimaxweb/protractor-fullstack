/**
 * Created by Dmitry.Mogilko on 11/1/2015.
 */



exports.config = {

    "seleniumAddress ": "http://localhost:4444/wd/hub",
    "specs": ["logic/*.spec.js"],

    "multiCapabilities": [
        {
            "browserName": "chrome"
        }


    ],
    "jasmineNodeOpts": {
        "showColors": true,
        "defaultTimeoutInterval": 300000
    },




    "framework": "jasmine2",

    onPrepare  : function(){
        /*
         add custom locators
         */
        require('../lib/jasmine/locators.js');



    }

}
