angular.module('dateitse.catalog.browser', [
  'dateitse.catalog.company-filter'
])

  .controller('BrowserController', BrowserController)

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
