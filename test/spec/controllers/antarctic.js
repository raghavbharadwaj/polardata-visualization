'use strict';

describe('Controller: AntarcticCtrl', function () {

  // load the controller's module
  beforeEach(module('assignment3App'));

  var AntarcticCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AntarcticCtrl = $controller('AntarcticCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
