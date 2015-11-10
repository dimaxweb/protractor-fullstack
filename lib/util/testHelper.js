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
     *
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


    cookies: {

        add: function (options) {
            var defaultOptions = {

            };
            var optionsToApply = defaultOptions;
            optionsToApply = nodeUtil._extend(defaultOptions,options);
            browser.manage().addCookie(options.name, options.value,options.path,options.domain,options.isSecure,options.expiry);
        },

        get: function (name) {
            return browser.manage().getCookie(name);
        },

        delete: function (name) {
             return  browser.manage().getCookie(name);
        },

        deleteAll: function () {
            browser.manage().deleteAllCookies();
        },

        getAll: function () {
          return  browser.manage().getCookies();
        }


    },

    DOM: {

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
        }


    }


};


module.exports = util;


