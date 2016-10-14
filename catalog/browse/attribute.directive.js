angular.module('dateitse.catalog.browser')

  .directive('dateitseAttribute', dateitseAttribute)

;

function dateitseAttribute() {
  var directive = {
    restrict: 'E',
    templateUrl: 'browse/attribute.tpl.html',
    replace: true,
    scope: {
      attributes: '='
    }
  };

  return directive;
}