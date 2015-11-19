/**
 * Created by Dmitry.Mogilko on 11/1/2015.
 */
var ConsolePlugin = require('../../lib/util/ConsolePlugin.js');

var path = require('path');
var fs = require('fs');
var Q = require('q');


describe('Console Plugin tests', function () {

    it("Should fail on console error with default config", function (done) {

        browser.get('http://localhost:9000');

        browser.waitForAngular();

        browser.executeScript("console.error('Real Error')");


        /**
         *
         * don't pass the config for new instance of plugin
         */
        var genericTestInst = new ConsolePlugin();

        Q.when(genericTestInst.getApplicationErrors()).then(function (errors) {
            done();
            expect(errors.length).toEqual(1);

        });

    });

    it("Should ignore error when error text defined to be ignored", function (done) {

        browser.get('http://localhost:9000');

        browser.waitForAngular();

        browser.executeScript("console.error('Test Ignore  :')");

        browser.executeScript("console.warn('Test Ignore  :')");


        var config  = {

            "chrome"  : {
                "isEnabled": true,
                "SEVERE": {"isEnabled": true, level : {"name": "SEVERE"}, "excludeByText": ["Test Ignore  :"]},
                "WARNING": {"isEnabled": false, level : {"name": "WARNING"}, "excludeByText": []}
            }


        }

        var consolePluginInstance = new ConsolePlugin(config);


        Q.when(consolePluginInstance.getApplicationErrors()).then(function (errors) {
            done();
            expect(errors.length).toEqual(0);

        });


    });

});

