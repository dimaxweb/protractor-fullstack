/**
 * Created by Dmitry on 27/11/2015.
 */

var HomePageObjectTest = require('./HomePageObjectTest.js');
var helpers = require('../../../util/helpers.js');
var pageFactory =  require('../../page-factory.js');

describe('Page Factory / PageObject Base ', function() {

    it("Page Objects Factory",function(){

        helpers.goToUrl('http://localhost:9000');

        var homePageInstance  = pageFactory.create(HomePageObjectTest,{initObjects : true});

        console.log(homePageInstance);

        expect(homePageInstance).not.toBe(null);

        expect(homePageInstance.elements).not.toBe(null);

        console.log(typeof homePageInstance.getWebElement);

        expect(homePageInstance.getWebElement).toBeDefined();

        var navigationBar =  homePageInstance.getWebElement('navigationBar');

        console.log("Navigation bar is :",navigationBar);


        expect(navigationBar).toBeDefined();

        //expect(navigationBar.isDisplayed()),toBe(true);

    });



});

