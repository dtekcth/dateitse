angular.module('dateitse.browser')

  .directive('dateitseFilter', dateitseFilter)

;

function dateitseFilter() {
  var directive = {
    restrict: 'E',
    templateUrl: 'browse/dateitse-filter.tpl.html',
    scope: {
      filters: '='
    }
  };

  return directive;
}