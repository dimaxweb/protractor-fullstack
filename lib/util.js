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

GLOBAL.testedResources = {};

var util = {

    takeScreenShort : function(data, filename){
        var fullPathName = path.join(__dirname,filename);
        var stream = fs.createWriteStream(fullPathName);
        stream.write(new Buffer(data, 'base64'));
        stream.end();

    },

    testResourceExists: function (url) {

        //TODO  : check url for pattern

        if (!url) {
            return false;
        }

        console.log("Global map size is : ",Object.keys(GLOBAL.testedResources).length);

        if(GLOBAL.testedResources[url]===true){
            console.log("Url was successfully tested previously :".green  + GLOBAL.testedResources[url]);
            return;
        }

        console.log("Testing resource :".green, url);

        request({
            uri: url,
            method: 'HEAD'
        }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log("Resource tested successfully :".green, url);

            }

            else {

                var message = "Url is failed :"   + url;
                expect(false).toEqualBecause(true, message );
                //expect(false).toBe(true);

            }
        })

    },

    testTitle  : function(){
        browser.getTitle().then(function(text){
            console.log("Title".green  + text);
            expect(text.length).toBeGreaterThan(0);
        });



    },

    testHyperLinksUrls: function () {

        //TODO  : ability to specify parent elements
        element.all(by.tagName('a')).then(function (links) {
            var count = links.length;
            for (var i = 0; i < count; i++) {
                var link = links[i];
                if (link.isDisplayed()) {
                    link.getAttribute('href').then(function (href) {

                        //TODO  : move to configuration
                        if(href && href.indexOf("mailto")!==0){
                            console.log("Testing hyperlink:",href);
                            util.testResourceExists(href);
                        }

                    });
                }

            }

        });
    },

    testConsoleForErrors : function(){


        var errorLevel = config.get("errorLevel");
        browser.manage().logs().get('browser').then(function(browserLog) {
            browserLog.forEach(function(log){
                //set error level from config
                expect(log.level.value).not.toBe(errorLevel);
            });
        });
    }

};


module.exports =  util;


