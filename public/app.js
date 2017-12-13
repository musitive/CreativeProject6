<script src="https://www.gstatic.com/firebasejs/4.8.0/firebase.js"></script>
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDcuN9VyRVZ36knkAHM8JwfDilDggAmYRo",
  authDomain: "creativity-at-its-finest.firebaseapp.com",
  databaseURL: "https://creativity-at-its-finest.firebaseio.com",
  projectId: "creativity-at-its-finest",
  storageBucket: "",
  messagingSenderId: "167818529111"
};
firebase.initializeApp(config);

angular.module('fakeNews', [])
.controller('MainCtrl', [
  '$scope', '$http',
  function($scope, $http){
    if (firebase.auth().currentUser) {
      $scope.userimage = firebase.auth().currentUser.photoURL;
    } else {
      $scope.userimage = "";
    }
    
    $scope.posts = [];
    $scope.addUpVote = function(post) {
          $scope.upvote(post);
      }
    $scope.addDownVote = function(post) {
          $scope.downvote(post); 
      }
    $scope.getAll = function() {
        return $http.get('/headlines').success(function(data){
            console.log(data); 
            angular.copy(data, $scope.posts);
            });
        };
      $scope.getAll();
    $scope.upvote = function(post) {
      return $http.put('/headlines/' + post._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          post.upvotes += 1;
        });
        $scope.getAll();
    };
    $scope.downvote = function(post) {
      return $http.put('/headlines/' + post._id + '/downvote')
        .success(function(data){
          console.log("downvote worked");
          post.upvotes -= 1;
          $scope.getAll();
        });
    };      
  }
]);