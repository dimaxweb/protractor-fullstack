/*
 * revisor
 * https://github.com/Dmitry.Mogilko/revisor
 *
 * Copyright (c) 2015 Dmitry Mogilko
 * Licensed under the MIT license.
 */

var config = require('../../configuration/appConfig.js');

var colors = require('colors');

var request = require('request');

var fs = require('fs');

var path = require('path');

var nodeUtil  =  require('util');

var util = {

    /**
     * Saves current screenshort .png file
     * @example <caption>saveScreenShort(path.join(__dirname,"screenshorts/test.png"));</caption>
     * @filePath  - where to save screeshort .Absolute path expected
     * @returns Promise
     */
    saveScreenShort: function (filepath) {
        return browser.takeScreenshot().then(function (png) {
            var fullPathName = path.join(filepath);
            var stream = fs.createWriteStream(fullPathName);
            stream.write(new Buffer(png, 'base64'));
            stream.end();

        });

    },

    /**
     * Safely navigate to new url while settings the window height and width to avoid bugs related to it
     * @param Url to Navigate to
     * @param options
     * @windowWidth  : set the window width (default : 1280)
     * @windowHeight  : set the window height (default  : 1204)
     * @waitForAngular  : if to wait for angular to finish internal tasks (default  :true)
     */
    goToUrl  : function(url,options){

        var defaultWindowOptions =  {
            windowHeight  : 1024,
            windowWidth   :  1280,
            waitForAngular  : true
        };

        var optionsToApply = defaultWindowOptions;

        if(url){
            if(options){

                optionsToApply  = nodeUtil._extend(defaultWindowOptions,options);
                browser.get(url);
                browser
                    .driver()
                    .manage()
                    .window()
                    .setSize(optionsToApply.windowWidth,options.windowHeight);

                if(optionsToApply.waitForAngular){
                    browser.waitForAngular();
                }
            }
        }


    },

    /**
     * Returns promise resolving current browser name
     */
    getBrowserName : function(){
        browser.getCapabilities().then(function (cap) {
           return cap.caps_.browserName;
        });
    },

    /**
     * Returns promise reolving if current browser is Internet Explorer
     */
    isIE  :function() {
        util.getBrowserName().then(function(browserName){
               return browserName.indexOf("Internet Explorer") > -1;
        });
    },

    /**
     * Switch the browser to newly opened window
     */
    switchToNewWindow  : function(){
        browser.getAllWindowHandles().then(function (handles) {
            if(handles && handles.length > 0){
                newWindowHandle = handles[handles.length -1];
                return browser.switchTo().window(newWindowHandle);
            }
            return;

        });
    },


    cookies: {

        /**
         *
         * @param options
         */
        add: function (options) {
            var defaultOptions = {

            };
            var optionsToApply = defaultOptions;
            optionsToApply = nodeUtil._extend(defaultOptions,options);
            browser.manage().addCookie(options.name, options.value,options.path,options.domain,options.isSecure,options.expiry);
        },

        /**
         *
         * @param name  - name of the cookie
         * @returns {Promise}
         */
        get: function (name) {
            return browser.manage().getCookie(name);
        },

        /**
         * Delete the cookie
         * @param name   - name of the cookie
         * @returns {Promise}
         */
        delete: function (name) {
             return  browser.manage().deleteCookie(name);
        },

        /**
         * Delete all cookies
         */
        deleteAll: function () {
            browser.manage().deleteAllCookies();
        },

        /**
         * Get all cookies
         * @returns {Promise}
         */
        getAll: function () {
          return  browser.manage().getCookies();
        }


    },

    DOM: {

        /**
         * Set value into file upload
         * @param filePath  - path of the file to upload
         * @param fileInput  - WebElement file input
         */
        setFileUpload: function (filePath, fileInput) {
            fileInput.sendKeys(filePath);
        },

        inputText :function(element,inputText){
            element.sendKeys(inputText);
        },

        elementPressKey : function(element,key){
            element.sendKeys(key);
        },

        elementMouseMove: function (element) {
            browser.actions().mouseMove(element).perform();
        },

        elementMouseOut: function (element) {
            browser.actions().mouseOut(element).perform();
        },


        elementRightClick   :function(element){
            browser.actions().mouseMove(element).click(protractor.Button.right);
        },

        elementDoubleClick  : function(element){
            browser.actions().doubleClick(element).perform();
        },


        /**
         *
         * @param WebElement
         * @param timeout   -timeout in miliseconds to wait
         * @returns {Promise}
         */
        waitForElementToBeVisible : function(element,timeout){
                 return browser.driver.wait(function(){
                           return element.isDisplayed();
                 },timeout);
        },

        /**
         *
         * @param element  -   WebElement to check the class on
         * @param className - the name of the class
         * @returns {*|webdriver.promise.Promise}
         */

        hasClass   :  function(element,className){
            return element.getAttribute('class').then(function(classes){

                return classes.split(' ').indexOf(className) !== -1;
            });


        }

    }


};


module.exports = util;


