angular.module('dateitse.browser', [

])

.controller('BrowserController', BrowserController)

;

function BrowserController() {
  var vm = this;

  vm.searchText = "";

  vm.allPositionsSelected = true;

  // Available positions
  vm.positions = [
    { title: "Trainee", selected: true },
    { title: "MSc Thesis", selected: true },
    { title: "Internship", selected: true },
    { title: "Summer job", selected: true },
    { title: "Part-time job", selected: true },
    { title: "Full-time job", selected: true }
  ];

  vm.allEducationsSelected = true;

  // Available educations
  vm.educations = [
    { title: "E", selected: true },
    { title: "D", selected: true },
    { title: "IT", selected: true }
  ];


  /**
   * Form specific methods
   */

  // This function is called whenever the form is submitted
  vm.submitSearch = function () {
    // Trigger a click on the scroll button to scroll down to the catalog
    angular.element('a[href="#catalog"]').triggerHandler('click');
    //  TODO: Implement a filter on the vm.companies array
    var query = getQuery();
    console.log('[DEBUG] Searching for companies...', '[DEBUG] Query:', query);
    vm.companies = getCompaniesByQuery(query);
  };

  // Build a query object based on the current text field value and checkbox status
  function getQuery() {
    var query = { text: vm.searchText, positions: [], educations: [] };
    angular.forEach(vm.positions, function (position) {
      if (position.selected) {
        query.positions.push(position.title);
      }
    });
    angular.forEach(vm.educations, function (education) {
      if (education.selected) {
        query.educations.push(education.title);
      }
    });
    return query;
  }

  // Return companies that match the provided query
  function getCompaniesByQuery(query) {
    var result = [];
    // For each company...
    angular.forEach(ALL_COMPANIES, function (company) {
      // (CASE INSENSITIVE) ... if the company name contains the query text, the name hit...
      // IF no text provided, don't care
      var nameHit = query.text.length ? company.name.trim().toLowerCase().indexOf(query.text.trim().toLowerCase()) > -1 : true;
      // IF all selected, don't care about the company attributes
      var positionHit = vm.allPositionsSelected;
      if (!positionHit) {
        // ... if any positions offered by the company are in the query, the position hit...
        query.positions.forEach(function (position) {
          console.log
          if (company.positions.indexOf(position) > -1) {
            positionHit = true;
            return;
          }
        });
      }
      // IF all selected, don't care about the company attributes
      var educationHit = vm.allEducationsSelected;
      if (!educationHit) {
        // ... if any education relevant for the company is in the query, the education hit...
        query.educations.forEach(function (education) {
          if (company.educations.indexOf(education) > -1) {
            educationHit = true;
            return;
          }
        });
      }

      if (nameHit && positionHit && educationHit) {
        result.push(company);
      }
    });
    return result;
  }

  // Toggle all positions to whatever value the "all" checkbox gets when clicked
  vm.toggleAllPositions = function () {
    // Get a reference to avoid errors if clicking fast
    var toggleStatus = vm.allPositionsSelected;
    angular.forEach(vm.positions, function (position) {
      position.selected = toggleStatus;
    });
  };

  // When a single position is toggled, make sure to update the "all" checkbox
  vm.positionsToggled = function () {
    vm.allPositionsSelected = vm.positions.every(function (position) {
      return position.selected;
    });
  };

  // Toggle all educations to whatever value the "all" checkbox gets when clicked
  vm.toggleAllEducations = function () {
    // Get a reference to avoid errors if clicking fast
    var toggleStatus = vm.allEducationsSelected;
    angular.forEach(vm.educations, function (education) {
      education.selected = toggleStatus;
    });
  };

  // When a single education is toggled, make sure to update the "all" checkbox
  vm.educationsToggled = function () {
    vm.allEducationsSelected = vm.educations.every(function (education) {
      return education.selected;
    });
  };
}