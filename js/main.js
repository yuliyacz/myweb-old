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
    .controller('mainCtrl', ['$scope', '$state', '$location', function ($scope, $state, $location) {
        $scope.$on('$viewContentLoaded', function() {

        });
        $scope.myhref = function (link) {
            //location.href = link;
            window.open(link, '_blank');
        };
        //var context = canvas.getContext('2d');
        $scope.skills = [ {
                name: 'Programování',
                text: 'HTML, CSS, Javascript, AngularJS, NodeJS, Bootstrap, základy jQuery, C#, PixiJS, základy GIT'
            }, {
                name: 'Operační systémy',
                text: 'Windows, Linux'
            }, {
                name: 'Databáze',
                text: 'MSSQL, MongoDB'
            }, {
                name: 'Ostatní',
                text: 'Adobe Photoshop CS, UML'
            }
        ];
        $scope.language = [ {
                name: 'Čeština',
                text: 'pokročilý'
            }, {
                name: 'Ruština',
                text: 'rodilý mluvčí'
            }, {
                name: 'Angličtina',
                text: 'středně pokročilý'
        }];
        $scope.programming = $scope.skills[0].text.split(', ');
        $scope.os = $scope.skills[1].text.split(', ');
        $scope.db = $scope.skills[2].text.split(', ');
    }]);


