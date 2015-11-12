/**
 * Created by Dmitry.Mogilko on 11/11/2015.
 */

var helpers  = require('../../lib/util/helpers.js');
var path  = require('path');
var fs  = require('fs');
var appConfig = require('../../configuration/appConfig.js');

describe('Show cases of helpers dom interactions', function() {

    var webServerUrl  =  appConfig.get('webServer');

    console.log("webServerUrl:",webServerUrl);

    it("Open new window with not angular context -- wait for element - close the window -- return to angular page",function(){

      expect(true).toBe(true);


    });
});
