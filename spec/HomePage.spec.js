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

        homePage.navigationLinks.then(function(links) {
            expect(links.length).toBeGreaterThan(0);
        });



    });

    it("Other pages menu is available",function(){

        homePage.openMenu();

        var moreLinksContainer = homePage.moreLinksContainer;
        expect(moreLinksContainer.isDisplayed()).toBeTruthy();

        browser.debugger();
    });









    });
