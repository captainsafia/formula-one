var app = angular.module('formulaOne', []);

app.controller('searchController', [], function($scope, $http) {
  $scope.submitSearch = function() {
    $http.post('/search', $scope.query)
    .success(function(data) {
      console.log('search submitted')
    })
    .error(function(data) {
      console.log('search submit error: ');
      console.log(data);
    })
  }
}
