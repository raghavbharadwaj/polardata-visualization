'use strict';

describe('Directive: query4', function () {

  // load the directive's module
  beforeEach(module('assignment3App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<query4></query4>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the query4 directive');
  }));
});
