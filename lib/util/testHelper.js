/*
 * revisor
 * https://github.com/Dmitry.Mogilko/revisor
 *
 * Copyright (c) 2015 Dmitry Mogilko
 * Licensed under the MIT license.
 */

var config =  require('../../configuration/appConfig.js');

var colors = require('colors');

var request = require('request');

var fs  = require('fs');

var path  = require('path');

var util = {

    /**
     * Saves current screenshort .png file
     * @example <caption>saveScreenShort(path.join(__dirname,"screenshorts/test.png"));</caption>
     * @filePath  - where to save screeshort .Absolute path expected
     * @returns Promise
     */
    saveScreenShort : function(filepath){
        return browser.takeScreenshot().then(function(png) {
            var fullPathName = path.join(filepath);
            var stream = fs.createWriteStream(fullPathName);
            stream.write(new Buffer(png, 'base64'));
            stream.end();

        });

    },



    waitUntilReady  : function(){

    },

    handleAlert  : function(){

    },

    dom : {

        setFileUpload  :  function(filePath,fileInput){
            fileInput.sendKeys(filePath);
        },


        findAndHover  : function(cssSelector){
            browser.actions().mouseMove(element(by.css('#userOptions'))).perform();
        },

        findAndClick  : function(cssSelector){
            element(by.css(cssSelector)).click();
        }
    }


};


module.exports =  util;


