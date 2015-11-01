/**
 * Created by Dmitry.Mogilko on 11/1/2015.
 */

var testHelper  = require('../../lib/util/testHelper.js');
var path  = require('path');
var fs  = require('fs');

describe('Generic logic tests', function() {

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






});

