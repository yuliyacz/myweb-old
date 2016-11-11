/**
 * Created by yuliya on 11.11.16.
 */
angular.module('myweb', ['ngRoute', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about.html'
            });
    })
    .run(function ($state) {
        $state.go('home');
    })
    .controller('mainCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.test = 'Test angular';
        $scope.goToAbout = function () {
            $state.go('about');
        };
}]);