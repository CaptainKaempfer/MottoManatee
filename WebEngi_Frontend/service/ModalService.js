/**
 * This ui service handles all modals in this app.
 * Don't put any business logic into the methods.
 * The methods should only display modals.
 *
 * @class ModalService
 */
ModalService.$inject = ['$uibModal'];
function ModalService($uibModal)
{
	return {
		/**
		 * Displays a given error message in modal
		 * @param {string} message
		 */
		openLoginModel: function (message) {
			$uibModal.open({
				animation: true,
				templateUrl: 'views/dialog_templates/loginDialog.tmp.html',
				controller: ['$scope', '$modalInstance', '$location', function ($scope, $modalInstance, $location) {

					$scope.message = message;

					/**
					 * Dismisses the dialog
					 */
					$scope.close = function () {
						$modalInstance.dismiss('Close');
						$location.path("index_dev.html#/startpage");
					};

				}],
				size: null
			});
		},
		/**
		 * Displays a modal for successful registration
		 * @param {string} message
		 */
		openRegisterModal: function (message) {
			$uibModal.open({
				animation: true,
				templateUrl: 'views/dialog_templates/successDialog.tmp.html',
				controller: ['$scope', '$modalInstance', '$location', function ($scope, $modalInstance, $location) {

					$scope.message = message;

					/**
					 * Dismisses the dialog
					 */
					$scope.close = function () {
						$modalInstance.dismiss('Close');
						$location.path("index_dev.html#/startpage");
						
					};

				
				}],
				size: null
			});
		},
		/**
		 * Displays a modal for deleting a motto
		 * @param {string} message
		 */
		openDeleteModal: function (message) {
			$uibModal.open({
				animation: true,
				templateUrl: 'views/dialog_templates/deleteDialog.tmp.html',
				controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {

					$scope.message = message;
					$scope.currentLikes = "42";

					/**
					 * Dismisses the dialog
					 */
					$scope.close = function () {
						$modalInstance.dismiss('Close');
					};

					$scope.showAction = {
						likeText: 'Gefällt mir', shareText: 'Teilen', likeIcon: 'fa fa-heart',
					};
				
					$scope.likeFunction = function () {
						$scope.showAction.likeText = 'Gefällt dir';
						$scope.showAction.likeIcon = 'fa fa-heart-o';
					};
				
					$scope.shareFunction = function () {
						$scope.showAction.shareText = 'Geteilt'
					};
				
				}],
				size: null
			});
		},
		/**
		 * Displays a modal for editing the profile
		 * @param {string} message
		 */
		editProfileModal: function (message) {
			$uibModal.open({
				animation: true,
				templateUrl: 'views/dialog_templates/editProfileDialog.tmp.html',
				controller: ['$scope', '$modalInstance', 'DataInterchangeService', function ($scope, $modalInstance, DataInterchangeService) {

					$scope.message = message;

					$scope.editType = DataInterchangeService.getEditType();

					/**
					 * Dismisses the dialog
					 */
					$scope.close = function () {
						$modalInstance.dismiss('Close');
					};

				
				}],
				size: null
			});
		},


	// End	
	}
}



