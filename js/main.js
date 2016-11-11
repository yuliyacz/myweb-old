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
    .controller('mainCtrl', ['$scope', function ($scope) {
        $scope.test = 'Test angular';
}]);