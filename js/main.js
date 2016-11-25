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
                name: 'Ruština',
                text: 'rodilý mluvčí'
            }, {
                name: 'Čeština',
                text: 'výborně slovem i písmem'
            }, {
                name: 'Angličtina',
                text: 'pasivně'
        }];
        $scope.test = 'Test angular';
        $scope.skills2 = ['HTML', 'CSS', 'Javascript', 'Node.js', 'Bootstrap', 'základy jQuery', 'C#', 'základy PixiJS', 'základy GIT', 'MS Windows', 'Linux', 'MSSQL', 'MongoDB'];
    }]);


