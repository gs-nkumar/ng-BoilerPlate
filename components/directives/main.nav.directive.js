;(function() {

  'use strict';

  /**
   * @example
   * <main-nav><main-nav/>
   *
   */
  angular
    .module('mainApp')
    .directive('mainNav', tinMainNav);

  function tinMainNav() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/main-nav.html'
    };

    return directiveDefinitionObject;
  }

})();