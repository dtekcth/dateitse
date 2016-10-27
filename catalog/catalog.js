// Developed by Chalmers Teknologkonsulter (CTK) for DatE-IT in 2016
// Tel: 031-772 8332
// Mail: info(at)ctk(dot)se

angular.module('dateitse', [
  'ui.router',
  'ngAnimate',
  'ngTouch',
  'ngSanitize',
  'dateitse.catalog.companyFactory',
  'dateitse.catalog.browser',
  'dateitse.catalog.company-filter',
  'dateitse.company'
])

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/catalog');

    $stateProvider.state('catalog', {
      url: '',
      controller: 'CatalogController as vm',
      abstract: true,
      resolve: {
        companies: function ($q, companyFactory) {
          var deferred = $q.defer();
          companyFactory.GetCompanies().then(function (response) {
            deferred.resolve(companyFactory.companies);
          });
          return deferred.promise;
        }
      },
      template: '<ui-view></ui-view>'
    });
  })

  .controller('CatalogController', CatalogController)

;


CatalogController.$inject = ['$window', 'companyFactory'];

function CatalogController($window, companyFactory) {
  var vm = this;
  $window.scrollTo(0, 0);

  vm.companies = companyFactory.companies;
}
