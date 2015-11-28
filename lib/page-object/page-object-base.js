/**
 * Created by Dmitry on 26/11/2015.
 */
var helpers = require('../util/helpers.js');
var _=require('lodash');


function PageObjectBase(pageObject) {

    this.helpers = helpers;

    _.merge(this,pageObject);

}

PageObjectBase.prototype.getWebElement = function (name) {

    var elements = this["elements"];

    var webElement = null;

    if(elements){

        var elementData = elements[name];

        /*
         not  initialized
         */
        if(!elementData.webElement){
            elementData.webElement = webElement = elementData.locator();

        }
    }



    return webElement;
}

module.exports   = PageObjectBase;
