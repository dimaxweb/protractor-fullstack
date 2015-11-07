/**
 * Created by Dmitry.Mogilko on 11/6/2015.
 */
var ch = require('child_process'),
config =  require('../configuration/appConfig.js');
logger = require('./logger.js'),
fs  = require('fs'),
util   = require('util'),
sauceConnectLauncher = require('sauce-connect-launcher')


var protractorConf  =  config.get("protractrorConfig"),
    sauceConnectConfig   =  protractorConf.sauceConnect;

if(sauceConnectConfig){

    var sauceCredentials = {
            "username"  : protractorConf.sauceUser,
            "accessKey"  : protractorConf.sauceKey
        };


        var processArguments = util._extend(sauceCredentials,sauceConnectConfig.arguments);

        logger.info("Starting sauce connect with arguments:",processArguments) ;


        sauceConnectLauncher(processArguments, function (err, sauceConnectProcess) {
            console.log("Started Sauce Connect Process");

        });



}

else{
    logger.info("Sauce connect config not found");
}

