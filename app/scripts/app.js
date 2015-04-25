'use strict';

/**
 * @ngdoc overview
 * @name assignment3App
 * @description
 * # assignment3App
 *
 * Main module of the application.
 */
angular
  .module('assignment3App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'd3'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/d3', {
        templateUrl: 'views/d3.html',
        controller: 'D3Ctrl'
      })
      .when('/query4', {
        templateUrl: 'views/query4.html',
        controller: 'Query4Ctrl'
      })
      .when('/FacetView', {
        templateUrl: 'views/facetview.html',
        controller: 'FacetviewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
