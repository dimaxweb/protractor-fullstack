/**
 * Created by Dmitry.Mogilko on 12/8/2014.
 */

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['lib/runner.js'],

    multiCapabilities: [{
        'browserName': 'chrome'
    }],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000
    }
};