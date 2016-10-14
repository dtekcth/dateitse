angular.module('dateitse.catalog.browser', [
  'dateitse.catalog.company-filter'
])

  .config(function ($stateProvider) {
    $stateProvider.state('catalog.browser', {
      url: '/catalog',
      controller: 'BrowserController as vm',
      templateUrl: 'browse/catalog-browser.tpl.html'
    });
  })

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
    { title: "Electrical Engineering", selected: false },
    { title: "Computer Science", selected: false },
    { title: "Information Technology", selected: false }
  ];
}
