angular
  .module('starter')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.hours = '00';
    $scope.minutes = '00';
    $scope.seconds = '00';
    // Wait for device API libraries to load
    //
    $scope.vibrateNotify = function () {
      testBtn.addEventListener("click", function () {
        navigator.notification.vibrate(20000);
        //cordova plugin
      });
    }
}]);
