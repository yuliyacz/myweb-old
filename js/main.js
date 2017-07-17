/**
 * Created by yuliya on 11.11.16.
 */

angular.module('myweb', ['ngRoute', 'ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'home.html'
			})
			/*.state('about', {
				url: '/about',
				templateUrl: 'about.html'
			})*/;
	})
	.run(function ($state) {
		$state.go('home');
	})
	.controller('mainCtrl', ['$scope', '$state', '$location', function ($scope, $state, $location) {
		$scope.$on('$viewContentLoaded', function () {
		
		});
		
		$scope.myhref = function (link) {
			//location.href = link;
			window.open(link, '_blank');
		};
		
		//var context = canvas.getContext('2d');
		$scope.skills = [{
			name: 'Backend',
			skills: ['Node.js', 'C#']
		}, {
			name: 'Frontend',
			skills: ['React', 'Redux', 'AngularJS', 'jQuery', 'PixiJS', 'HTML5', 'CSS3', 'Bootstrap']
		}, {
			name: 'Operační systémy',
			skills: ['Linux', 'MS Windows']
		}, {
			name: 'Databáze',
			skills: ['PostgreSQL', 'MongoDB', 'MSSQL']
		}, {
			name: 'DevOps',
			skills: ['GIT', 'Heroku']
		}];
		
		$scope.language = [{
			name: 'Čeština',
			text: 'plynně slovem i písmem'
		}, {
			name: 'Ruština',
			text: 'rodilý mluvčí'
		}, {
			name: 'Angličtina',
			text: 'středně pokročilý, čtení technické dokumentace'
		}];
		
		$scope.work = [{
			company: 'Fox Media Czech Republic',
			position: 'JavaScript developer',
			description: 'Node.js, React, Redux',
			date: '12/2016-současnost'
		}];
	}]);


