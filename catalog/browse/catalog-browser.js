angular.module('dateitse.browser', [])

  .controller('BrowserController', BrowserController)

  .filter('companyFilter', companyFilter)

;

function BrowserController() {
  var vm = this;

  vm.searchText = "";

  // Available positions
  vm.positions = [
    { title: "Trainee", selected: false },
    { title: "MSc Thesis", selected: false },
    { title: "Internship", selected: false },
    { title: "Summer job", selected: false },
    { title: "Part-time job", selected: false },
    { title: "Full-time job", selected: false }
  ];

  // Available educations
  vm.educations = [
    { title: "Elektroteknik", selected: false },
    { title: "Datateknik", selected: false },
    { title: "Informationsteknik", selected: false }
  ];
}

function companyFilter() {
  return function (companies, query) {
    var result = companies;
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

    // angular.forEach(companies, function(company) {})

    return result;
  }
}