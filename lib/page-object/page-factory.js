/**
 * Created by Dmitry on 26/11/2015.
 */

var PageObjectBase  = require('./page-object-base.js');

var pageFactory = {

   create  : function(pageObject,options){


       var opts = options || {};

       var pageObjectInstance = null;

       if(pageObject){

           /**
                create the instance and inherit from base object
           **/

           pageObjectInstance  = new PageObjectBase(pageObject);


           /*
               init elements
            */
            if(pageObject && pageObject.elements && opts.init === true){

                var elements = pageObject.elements;

                for(var name in elements){
                    var elementData = elements[name];
                    element.webElement = elementData.locator();
                    console.log("Web Element is :",element.webElement);
                }


            }
            else{
                /*
                   /TODO  : throw exception
                 */
            }

        }

       return pageObjectInstance;
   }

}

module.exports  = pageFactory;
