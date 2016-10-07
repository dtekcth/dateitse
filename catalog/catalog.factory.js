// Developed by Chalmers Teknologkonsulter (CTK) for DatE-IT in 2016
// Tel: 031-772 8332
// Mail: info(at)ctk(dot)se
angular.module('dateitse.catalogFactory', [])

  .factory('catalogFactory', catalogFactory)

;

catalogFactory.$inject = ['$http'];

function catalogFactory($http) {

  var factory = {
    GetCompanies: GetCompanies,
    companies: []
  };

  return factory;

  function GetCompanies() {

    // Fetch the data from the companies.json file
    $http.get('../data/companies.json').then(function (response) {

      angular.forEach(response.data, function (company) {
        factory.companies.push(angular.copy(company));
        factory.companies.push(angular.copy(company));
        factory.companies.push(angular.copy(company));
        factory.companies.push(angular.copy(company));
        factory.companies.push(angular.copy(company));
        factory.companies.push(angular.copy(company));
        company.name = 'Lorem ipsum';
        factory.companies.push(angular.copy(company));
        company.name = 'Bra företag';
        factory.companies.push(angular.copy(company));
        factory.companies.push(angular.copy(company));
        company.name = 'Snuskhummer AB';
        factory.companies.push(angular.copy(company));
        company.name = 'Partyhattar AB';
        factory.companies.push(angular.copy(company));

      });

      return factory.companies;

    }, function (result) {

      console.log(response);

    });
  }
}
