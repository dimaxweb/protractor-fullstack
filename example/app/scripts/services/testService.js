/**
 * Created by Dmitry.Mogilko on 11/15/2015.
 */
angular.module('myApp').factory('apiService', function () {
      var api = {
        getTestData  : function(){
          return {
            id : 10,
            name  : "protractor-fullstack"
          }
        }
      }
  return api;
});
