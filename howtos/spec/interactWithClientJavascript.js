/**
 * Created by Dmitry.Mogilko on 11/15/2015.
 */

var helpers  = require('../../lib/util/helpers.js');

describe('Interact with client side script', function() {

    it("Get variable defined on window",function(){


        helpers.goToUrl("http://127.0.0.1:9000");

        browser.executeScript("window.testVariable=10");


        browser.driver.executeAsyncScript(function() {
            var callback = arguments[arguments.length - 1];
            callback(window.testVariable);

        }).then(function(testVariable) {
            expect(testVariable).toEqual(10);
        });
    });


    it("Access to angular js current scope",function(){

        helpers.goToUrl("http://127.0.0.1:9000");



        var angularBoundVariable = element(by.id('angularVarTest')).evaluate('angularScopeValue');

        /*
            the value defined in    :  example/app/scripts/controllers\main.js
         */

        expect(angularBoundVariable).toEqual("testAccessToBinding");



    })

    it("Access to angular js service",function(){

        helpers.goToUrl("http://127.0.0.1:9000");


        browser.executeAsyncScript(function() {

            var callback = arguments[arguments.length - 1];

            var api = angular.injector(['myApp']).get('apiService');

            var testData = api.getTestData();

            callback(testData);

            }).then(function(testData){
                console.log(typeof(testData));
                console.log("Test data is :",testData);

            });


    });


});


