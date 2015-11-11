var config =  require('../configuration/appConfig.js');
var colors  = require('colors');
var path  = require('path')

require('./extensions');

var ptor;

describe('Generic sanity test  - ', function() {


    beforeEach(function(){


        var url = config.get('webServer');
        browser.get(url);
        browser.waitForAngular();



    });

    it('Test passed', function() {
         expect(true).toBe(true);
    });










});







