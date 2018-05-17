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
		/* Login navigation point*/
		templateUrl: 'views/login/login.html',
		controller: 'MainCtrl'
	})
	.when('/register',
	{
		/* Register navigation point */
		templateUrl: 'views/register/register.html',
		controller: 'MainCtrl'
	})
	.when('/law',
	{
		/* Law navigation point */
		templateUrl: 'views/law/dataProtection.html',
		controller: 'MainCtrl'
	})
	.when('/show',
	{
		/* Show mottos navigation point */
		templateUrl: 'views/showMotto/showMotto.html',
		controller: 'ShowCtrl'
	})
	.when('/add',
	{
		/* Add motto navigation point */
		templateUrl: 'views/addMotto/addMotto.html',
		controller: 'MainCtrl'
	})
	.when('/delete',
	{
		/* Delete motto navigation point */
		templateUrl: 'views/deleteMotto/deleteMotto.html',
		controller: 'MainCtrl'
	})
	.otherwise({
		redirectTo: '/startpage'
	});
}])
/* ---------- Controller ---------- */
.controller('MainCtrl', MainCtrl)
.controller('ShowCtrl', ShowCtrl)
.controller('RegisterCtrl', RegisterCtrl)
/* ---------- Service ---------- */
.service('ModalService', ModalService)
.service('DataInterchangeService',DataInterchangeService)

var restServerURL = null;


