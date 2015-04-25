'use strict';

describe('Controller: Query4Ctrl', function () {

  // load the controller's module
  beforeEach(module('assignment3App'));

  var Query4Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Query4Ctrl = $controller('Query4Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
