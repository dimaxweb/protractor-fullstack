var revisor = require('./util');
var config =  require('../configuration/nconfWrapper.js');
var colors  = require('colors');
var path  = require('path')

require('./testExtensions');

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

    it('Tests failed', function() {
        expect(false).toBe(true);
    });









});







