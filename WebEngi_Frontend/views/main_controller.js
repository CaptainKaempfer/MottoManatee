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
		country: '',
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
		$scope.Motto = {
			"text": user.motto,
			"title": user.title,
			"timestamp": {".sv": "timestamp"},
            "user": user.username,
            "land": user.country
		};
		
        var jsonString = JSON.stringify($scope.Motto);
	    var req = new XMLHttpRequest();
        req.open("POST", "https://mottomanatee.firebaseio.com/api/mottos.json", true);
        req.send(jsonString);
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
	$scope.openLogin = function () {
		var email = $scope.user.email;
		var password = $scope.user.password;
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(function(firebaseUser){
			//login successful
			var req = new XMLHttpRequest();
			req.open("GET", 'https://mottomanatee.firebaseio.com/api/users/.json?orderBy="email"&equalTo=' + '"' + $scope.user.email + '"', true);
			
			req.onload = function () {
				if (req.readyState == 4) {
					var responseObj = JSON.parse(req.responseText); //JSON object erstellen und zurückgeben
					callback(responseObj);
				}
			}
			
			req.send();
		})
		.catch(function(error) {
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
	};
	
	/**
	 * Queries user specific mottos from the API
	 */
	$scope.getUserMottos = function () {
			getMottoData(email, function f(result){
			$scope.userMottos = result; // still need to be parsed as needed
		});		
		
	};
	
	function getMottoData(email, callback){
			var req = new XMLHttpRequest();
			req.open("GET", 'https://mottomanatee.firebaseio.com/api/mottos.json?orderBy="user"&equalTo="' + email + '"', true);
			req.onload = function () {
				if (req.readyState == 4 && req.status == "200") {
					var responseObj = JSON.parse(req.responseText); //JSON object erstellen un zurückgeben
					callback(responseObj);
				}
			}
		
		req.send();
	}

	/** 
	 * Currently not available warning
	 */
	$scope.currNotAvailable = function () {
		alert("Diese Funktion ist zurzeit nicht verfügbar.\nWir arbeiten mit höchstleistung and derUmsetzung\ndieser Funktion.Bitte haben Sie noch etwas Gedult!");
};
}
