MainCtrl.$inject = ['$rootScope', '$scope', '$cookies', 'DataInterchangeService', 'ModalService'];
function MainCtrl ($rootScope, $scope, $cookies, DataInterchangeService, ModalService)
{

	/////////////////////////////////// Login and Logout //////////////////////////////////////////
	/**
	 * Opens the login modal 
	 */
	$scope.openLogin = function () {
		ModalService.openLoginModel(function(){
			$rootScope.isSessionCookie = true;
		});
	};
  

}