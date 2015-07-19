angular
  .module('starter')
  .controller('MainCtrl', ['$scope', '$interval', function ($scope, $interval) {
    $scope.hours = 0;
    $scope.minutes = 0;
    $scope.seconds = 0;

    var promise;

  //increment value on icon click
  $scope.plus = function(unit){
    switch(unit){
      case 'hours':
      if($scope.hours<23){
        $scope.hours++;
      }
      break;
      case 'minutes':
      if($scope.minutes<59){
        $scope.minutes++;
      }
      break;
      case 'seconds':
      if($scope.seconds<59){
        $scope.seconds++;
      }
      break;
    }
  };

  //decrement value on icon click
  $scope.minus = function(unit){
    switch(unit){
      case 'hours':
      if($scope.hours>0){
        $scope.hours--;
      }
      break;
      case 'minutes':
      if($scope.minutes>0){
        $scope.minutes--;
      }
      break;
      case 'seconds':
      if($scope.seconds>0){
        $scope.seconds--;
      }
      break;
    }
  };

  $scope.startTimer = function(){
    promise = $interval(function(){

      //reset minutes and seconds and decrement hours
      if($scope.seconds<=0 && $scope.minutes<=0 && $scope.hours>0){
        $scope.hours--;
        $scope.minutes = 59;
        $scope.seconds = 60;
      }

      //reset seconds and decrement minutes
      if($scope.seconds<=0 && $scope.minutes>0){
        $scope.minutes--;
        $scope.seconds = 60; //$scope.seconds decrements immediately so 60 is really 59
      }

      //decrement seconds every iteration
      $scope.seconds--;
      console.log($scope.seconds);

      //end timer
      if($scope.seconds<=0 && $scope.minutes<=0 && $scope.hours<=0){
        $scope.hours = 0;
        $scope.minutes = 0;
        $scope.seconds = 0;
        $interval.cancel(promise);
        console.log('its over');
        $scope.vibrateNotify();
        alert("Time\'s Up!");
      }

    }, 1000);
   //vibrate on timer end
  $scope.vibrateNotify = function () {
      navigator.notification.vibrate(20000);
      //cordova plugin

  };
  };

  //reset timer
  $scope.reset = function(){
    $scope.hours = 0;
    $scope.minutes = 0;
    $scope.seconds = 0;
    //end timer
    $interval.cancel(promise);
  };



}]);
