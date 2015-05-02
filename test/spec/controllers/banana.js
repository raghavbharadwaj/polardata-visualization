'use strict';

describe('Controller: BananaCtrl', function () {

  // load the controller's module
  beforeEach(module('assignment3App'));

  var BananaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BananaCtrl = $controller('BananaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
