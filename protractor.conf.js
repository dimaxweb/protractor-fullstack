/**
 * Created by Dmitry.Mogilko on 12/8/2014.
 */
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['lib/runner.js'],

    multiCapabilities: [{
        'browserName': 'chrome'
    }],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000
    },

    onPrepare: function() {
        require('jasmine-reporters');
        jasmine.getEnv().addReporter(
            new jasmine.JUnitXmlReporter(null, true, true, 'reports/')
        );

    },
}
