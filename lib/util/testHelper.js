/*
 * revisor
 * https://github.com/Dmitry.Mogilko/revisor
 *
 * Copyright (c) 2015 Dmitry Mogilko
 * Licensed under the MIT license.
 */

var config =  require('../../configuration/nconfWrapper.js');

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


    uploadFile : function(filePath,fileInput){

        var absolutePath = path.resolve(__dirname, filePath);
        fileInput.sendKeys(absolutePath);
    },



    waitUntilReady  : function(){

    },

    handleAlert  : function(){

    },

    dom : {
        findAndHover  : function(){

        },

        findAndClick  : function(){

        }
    }


};


module.exports =  util;

