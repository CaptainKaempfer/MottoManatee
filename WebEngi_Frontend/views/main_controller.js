MainCtrl.$inject = ['$rootScope', '$scope', '$cookies', 'DataInterchangeService', 'ModalService'];
function MainCtrl ($rootScope, $scope, $cookies, DataInterchangeService, ModalService)
{
	////////////////////////////////// Variable Declaration /////////////////////////////

	// Ranking
	$scope.ranking = {
		first: 'Maik Scherr',
		second: 'Josch Venus',
		third: 'Andrej Bechstedt',
		fourth: 'Julian Neumann',
		fifth: 'Stefan Neuendank',
		sixth: 'Niklas Heine',
		seventh: 'Jonas Oswald'
	};

	// Register Declarations
	$scope.user = {
		firstName: '',
		lastName: '',
		username: '',
		address: '',
		city: '',
		state: '',
		postalCode: ''
	};
  
	$scope.states = ('Baden-Württember Bayern Berlin Brandenburg Bremen Hamburg Hessen Mecklenburg-Vorpommern Niedersachsen ' +
	'Nordrhein-Westfalen Rheinland-Pfalz Saarland Sachsen Sachsen-Anhalt Schleswig-Holstein ' +
	'Thüringen').split(' ').map(function(state) {
		return {abbrev: state};
	});

	/////////////////////////////////// Modals //////////////////////////////////////////
	/**
	 * Opens a standard modal 
	 */
	$scope.postMotto = function(user) {
		var d = new Date();
		$scope.Motto = {
			mottotext: user.motto,
			mottotitle: user.title,
			mottodate: d,
			mottouser: user.username
		};
		alert("Hier wird das Motto gepostet!");
		/* Motto soll hier gepostet werden */
	};

	$scope.openLogin = function () {
		
		ModalService.openLoginModel(function(){
			$rootScope.isSessionCookie = true;
		});
	};


}