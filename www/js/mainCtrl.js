angular
.module('starter')
.controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
  $scope.hours = 0;
  $scope.minutes = 0;
  $scope.seconds = 0;

  $scope.startTimer = function(){
    $interval(function(){
      $scope.seconds= $scope.seconds-1;
    }, 1000);
  }
}])
