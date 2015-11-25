/**
 * Created by Dmitry.Mogilko on 11/11/2015.
 */


var helpers  = require('../../lib/util/helpers.js');
var ConsolePlugin  = require('../../lib/util/ConsolePlugin.js');



describe('Check browser console for errors', function() {

        beforeEach(function(){
            helpers.goToUrl('http://127.0.0.1:9000');
        })





       it("Example failing test on console error",function(done){


           var consoleTestConfig  = require('../../configuration/appConfig.js').get('ConsolePlugin');

           var consolePluginInst  = new ConsolePlugin(consoleTestConfig);

           consolePluginInst.getApplicationErrors().then(function(errors){

               expect(errors.length).toEqual(2);
               done();
           });
       });

       it("Set config inside text example.Enable to fail on warnings",function(done){

           var spesificConf  = {
                "chrome"  : {
                    "isEnabled": true,
                    "WARNING": {"type" : "warning","isEnabled": true, "level" : {"name": "WARNING"}, "excludeByText": []}
                }
            };

           var consolePluginInstWarnings = new ConsolePlugin(spesificConf);


           consolePluginInstWarnings.getApplicationErrors().then(function(errors){
                console.log("After warnings are set log:",errors.length);
                expect(errors.length).toEqual(3);
                done();
            });

        });


       it("Ignore error by text.Warnings ignored also...",function(done){

           var spesificConf  = {
               "chrome"  : {
                   "isEnabled": true,
                   "SEVERE": {"type" : "error", "isEnabled": true, "level" : {"name": "SEVERE"}, "excludeByText": ["Ignore error:"]},
                   "WARNING": {"type" : "warning","isEnabled": false, "level" : {"name": "WARNING"}, "excludeByText": []}
               }
            };

           var consolePluginInstWarnings = new ConsolePlugin(spesificConf);


           consolePluginInstWarnings.getApplicationErrors().then(function(errors){
                console.log("After warnings are set log:",errors.length);
                expect(errors.length).toEqual(1);
                done();
            });

        });




})


