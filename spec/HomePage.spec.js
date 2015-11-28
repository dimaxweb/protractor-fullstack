/**
 * Created by Dmitry on 28/11/2015.
 */


var helpers  = require('../lib/util/helpers.js');
var homePage  = require('../page-object/HomePage');


describe('Home page tests', function() {

    it("Should contain defined elements",function(){

        homePage.go();

        var elementsToBeDisplayed  = ["header","footer","mainContainer","navigationBar"];

        elementsToBeDisplayed.forEach(function(elementName){
           var elem =  homePage[elementName];
           expect(elem.isDisplayed()).toBeTruthy();

        });


    });

    it("Navigation tests",function() {
        var navigationBar = homePage.navigationBar;
        navigationBar.findElements(by.css('a')).then(function(navigationLinks){
            expect(navigationLinks.length).toBeGreaterThan(0);
        })



    });








    });
