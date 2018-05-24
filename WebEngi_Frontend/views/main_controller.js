MainCtrl.$inject = ['$rootScope', '$scope', '$cookies', '$location','DataInterchangeService', 'ModalService'];
function MainCtrl ($rootScope, $scope, $cookies, $location, DataInterchangeService, ModalService)
{
	////////////////////////////////// Variable Declaration /////////////////////////////

	// Notifying Declarations
	$scope.user = {
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		address: '',
		city: '',
		state: '',
		postalCode: '',
		password: ''
	};

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


	$scope.openDelete = function (mottoID) {
		ModalService.openDeleteModal(function(){
			$rootScope.isSessionCookie = true;
		});
		
		var req = new XMLHttpRequest();
		req.open("DELETE", "https://mottomanatee.firebaseio.com/api/mottos/" + mottoID + ".json", true);
		req.send();
	};

	//

	$scope.editName = function () {
		DataInterchangeService.setEditType('Name');
		ModalService.editProfileModal(function(){
			$rootScope.isSessionCookie = true;
		});
	};
	$scope.editSurname = function () {
		DataInterchangeService.setEditType('Vorname');
		ModalService.editProfileModal(function(){
			$rootScope.isSessionCookie = true;
		});
	};
	$scope.editUsername = function () {
		DataInterchangeService.setEditType('Benutzername');
		ModalService.editProfileModal(function(){
			$rootScope.isSessionCookie = true;
		});
	};
	$scope.editAddress = function () {
		DataInterchangeService.setEditType('Adresse');
		ModalService.editProfileModal(function(){
			$rootScope.isSessionCookie = true;
		});
	};
	$scope.editDetailedAddress = function () {
		DataInterchangeService.setEditType('Detailierte Adresse');
		ModalService.editProfileModal(function(){
			$rootScope.isSessionCookie = true;
		});
	};
	$scope.editEmail = function () {
		DataInterchangeService.setEditType('E-Mail Adresse');
		ModalService.editProfileModal(function(){
			$rootScope.isSessionCookie = true;
		});
	};

	///////////////////////////////// Functions //////////////////////////////////////////

	$scope.checkLogIn = function () {
		if($scope.user.username == '')
		{
			console.log("User isn´t logged in! Please log in first to use this feature.");
			$location.path("index_dev.html#/startpage");
		} else {
			console.log("User is logged in!");
		}
	};
	
	//////////////////////////// Login
	$scope.login = function () {
		var email = $scope.user.email;
		var password = $scope.user.password;
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// [START_EXCLUDE]
			if (errorCode === 'auth/wrong-password') {
				alert('Wrong password.');
			} 
			else {
				//alert(errorMessage);
				alert(email);
			}
          //console.log(error);
          //document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
		});
	}
}