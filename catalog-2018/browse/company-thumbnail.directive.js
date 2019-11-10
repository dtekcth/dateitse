// Developed by Chalmers Teknologkonsulter (CTK) for DatE-IT in 2016
// Tel: 031-772 8332
// Mail: info(at)ctk(dot)se

angular.module('dateitse.company')

  .directive('dateitseCompanyThumbnail', dateitseCompanyThumbnail)

;

function dateitseCompanyThumbnail() {
  var directive = {
    restrict: 'E',
    templateUrl: 'browse/company-thumbnail.tpl.html',
    replace: true,
    scope: {
      company: '=dateitseData'
    }
  };

  return directive;
}
