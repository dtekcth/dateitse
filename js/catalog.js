// Developed by Chalmers Teknologkonsulter (CTK) for DatE-IT in 2016
// Tel: 031-772 8332
// Mail: info(at)ctk(dot)se
(function () {

  angular.module('dateitse', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.bootstrap', 'ui.bootstrap.accordion'])
    .controller('CatalogController', catalogController);

  catalogController.$inject = ['$scope', '$http'];

  function catalogController($scope, $http) {
    /**
     * Initial reference to all fetched companies
     */
    var ALL_COMPANIES = [];

    /**
     * Scope variables
     */
    $scope.companies = [];

    $scope.searchText = "";

    $scope.allPositionsSelected = true;

    // Available positions
    $scope.positions = [
      { title: "Trainee", selected: true },
      { title: "MSc Thesis", selected: true },
      { title: "Internship", selected: true },
      { title: "Summer job", selected: true },
      { title: "Part-time job", selected: true },
      { title: "Full-time job", selected: true }
    ];

    $scope.allEducationsSelected = true;

    // Available educations
    $scope.educations = [
      { title: "E", selected: true },
      { title: "D", selected: true },
      { title: "IT", selected: true }
    ];


    /**
     * Scope methods
     */

    // fetchCompanies is called upon view load by the ng-init attribute on <body>
    // It is put on $scope so that it can be called later on in case it is needed
    $scope.fetchCompanies = function () {
      // TODO: Add a timeout?
      // Fetch the data from the companies.json file
      $http.get('data/companies.json').then(function (response) {
        switch (response.status) {
          // If everything went OK, bind the data to the $scope variable companies.
          case 200:
            angular.forEach()
            ALL_COMPANIES = response.data;
            $scope.companies = ALL_COMPANIES;
            // TODO: Debugging
            console.log('[DEBUG] $scope.companies', $scope.companies);
            break;
          default:
            // TODO: What should we do if something goes wrong?
            console.log(response);
        }
      });
    };

    /**
     * Form specific methods
     */

    // This function is called whenever the form is submitted
    $scope.submitSearch = function () {
      // Trigger a click on the scroll button to scroll down to the catalog
      angular.element('a[href="#catalog"]').triggerHandler('click');
      //  TODO: Implement a filter on the $scope.companies array
      var query = getQuery();
      console.log('[DEBUG] Searching for companies...', '[DEBUG] Query:', query);
      $scope.companies = getCompaniesByQuery(query);
    };

    // Build a query object based on the current text field value and checkbox status
    function getQuery() {
      var query = { text: $scope.searchText, positions: [], educations: [] };
      angular.forEach($scope.positions, function (position) {
        if (position.selected) {
          query.positions.push(position.title);
        }
      });
      angular.forEach($scope.educations, function (education) {
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
        var positionHit = $scope.allPositionsSelected;
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
        var educationHit = $scope.allEducationsSelected;
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
    $scope.toggleAllPositions = function () {
      // Get a reference to avoid errors if clicking fast
      var toggleStatus = $scope.allPositionsSelected;
      angular.forEach($scope.positions, function (position) {
        position.selected = toggleStatus;
      });
    };

    // When a single position is toggled, make sure to update the "all" checkbox
    $scope.positionsToggled = function () {
      $scope.allPositionsSelected = $scope.positions.every(function (position) {
        return position.selected;
      });
    };

    // Toggle all educations to whatever value the "all" checkbox gets when clicked
    $scope.toggleAllEducations = function () {
      // Get a reference to avoid errors if clicking fast
      var toggleStatus = $scope.allEducationsSelected;
      angular.forEach($scope.educations, function (education) {
        education.selected = toggleStatus;
      });
    };

    // When a single education is toggled, make sure to update the "all" checkbox
    $scope.educationsToggled = function () {
      $scope.allEducationsSelected = $scope.educations.every(function (education) {
        return education.selected;
      });
    };


  }

})();