angular.module('fakeNews', [])
.controller('MainCtrl', [
  '$scope', '$http', '$interval',
  function($scope, $http, $interval){
    $scope.userimage = "";
    $scope.thing = $interval(function() {
      if (firebase.auth().currentUser) {
        $scope.userimage = firebase.auth().currentUser.photoURL;
        var array = firebase.auth().currentUser.email.split("@");
        $scope.userName = array[0];
        $scope.stopThing();
        console.log("fdsa");
        $scope.accountRoute = "/user"
      } else {
        $scope.userimage = "https://www.drupal.org/files/issues/default-avatar.png";
        $scope.accountRoute = "/account"
      }
    }, 100);

    $scope.stopThing = function() {
      $interval.cancel($scope.thing);
    }
    
    $scope.posts = [];
    $scope.getAll = function() {
        return $http.get('/headlines').success(function(data){
            console.log(data); 
            angular.copy(data, $scope.posts);
            });
        };
      $scope.getAll();
  }
]);
