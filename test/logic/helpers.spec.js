/**
 * Created by Dmitry.Mogilko on 11/1/2015.
 */

var testHelper  = require('../../lib/util/helpers.js');
var path  = require('path');
var fs  = require('fs');

describe('Test Helper test the correctness of helper methods', function() {

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }


    it("Test goTo method",function(done){
        var url  = 'http://localhost:9000'
        testHelper.goToUrl('http://localhost:9000');
        browser.getCurrentUrl().then(function(actualUrl) {

            /*
                /#/ is added by angular in our case
             */
            expect(url +  '/#/').toEqual(actualUrl);
            done();
        });

    })


    it('SaveScreenShort absolute and relative file path',function() {

        browser.get('http://localhost:9000');
        browser.waitForAngular();

        var filePathAbsolute  =  path.join(__dirname,"testAbsolute.png");

        testHelper.saveScreenShort(filePathAbsolute).then(function(){
            var fileExists = fs.existsSync(filePathAbsolute);
            expect(fileExists).toBe(true);
            if(fileExists){
                fs.unlink(filePathAbsolute);
            }

        });


    });


    it('Set input upload with value',function(){
        var filePathAbsolute  =  path.join(__dirname,"data/uploadExample.txt");
        var fileInput  = element(by.css("#fileUploadInput"));
        testHelper.DOM.setFileUpload(filePathAbsolute,fileInput);
        fileInput.getAttribute('value').then(function(value){
            var endsWithFileName = endsWith(value,"uploadExample.txt");
            expect(endsWithFileName).toBe(true);
        });


    });


    it("Test hasClass",function(){
        browser.executeScript("document.getElementById('foo').setAttribute('class','testClass')");
        var elem = element(by.css('#foo'));

        testHelper.DOM.hasClass(elem,'testClass').then(function(hasClass){
           expect(hasClass).toEqual(true);

        });

        testHelper.DOM.hasClass(elem,'testClassNotExists').then(function(hasClass){
            expect(hasClass).toEqual(false);

        });


    });

    it("Test by.dataHook custom locator",function(){
        var elem = element(by.dataHook("testHook"));
        var elemNotExists = element(by.dataHook("testHookNotExists"));
        expect(elem).not.toBe(null);
        expect(elemNotExists).toBe(null);
    });



});

