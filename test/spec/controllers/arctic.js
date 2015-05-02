'use strict';

describe('Controller: ArcticCtrl', function () {

  // load the controller's module
  beforeEach(module('assignment3App'));

  var ArcticCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArcticCtrl = $controller('ArcticCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
