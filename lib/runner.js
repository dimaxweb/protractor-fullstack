var revisor = require('./revisor');
var config =  require('../configuration/nconfWrapper.js');

var ptor;

describe('Generic sanity test  - ', function() {


    beforeEach(function(){

        ptor  = protractor.getInstance();
        var url = config.get('webServer');

        browser.get(url);

        browser.waitForAngular();


        /*
           TODO  : move from here to some global space
        */

        var matchers = {
            toEqualBecause: function( value, message ) {
                this.message = function() {
                    return "Expected '" + this.actual + "' to equal '" + value + "' because " + message;
                };

                return this.actual == value;
            }
        };
        this.addMatchers(matchers);

    });


    afterEach(function(){

    });



    it('Test hyperlinks',function(){
        revisor.testHyperLinksUrls();

    });

    //it('Test console for errors',function(){
    //    revisor.testConsoleForErrors();
    //});
    //
    //it('Test title existence',function(){
    //    revisor.testTitle();
    //});



});





