(function () {

  angular.module('dateitse.company', [
    'ui.router'
  ])

    .config(function ($stateProvider) {

      $stateProvider.state('catalog.company', {
        url: '/test',
        controller: 'CompanyController as vm',
        views: {
          '@': {
            templateUrl: 'company-details.html'
          }
        }

      });
    })

    .controller('CompanyController', CompanyController)

    .directive('dateitseCompany', dateitseCompany)

  ;

  CompanyController.$inject = ['$scope'];

  function CompanyController($scope) {
    var vm = this;

    vm.name = 'test company';

  }

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

})();