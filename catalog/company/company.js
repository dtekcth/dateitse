angular.module('dateitse.company', [
  'ui.router',
  'dateitse.catalogFactory'
])

  .config(function ($stateProvider) {

    $stateProvider.state('catalog.company', {
      url: '/companies/:companyName',
      resolve: {
        companyPromise: function ($q, catalogFactory, $stateParams) {
          var deferred = $q.defer();
          // deferred.resolve(catalogFactory.GetCompanyByName($stateParams.companyName));
          catalogFactory.GetCompanies().then(function () {
            deferred.resolve(catalogFactory.GetCompanyByName($stateParams.companyName));
          });
          return deferred.promise;
        }
      },
      controller: 'CompanyController as vm',
      templateUrl: 'company/company-details.html'
    });
  })

  .controller('CompanyController', CompanyController)

;

CompanyController.$inject = ['companyPromise'];

function CompanyController(companyPromise) {
  var vm = this;
  vm.company = companyPromise;
}

