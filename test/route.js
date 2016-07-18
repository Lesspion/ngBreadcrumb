ngBreadcrumb.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

 .controller('BookController', function($scope, $routeParams, $location) {
     $scope.name = "BookController";
     $scope.params = $routeParams;
 })

 .controller('ChapterController', function($scope, $routeParams, $location) {
     $scope.name = "ChapterController";
     $scope.params = $routeParams;
 })

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
      template: '<p>You\'re / !</p><a  href="#/boulou">goto</a>',
      controller: 'BookController',
      data: {
          current: {
              name: "Home"
          }
      },
  })
  .when('/boulou', {
    template: '<p>You\'re a boulou !</p><a href="#/boulou/bala">goto bala</a>',
    controller: 'ChapterController',
    data: {
      current: {
        name: "Boulou",
      },
      previous: {
        route: "/"
      }
    }
  })
  .when('/boulou/bala', {
    template: '<p>You\'re a bala !</p><a href="#/">goto /</a>',
    controller: 'ChapterController',
    data: {
      current: {
        name: "Bala",
      },
      previous: {
        route: "/boulou"
      }
    }
  })

});
