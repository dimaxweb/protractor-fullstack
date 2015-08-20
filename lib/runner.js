var revisor = require('./util');
var config =  require('../configuration/nconfWrapper.js');
var colors  = require('colors');
var path  = require('path')

require('./moduleBase');

var ptor;

describe('Generic sanity test  - ', function() {


    beforeEach(function(){


        var url = config.get('webServer');

        browser.get(url);

        browser.waitForAngular();



    });


    it("test1",function(){
          expect(true).toBe(true);
    });

    it("test2",function(){
        expect(true).toBe(true);
    });

    it("test3",function(){
        expect(true).toBe(true);
    });

    it("test4",function(){
        expect(true).toBe(false);
    });





    //it('Test hyperlinks',function(){
    //    revisor.testHyperLinksUrls();
    //
    //});


    //it("Table test",function(){
    //
    //  var tblUpload  = element(by.css('[ui-grid-edit]'));
    //  var filesToExists  = ["testAllCorrect/Correct_nEAP01Z6A8-20131006T060728.000.xml","testAllCorrect/folder/Correct_nEAP00I65E-20131006T075955.000.xml","testAllCorrect/folder/Correct_nBOJH6001A-20131006T225503.000.xml"];
    //
    // var allMatches = true;
    //
    //
    //    tblUpload.getAttribute('innerHTML').then(function(html){
    //
    //        console.log(html.green);
    //
    //        for(var i=0;i<filesToExists.length;i++){
    //           if(html.indexOf(filesToExists[i]) ===-1 ){
    //                allMatches = false;
    //                break;
    //
    //            }
    //       }
    //
    //        expect(allMatches).toBe(true);
    //   });
    //
    //
    //})


    //it("Send keys",function(){
    //
    //    browser.executeScript("document.getElementById('file').style.display='block'");
    //    var absolutePath = path.resolve(__dirname, "../test/allErrors.zip");
    //    console.log("Absolute path is  : ",absolutePath);
    //    element(by.css('#file')).sendKeys(absolutePath);
    //
    //
    //});




});

describe("One new module",function(){
    it("test new 1",function(){

    });

    it("test new 2",function(){

    });
});





