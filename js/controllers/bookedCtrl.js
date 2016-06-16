angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, $stateParams, mainSrv) {

  $scope.data = mainSrv.travelInfo;

  console.log('$scope.data', $scope.data);

  for (var i = 0; i < $scope.data.length; i++) {
    if ($scope.data[i].id === parseFloat($stateParams.id)) {
      $scope.myDestination = $scope.data[i];
    }
  }


});