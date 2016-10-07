angular.module('dateitse.company')

  .directive('dateitseCompany', dateitseCompany)

;

function dateitseCompany() {
  var directive = {
    restrict: 'E',
    templateUrl: 'company/dateitse-company.tpl.html',
    scope: {
      company: '=dateitseData'
    },
    link: linkFn
  };

  return directive;

  function linkFn(scope) {
    // TODO: Temp
    var randomColors = [
      '8E8E8C',
      'EDECEA',
      'BAB9B7',
      '62615F'
    ];

    function getRandom() {
      return Math.floor((Math.random() * randomColors.length) + 1);
    }

    var random = getRandom();
    var inverseRandom = Math.floor(random - (randomColors.length / 2) % (randomColors.length - 1));

    scope.logo = 'http://placehold.it/300x300' + '/' + randomColors[random] + '/' + randomColors[inverseRandom];
  }

}