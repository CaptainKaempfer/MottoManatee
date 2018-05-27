MainCtrl.$inject = ['$rootScope', '$scope', '$cookies', '$location','DataInterchangeService', 'ModalService'];
function MainCtrl ($rootScope, $scope, $cookies, $location, DataInterchangeService, ModalService)
{
	////////////////////////////////// Variable Declaration /////////////////////////////

	// User data object
	$scope.user = {
		firstName: '',
		lastName: '',
		username: 'a',
		email: '',
		address: '',
		city: '',
		country: '',
		postalCode: '',
		password: ''
	};

	// User specific mottos
	$scope.userMottos;

	// User ranking
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

	$scope.openDelete = function (mottoID) {
		ModalService.openDeleteModal(function(){
			$rootScope.isSessionCookie = true;
		});
		
		var req = new XMLHttpRequest();
		req.open("DELETE", "https://mottomanatee.firebaseio.com/api/mottos/" + mottoID + ".json", true);
		req.send();
	};

	///////////////////////////////// Functions //////////////////////////////////////////

	// Save data currently in the storage
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

	/**
	 * Simple check if user is logged in
	 */
	$scope.checkLogIn = function () {
		if($scope.user.username == '')
		{
			alert("Sie sind nicht eingeloggt. Bitte loggen Sie sich\nein, um dieses Feature nutzen zu können!");
			console.log("User isn´t logged in!")
			// Return to startpage if not logged in
			$location.path("index_dev.html#/startpage");
		} else {
			console.log("User is logged in!");
		}
	};
	

	$scope.openLogin = function () {
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
            //alert(errorMessage);
			alert(email);
          }
          //console.log(error);
          //document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
		});
		
		function callback(result){
			//result is the JSON object with all user info
			var root = result[Object.keys(result)[0]]; //first key of the Obj is the unique ID which we don't know at this point
			$scope.user.firstName = root.vorname;
			$scope.user.lastName = root.name;
			$scope.user.email = root.email;
			$scope.user.city = root.stadt;
			$scope.user.country = root.land;
		}
		
		ModalService.openLoginModel(function(){
			$rootScope.isSessionCookie = true;
		});
	}

	/**
	 * Register a new user
	 */
	$scope.registration = function() {
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

	/**
	 * Queries user specific mottos from the data base
	 */
	$scope.getUserMottos = function () {
		// Test data (can be replaced with actual code)
		$scope.userMottos = [ { titel: "Mein erstes Motto", motto: "Dies ist ein test motto.", date: "September 2017"}, { titel: "Mein erstes Motto", motto: "Dies ist ein test motto.", date: "August 2017"} ];
	};

	/** 
	 * Currently not available warning
	 */
	$scope.currNotAvailable = function () {
		alert("Diese Funktion ist zurzeit nicht verfügbar.\nWir arbeiten mit höchstleistung and derUmsetzung\ndieser Funktion.Bitte haben Sie noch etwas Gedult!");
	};

}