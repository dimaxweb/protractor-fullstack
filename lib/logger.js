/**
 * Created by Dmitry.Mogilko on 11/5/2015.
 */

var winston = require('winston'),
    config =  require('../configuration/appConfig.js');
    path = require('path')


var loggingConfig = config.get('logging') || {};
var configTransports =  loggingConfig.transports  || {}
var winstonTransports = [];


for(var transportName  in configTransports){
    winstonTransports.push(new (winston.transports[transportName])(configTransports[transportName]));
}

var Logger = new (winston.Logger)({
    transports:winstonTransports
});

module.exports = Logger;







