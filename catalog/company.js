(function () {

  angular.module('dateise.company', [
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

  ;

  CompanyController.$inject = ['$scope'];

  function CompanyController($scope) {
    var vm = this;

    vm.name = 'test company';

  }
})();