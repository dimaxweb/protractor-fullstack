/**
 * Created by Dmitry.Mogilko on 11/11/2015.
 */


var helpers  = require('../../lib/util/helpers.js');
var ConsolePlugin  = require('../../lib/util/ConsolePlugin.js');
var consoleTestConfig  = require('../../configuration/appConfig.js').get('ConsolePlugin');

var consolePluginInst  = new ConsolePlugin(consoleTestConfig);


describe('Check browser console for errors', function() {

        beforeEach(function(){
            helpers.goToUrl('http://127.0.0.1:9000');
        })



       it("Example failing test on console error",function(done){

           browser.executeScript("console.error('This is error')");

           browser.debugger();

           consolePluginInst.getApplicationErrors().then(function(errors){
               console.log("Applications errors:",errors);
               expect(errors.length).toEqual(0);
               done();
           });
       });

       it("Set config inside text example.Enable to fail on warnings",function(done){

            consolePluginInst.setConfig({
                "chrome"  : {
                    "isEnabled": true,
                    "SEVERE": {"type" : "error", "isEnabled": true, "level" : {"name": "SEVERE"}, "excludeByText": ["Test Ignore  :"]},
                    "WARNING": {"type" : "warning","isEnabled": true, "level" : {"name": "WARNING"}, "excludeByText": []}
                }
            });

            browser.executeScript("console.warn('This is warning')");

            consolePluginInst.getApplicationErrors().then(function(errors){
                console.log("After warnings are set log:",errors.length);
                expect(errors.length).toEqual(0);
                done();
            });

        })


})


