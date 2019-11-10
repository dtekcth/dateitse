// Developed by Chalmers Teknologkonsulter (CTK) for DatE-IT in 2016
// Tel: 031-772 8332
// Mail: info(at)ctk(dot)se

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