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
		postalCode: '',
		email: '',
		password:''
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
	$scope.openLogin = function () {
		ModalService.openLoginModel(function(){
			$rootScope.isSessionCookie = true;
		});
	};
	
	///////////////////////////////// sign in an existing user ////////////////////////
	
	function signIn(){
		var email = $scope.user.email;
		var password = $scope.user.password;
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          //console.log(error);
          //document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
	}
	
	////////////////////////////////// register new user  /////////////////////////////
	function handleSignUp() {
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
    }
  

}