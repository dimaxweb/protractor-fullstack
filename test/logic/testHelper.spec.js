/**
 * Created by Dmitry.Mogilko on 11/1/2015.
 */

var testHelper  = require('../../lib/util/testHelper.js');
var path  = require('path');
var fs  = require('fs');

describe('Test Helper test the correctness of helper methods', function() {

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

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
        testHelper.dom.setFileUpload(filePathAbsolute,fileInput);
        fileInput.getAttribute('value').then(function(value){
            var endsWithFileName = endsWith(value,"uploadExample.txt");
            expect(endsWithFileName).toBe(true);
        });


    });



});

