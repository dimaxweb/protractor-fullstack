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
        testHelper.goToUrl(url);

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



    //TODO   : check why fails sometime
    it("Should simulate hover / mouseMove and mouse out events and display element on mouse over and hide on mouse out",function(){

        testHelper.goToUrl("http://localhost:9000");

        var menuLink = element(by.css('#showMenuLink'));
        var menu = element(by.css('#menu'));

        testHelper.DOM.elementMouseMove(menuLink);

        browser.debugger();






    });

    it("Cookies methods test",function(done){
        testHelper.goToUrl("http://localhost:9000");

        testHelper.cookies.add({
            name : "test",
            value  : "test"
        }).then(function(){
            testHelper.cookies.get("test").then(function(cookie){
                expect(cookie.name).toEqual("test");
                expect(cookie.value).toEqual("test");
               // done();
            })
        });

        //test deleteAll and getAll


        testHelper.cookies.deleteAll().then(function(){
            testHelper.cookies.getAll().then(function(cookies){
                expect(cookies.length).toEqual(0);
                done();
            });
        });








    });




});

