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
      url: '',
      controller: 'CatalogController as vm',
      abstract: true,
      resolve: {
        companies: function ($q, catalogFactory) {
          var deferred = $q.defer();
          catalogFactory.GetCompanies().then(function (response) {
            deferred.resolve(catalogFactory.companies);
          });
          return deferred.promise;
        }
      },
      template: '<ui-view></ui-view>'
    }).state('catalog.browser', {
      url: '/catalog',
      controller: 'BrowserController as vm',
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
