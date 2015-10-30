/**
 * Created by Dmitry.Mogilko on 10/29/2015.
 */

GLOBAL.testedResources = {}

var appConfig = require('../configuration/nconfWrapper.js')


module.exports = {

    isValidUrl: function (str) {
        var pattern = new RegExp('^(https?:\/\/)?' + // protocol
            '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|' + // domain name
            '((\d{1,3}\.){3}\d{1,3}))' + // OR ip (v4) address
            '(\:\d+)?(\/[-a-z\d%_.~+]*)*' + // port and path
            '(\?[;&a-z\d%_.~+=-]*)?' + // query string
            '(\#[-a-z\d_]*)?$', 'i'); // fragment locater
        if (!pattern.test(str)) {
            return false;
        } else {
            return true;
        }
    },


    testResourceExists: function (url) {

        if (util.isValidUrl) {
            return false;
        }

        console.log("Global map size is : ", Object.keys(GLOBAL.testedResources).length);

        if (GLOBAL.testedResources[url] === true) {
            console.log("Url was successfully tested previously :".green + GLOBAL.testedResources[url]);
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

                var message = "Url is failed :" + url;
                expect(false).toEqualBecause(true, message);
                //expect(false).toBe(true);

            }
        })

    },

    testTitle: function () {
        browser.getTitle().then(function (text) {
            console.log("Title".green + text);
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
                        if (href && href.indexOf("mailto") !== 0) {
                            console.log("Testing hyperlink:", href);
                            util.testResourceExists(href);
                        }

                    });
                }

            }

        });
    },

    testConsoleForErrors: function () {


        var errorLevel = config.get("errorLevel");
        browser.manage().logs().get('browser').then(function (browserLog) {
            browserLog.forEach(function (log) {
                //set error level from config
                expect(log.level.value).not.toBe(errorLevel);
            });
        });
    }

}


