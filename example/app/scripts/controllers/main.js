'use strict';

angular.module('myApp')
  .controller('MainCtrl', function ($scope) {
    $scope.showMenu  = false,
    $scope.angularScopeValue  = "testAccessToBinding"

    console.warn("This is warning to fail on");
    console.error("This is error");
    console.error("Ignore error:Error");
  });
