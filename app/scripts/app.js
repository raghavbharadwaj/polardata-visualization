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
    'ngTouch'
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
      .when('/query1', {
        templateUrl: 'views/query1.html',
        controller: 'Query1Ctrl'
      })
      .when('/query2', {
        templateUrl: 'views/query2.html',
        controller: 'Query2Ctrl'
      })
      .when('/query3', {
        templateUrl: 'views/query3.html',
        controller: 'Query3Ctrl'
      })
      .when('/query5', {
        templateUrl: 'views/query5.html',
        controller: 'Query5Ctrl'
      })
      .when('/query6', {
        templateUrl: 'views/query6.html',
        controller: 'Query6Ctrl'
      })
      .when('/query1', {
        templateUrl: 'views/query1.html',
        controller: 'Query1Ctrl'
      })
      .when('/arctic', {
        templateUrl: 'views/arctic.html',
        controller: 'ArcticCtrl'
      })
      .when('/antarctic', {
        templateUrl: 'views/antarctic.html',
        controller: 'AntarcticCtrl'
      })
      /*.otherwise({
        redirectTo: '/'
      })*/;
  });
