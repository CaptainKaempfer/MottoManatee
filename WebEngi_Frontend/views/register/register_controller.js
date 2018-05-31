RegisterCtrl.$inject = ['$rootScope', '$scope', '$cookies', 'DataInterchangeService', 'ModalService'];
function RegisterCtrl ($rootScope, $scope, $cookies, DataInterchangeService, ModalService)
{
	////////////////////////////////// Variable Declaration /////////////////////////////

	$scope.message = 'Keine Registrierungsdaten gefunden';

	// Register Declarations
	$scope.user = {
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		address: '',
		city: '',
		country: '',
		postalCode: '',
		password: ''
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
	$scope.openRegister = function (jsonObj) {

		// Additional simple form validation
		if($scope.user.firstName == '')
		{
			alert("Bitte geben Sie einen gültigen Vornamen ein!"); 
			return false;
		}
			
		if($scope.user.lastName == '')
		{
			alert("Bitte geben Sie einen gültigen Nachnamen ein!"); return false;
		}

		if($scope.user.username == '')
		{
			alert("Bitte geben Sie einen gültigen Benutzernamen ein!");
			return false;
		}	

		if($scope.user.email == '')
		{
			alert("Bitte geben Sie eine gültige E-Mail Adresse ein!"); 
			return false;
		}
			
		if($scope.user.address == '')
		{
			alert("Bitte geben Sie eine gültige Adresse ein!"); 
			return false;
		}
			
		if($scope.user.city == '')
		{
			alert("Bitte geben Sie eine gültige Stadt ein!"); 
			return false;
		}
			
		if($scope.user.password == '')
		{
			alert("Bitte geben Sie ein gültiges Passwort ein!"); 
			return false;
		}

				// Sign in with email and pass.
		// [START createwithemail]
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(function(firebaseUser){
			//API call to register a new user
			var jsonString = JSON.stringify(createJSONUser());
			var req = new XMLHttpRequest();
			req.open("POST", "https://mottomanatee.firebaseio.com/api/users.json", true);
			req.send(jsonString);
		})
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// [START_EXCLUDE]
			if (errorCode == 'auth/weak-password') {
				alert('The password is too weak.');
			} 
			else {     
				alert(errorMessage);
			}
			console.log(error);
			// [END_EXCLUDE]
		});
		// [END createwithemail]

		// Save data in firebase database


		// Open user respond dialog
		ModalService.openRegisterModal(function(){
			$rootScope.isSessionCookie = true;
		});

	};
	
	function createJSONUser(){
		var user = {
			"land": $scope.user.country,
			"name": $scope.user.lastName,
			"vorname": $scope.user.firstName,
			"stadt": $scope.user.city,
			"email": $scope.user.email
		};
		
		return user;
	}
  

}