/**
 * Created by Dmitry on 27/11/2015.
 */

var homePageObject = {

    elements  : {
        navigationBar : {
            locator  :  function (){
                return by.css('.navbar-collapse')
            }
        },
        navigationBarHeader   : {
            locator  :  function(){
                return by.css('.navbar-header');
            }

        },

        myCarousel  : {
            locator  : function(){
                return by.css('#myCarousel');
            }
        }
    }



};

module.exports = homePageObject;

