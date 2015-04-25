'use strict';

describe('Controller: FacetviewCtrl', function () {

  // load the controller's module
  beforeEach(module('assignment3App'));

  var FacetviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FacetviewCtrl = $controller('FacetviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
