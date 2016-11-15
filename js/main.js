/**
 * Created by yuliya on 11.11.16.
 */

angular.module('myweb', ['ngRoute', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'twoSides': {
                        templateUrl: 'home.html'
                    },
                    'oneSide': {
                        templateUrl: 'homeOne.html'
                    }
                }
            })
            .state('about', {
                url: '/about',
                views: {
                    'twoSides': {
                        templateUrl: 'about.html'
                    },
                    'oneSide': {
                        templateUrl: 'about.html'
                    }
                }
            });
    })
    .run(function ($state) {
        $state.go('home');
    })
    .controller('mainCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.$on('$viewContentLoaded', function() {
            //var canvas = document.getElementById('canvas')[0].getContext('2d');//angular.element(document.querySelector('#canvas'));
            /*if(canvas!==null) {
                var context = canvas[0].getContext('2d');
                console.log(canvas);
            }
            else {
                console.log('canvas is  null');
            }*/
        });
        $scope.myhref = function (link) {
            //location.href = link;
            window.open(link, '_blank');
        };
        //var context = canvas.getContext('2d');

        $scope.test = 'Test angular';

}]);

