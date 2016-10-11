angular.module('dateitse.catalog.browser')

  .directive('dateitseAttribute', dateitseAttribute)

;

function dateitseAttribute() {
  var directive = {
    restrict: 'E',
    templateUrl: 'browse/dateitse-attribute.tpl.html',
    scope: {
      attributes: '='
    }
  };

  return directive;
}