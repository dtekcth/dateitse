angular.module('dateitse.company', [
  'ui.router',
  'dateitse.catalog.companyFactory'
])

  .config(function ($stateProvider) {

    $stateProvider.state('catalog.company', {
      url: '/companies/:companyName',
      resolve: {
        companyPromise: function ($q, companyFactory, $stateParams) {
          var deferred = $q.defer();
          // deferred.resolve(companyFactory.GetCompanyByName($stateParams.companyName));
          companyFactory.GetCompanies().then(function () {
            deferred.resolve(companyFactory.GetCompanyByName($stateParams.companyName));
          });
          return deferred.promise;
        }
      },
      controller: 'CompanyController as vm',
      templateUrl: 'company/dateitse-company-details.html'
    });
  })

  .controller('CompanyController', CompanyController)

;

CompanyController.$inject = ['$window', 'companyPromise'];

function CompanyController($window, companyPromise) {
  var vm = this;
  $window.scrollTo(0, 0);
  vm.company = companyPromise;
}

