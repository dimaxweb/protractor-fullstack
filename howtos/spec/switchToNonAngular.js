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

    it("Open new window with not angular context -- wait for element ",function(){

            helpers.goToUrl("http://127.0.0.1:9000/pricing.html",{ignoreSynchronization : true,waitForAngular  : false});

            helpers.switchToNewWindow();

            var newElement  = $('#pricingMain');

            helpers.DOM.waitElementToBePresent(newElement,5000);

            expect(newElement.isPresent()).toBe(true);



    });
});
