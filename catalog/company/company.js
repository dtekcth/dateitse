// Developed by Chalmers Teknologkonsulter (CTK) for DatE-IT in 2016
// Tel: 031-772 8332
// Mail: info(at)ctk(dot)se

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
          companyFactory.GetCompanies().then(function () {
            deferred.resolve(companyFactory.GetCompanyByName($stateParams.companyName));
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

CompanyController.$inject = ['$window', 'companyPromise'];

function CompanyController($window, companyPromise) {
  var vm = this;
  $window.scrollTo(0, 0);
  vm.company = companyPromise;

  vm.viewLargeImage = function (imgURL) {
    vm.currentLargeImage = imgURL;
  };

  vm.dismissLargeImage = function () {
    vm.currentLargeImage = '';
  }
}

