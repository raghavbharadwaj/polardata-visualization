'use strict';

describe('Controller: Query6Ctrl', function () {

  // load the controller's module
  beforeEach(module('assignment3App'));

  var Query6Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Query6Ctrl = $controller('Query6Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
