angular.module('RESTClient', [
	'ngRoute',
	'ui.bootstrap',
	'ngMaterial',
	'ui.date',
	'ngAnimate',
	'ngCookies'
])
.config(['$routeProvider', function($routeProvider) 
{
	$routeProvider.
	when('/startpage', 
	{
		/* Main HTML and Controller */
		templateUrl: 'views/startpage/startpage.html',
		controller: 'MainCtrl'
	})
	.when('/login',
	{
		/* Data Table for Result */
		templateUrl: 'views/login/login.html',
		controller: 'MainCtrl'
	})
	.when('/register',
	{
		/* Data Table for Result */
		templateUrl: 'views/register/register.html',
		controller: 'MainCtrl'
	})
	.when('/law',
	{
		/* Data Table for Result */
		templateUrl: 'views/law/dataProtection.html',
		controller: 'MainCtrl'
	})
	.when('/show',
	{
		/* Data Table for Result */
		templateUrl: 'views/showMotto/showMotto.html',
		controller: 'MainCtrl'
	})
	.when('/add',
	{
		/* Data Table for Result */
		templateUrl: 'views/addMotto/addMotto.html',
		controller: 'MainCtrl'
	})
	.when('/delete',
	{
		/* Data Table for Result */
		templateUrl: 'views/deleteMotto/deleteMotto.html',
		controller: 'MainCtrl'
	})
	.otherwise({
		redirectTo: '/startpage'
	});
}])
/* ---------- Controller ---------- */
.controller('MainCtrl', MainCtrl)

/* ---------- Service ---------- */
.service('ModalService', ModalService)
.service('DataInterchangeService',DataInterchangeService)

var restServerURL = null;


