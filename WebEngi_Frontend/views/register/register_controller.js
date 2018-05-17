RegisterCtrl.$inject = ['$rootScope', '$scope', '$cookies', 'DataInterchangeService', 'ModalService'];
function RegisterCtrl ($rootScope, $scope, $cookies, DataInterchangeService, ModalService)
{
	////////////////////////////////// Variable Declaration /////////////////////////////

	$scope.message = 'Keine Registrierungsdaten gefunden';

	/////////////////////////////////// Modals //////////////////////////////////////////
	/**
	 * Opens a standard modal 
	 */
	$scope.openLogin = function () {
		ModalService.openRegisterModal(function(){
			$rootScope.isSessionCookie = true;
		});
	};
  

}