var app = angular.module('talent-portal', []);

app.controller('searchController', ['$scope', '$http', function($scope, $http) {
  $scope.query = {'name': '', 'major': '', 'year': '', 'visaRequired': ''};

  $scope.submitSearch = function() {
    console.log('searching...');
    console.log($scope.query);
    $http.post('/search', $scope.query)
    .success(function(data) {
      console.log('search submitted')
    })
    .error(function(data) {
      console.log('search submit error: ');
      console.log(data);
    })
  }
}]);
