angular.module('dateitse.catalog.company-filter', [])

  .filter('companyFilter', companyFilter)

;

function companyFilter() {
  return function (companies, query) {
    var searchText = query.searchText;
    var educations = [];
    var positions = [];

    angular.forEach(query.educations, function (education) {
      if (education.selected) {
        var title = '';
        switch (education.title) {
          case 'Elektroteknik':
            title = 'E';
            break;
          case 'Datateknik':
            title = 'D';
            break;
          case 'Informationsteknik':
            title = 'IT';
            break;
          default:
            break;
        }
        if (title.length) {
          educations.push(title);
        }
      }
    });

    angular.forEach(query.positions, function (position) {
      if (position.selected) {
        positions.push(position.title);
      }
    });


    return companies.filter(function (company) {

      var educationHit = educations.length === 0 || educations.every(function (education) {
          return company.educations.indexOf(education) > -1;
        });

      var positionHit = positions.length === 0 || positions.every(function (position) {
          return company.positions.indexOf(position) > -1;
        });

      return (company.name.trim().toLowerCase().indexOf(searchText.trim().toLowerCase()) > -1 && educationHit && positionHit);
    });
  }
}
