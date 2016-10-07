angular.module('dateitse.browser')

  .directive('dateitseAttributeFilter', dateitseAttributeFilter)

;

function dateitseAttributeFilter() {
  var directive = {
    restrict: 'E',
    templateUrl: 'browse/dateitse-attribute-filter.tpl.html',
    scope: {
      filters: '='
    },
    linkFn: linkFn
  };

  return directive;
}

function linkFn(scope) {
  // // Toggle all filters to whatever value the "all" checkbox gets when clicked
  // scope.toggleAllFilters = function () {
  //   // Get a reference to avoid errors if clicking fast
  //   var toggleStatus = scope.allFiltersSelected;
  //   angular.forEach(scope.filters, function (filter) {
  //     filter.selected = toggleStatus;
  //   });
  // };
  //
  // // When a single filter is toggled, make sure to update the "all" checkbox
  // scope.filtersToggled = function () {
  //   scope.allFiltersSelected = scope.filters.every(function (filter) {
  //     return filter.selected;
  //   });
  // };
}