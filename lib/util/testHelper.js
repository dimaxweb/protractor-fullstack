/*
 * revisor
 * https://github.com/Dmitry.Mogilko/revisor
 *
 * Copyright (c) 2015 Dmitry Mogilko
 * Licensed under the MIT license.
 */

var config =  require('../configuration/nconfWrapper.js');
var colors = require('colors');
var request = require('request');
var fs  = require('fs');
var path  = require('path');


var util = {

    saveScreenShort : function(filename){


        browser.takeScreenshot().then(function(png) {

            var fullPathName = path.join(__dirname,filename);
            var stream = fs.createWriteStream(fullPathName);
            stream.write(new Buffer(data, 'base64'));
            stream.end();

        });



    },

    uploadFile : function(filePath,fileInput){

        var absolutePath = path.resolve(__dirname, filePath);
        fileInput.sendKeys(absolutePath);
    },

    hoverOverElement  : function(){

    },

    waitUntilReady  : function(){

    },

    handleAlert  : function(){

    }


};


module.exports =  util;


