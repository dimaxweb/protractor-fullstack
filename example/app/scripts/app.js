'use strict';

angular.module('myApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'StaticPageCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'StaticPageCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'StaticPageCtrl'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'StaticPageCtrl'
      }).when('/404', {
        templateUrl: 'views/404.html',
        controller: 'StaticPageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
