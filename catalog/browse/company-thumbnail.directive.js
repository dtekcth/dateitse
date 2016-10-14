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