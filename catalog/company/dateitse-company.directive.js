angular.module('dateitse.company')

  .directive('dateitseCompany', dateitseCompany)

;

function dateitseCompany() {
  var directive = {
    restrict: 'E',
    templateUrl: 'company/dateitse-company.tpl.html',
    scope: {
      company: '=dateitseData'
    }
  };

  return directive;
}