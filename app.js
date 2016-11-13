(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message="";
  $scope.menu="";
  $scope.check = function () {

    var arrayOfItems = $scope.menu.split(',');

    if (!$scope.menu){
      $scope.message="Please enter data first!";
    } else {
    if (arrayOfItems.length>3) {
      $scope.message="Too much!";
    } else {
      $scope.message="Enjoy!";
    };
  };
  };
  };
})();
