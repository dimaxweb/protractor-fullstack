'use strict';

angular.module('myApp')
  .controller('MainCtrl', function ($scope) {
    $scope.showMenu  = false,
    $scope.angularVarTest  = "testAccessToBinding"
  });
