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
		state: '',
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
		var email = $scope.user.email;
      var password = $scope.user.password;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {     
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]

		// Save data in firebase database

		//API call to register a new user
		var jsonString = JSON.stringify(jsonObj);
		var req = new XMLHttpRequest();
		req.open("PATCH", "https://mottomanatee.firebaseio.com/api/users.json", true);
		req.send(jsonString);

		// Open user respond dialog
		ModalService.openRegisterModal(function(){
			$rootScope.isSessionCookie = true;
		});

		alert("Hallo");
	};
  

}