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
    GetCompanyByName: GetCompanyByName,
    companies: []
  };

  return factory;

  // Callback is optional
  function GetCompanies() {

    // Fetch the data from the companies.json file
    return $http.get('../data/companies.json').then(function (response) {
      // TODO: Use
      // factory.companies = response.data;
      mockData(response.data);
    }, function (response) {

      console.log(response);

    });
  }

  function GetCompanyByName(name) {
    if (factory.companies.length) {
      return getArrayEntryByName(factory.companies, name);
    } else {
      return $http.get('../data/companies.json').then(function (response) {
        return getArrayEntryByName(response.data, name);
      }, function (response) {

        console.log(response);

      });
    }
  }

  function getArrayEntryByName(array, name) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].name === name) {
        return array[i];
      }
    }
    return { name: 'No company found with that name.' };
  }

  function mockData(array) {
    angular.forEach(array, function (company) {
      factory.companies.push(angular.copy(company));
      company.name = 'Guld och silver AB';
      factory.companies.push(angular.copy(company));
      company.name = 'Dammsugarsäljarna';
      factory.companies.push(angular.copy(company));
      company.name = 'Bilmekaniker';
      factory.companies.push(angular.copy(company));
      company.name = 'InformationsTeknikerna';
      factory.companies.push(angular.copy(company));
      company.name = 'Dansk korv AB';
      factory.companies.push(angular.copy(company));
      company.name = 'Intressant företag';
      factory.companies.push(angular.copy(company));
      company.name = 'Bra företag';
      factory.companies.push(angular.copy(company));
      factory.companies.push(angular.copy(company));
      company.name = 'Isglass AB';
      factory.companies.push(angular.copy(company));
      company.name = 'Partyhattar AB';
      factory.companies.push(angular.copy(company));
    });
  }
}
