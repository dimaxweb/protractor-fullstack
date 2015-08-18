/**
 * Created by Dmitry.Mogilko on 12/16/2014.
 */


"use strict";

/**
 Save as config/index.js

 Config files =
 - config/config.json
 - config/config.$NODE_ENV.json
 - config/config.$NODE_ENV.$USER.json
 **/

var path = require('path');
var fs = require('fs');
var os  = require('os');

var conf = module.exports = require('nconf')
    .argv()
    .env()
    .defaults({NODE_ENV: 'production'});

//
var files = [
    path.join(__dirname, 'config.json'),
    path.join(__dirname, 'config.' + conf.get('NODE_ENV') + '.json'),
    path.join(__dirname, 'config.' + conf.get('NODE_ENV') + '.' + conf.get('USER') + '.json')
].filter(fs.existsSync);

console.log('Loading config from files', files);

conf.use('memory', {loadFrom: files});





