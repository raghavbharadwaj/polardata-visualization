'use strict';

/**
 * @ngdoc function
 * @name assignment3App.controller:FacetviewCtrl
 * @description
 * # FacetviewCtrl
 * Controller of the assignment3App
 */
angular.module('assignment3App')
  .controller('FacetviewCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
