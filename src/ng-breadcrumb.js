var ngBreadcrumb = angular.module('ngBreadcrumb', ['ngRoute'])
.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
        // console.log('evt : ', event);
        // console.log('next', next);
        // console.log('next.data : ', next.data);
        // console.log('current', current);
        // console.log('current.$route', current.$route);
        console.log(current.$$route.data);
        // console.log('previous : ', previous);
        var base = current.$$route.data;
        var bread = current.$$route.data.current.name;
        if (base.previous) {
            console.log('pre : ', previous);
            bread += "/" + previous.$$route.data.current.name
        }
        console.log('breadcrumb : ', bread);
    });
}]);
