// Developed by Chalmers Teknologkonsulter (CTK) for DatE-IT in 2016
// Tel: 031-772 8332
// Mail: info(at)ctk(dot)se

angular.module('dateitse', [
  'ui.router',
  'ngAnimate',
  'ngTouch',
  'ngSanitize',
  'dateitse.catalogFactory',
  'dateitse.browser',
  'dateitse.company'
])

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/catalog');

    $stateProvider.state('catalog', {
      url: '/catalog',
      controller: 'CatalogController as vm',
      resolve: {
        companies: function ($q, catalogFactory) {
          var deferred = $q.defer();
          deferred.resolve(catalogFactory.GetCompanies());
          return deferred.promise;
        }
      },
      templateUrl: 'browse/catalog-browser.tpl.html'
    });
  })

  .controller('CatalogController', CatalogController)

;


CatalogController.$inject = ['$scope', 'catalogFactory'];

function CatalogController($scope, catalogFactory) {
  var vm = this;
  console.log(catalogFactory.companies);
  vm.companies = catalogFactory.companies;

}
