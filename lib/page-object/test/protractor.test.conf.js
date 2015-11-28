/**
 * Created by Dmitry.Mogilko on 11/1/2015.
 */



exports.config = {

    "seleniumAddress ": "http://localhost:4444/wd/hub",
    "specs": ["spec/*.spec.js"],

    "multiCapabilities": [
        {
            "browserName": "chrome"
        }


    ],


    "framework": "jasmine2"



}
