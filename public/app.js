angular.module('fakeNews', [])
.controller('MainCtrl', [
  '$scope', '$http',
  function($scope, $http){
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