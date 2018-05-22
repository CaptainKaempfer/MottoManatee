DetailCtrl.$inject = ['$rootScope', '$scope', '$cookies', 'DataInterchangeService', 'ModalService'];
function DetailCtrl ($rootScope, $scope, $cookies, DataInterchangeService, ModalService)
{
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
}