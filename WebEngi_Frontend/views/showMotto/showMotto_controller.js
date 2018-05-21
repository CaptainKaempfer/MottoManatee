ShowCtrl.$inject = ['$rootScope', '$scope', '$cookies', 'DataInterchangeService', 'ModalService'];
function ShowCtrl ($rootScope, $scope, $cookies, DataInterchangeService, ModalService)
{
	////////////////////////////////// Variable Declaration /////////////////////////////

    // Search bar declarations
	$scope.searchMotto = {
		titel: '',
		author: '',
		content: ''
    };
    
    // Motto content
    $scope.showMotto = {
        contentMotto0: '', autorMotto0: '',
        contentMotto1: '', autorMotto1: '',
        contentMotto2: '', autorMotto2: '',
        contentMotto3: '', autorMotto3: '',
        contentMotto4: '', autorMotto4: '',
        contentMotto5: '', autorMotto5: '',
        contentMotto6: '', autorMotto6: '',
        contentMotto7: '', autorMotto7: '',
        contentMotto8: '', autorMotto8: '',
        contentMotto9: '', autorMotto9: '',
    };

    $scope.showAction = {
        likeText0: 'Gefällt mir', shareText0: 'Teilen', likeIcon0: 'fa fa-heart',
        likeText1: 'Gefällt mir', shareText1: 'Teilen', likeIcon1: 'fa fa-heart',
        likeText2: 'Gefällt mir', shareText2: 'Teilen', likeIcon2: 'fa fa-heart',
        likeText3: 'Gefällt mir', shareText3: 'Teilen', likeIcon3: 'fa fa-heart',
        likeText4: 'Gefällt mir', shareText4: 'Teilen', likeIcon4: 'fa fa-heart',
        likeText5: 'Gefällt mir', shareText5: 'Teilen', likeIcon5: 'fa fa-heart',
        likeText6: 'Gefällt mir', shareText6: 'Teilen', likeIcon6: 'fa fa-heart',
        likeText7: 'Gefällt mir', shareText7: 'Teilen', likeIcon7: 'fa fa-heart',
        likeText8: 'Gefällt mir', shareText8: 'Teilen', likeIcon8: 'fa fa-heart',
        likeText9: 'Gefällt mir', shareText9: 'Teilen', likeIcon9: 'fa fa-heart',
    };

	$scope.categories = ('Neuste-zuerst Älteste-zuerst ' +'Diese-Woche Diesen-Monat Dieses-Jahr' + '').split(' ').map(function(category) {
		return {abbrev: category};
	});

    ////////////////////////////////// Methoden /////////////////////////////////////////
    $scope.likeFunction = function (index) {

        switch(index) {
            case 0:
                $scope.showAction.likeText0 = 'Gefällt dir';
                $scope.showAction.likeIcon0 = 'fa fa-heart-o';
                break;
            case 1: 
                $scope.showAction.likeText1 = 'Gefällt dir';
                $scope.showAction.likeIcon1 = 'fa fa-heart-o';
                break;
            case 2:
                $scope.showAction.likeText2 = 'Gefällt dir';
                $scope.showAction.likeIcon2 = 'fa fa-heart-o';
                break;
            case 3:
                $scope.showAction.likeText3 = 'Gefällt dir';
                $scope.showAction.likeIcon3 = 'fa fa-heart-o';
                break;
            case 4:
                $scope.showAction.likeText4 = 'Gefällt dir';
                $scope.showAction.likeIcon4 = 'fa fa-heart-o';
                break;
            case 5:
                $scope.showAction.likeText5 = 'Gefällt dir';
                $scope.showAction.likeIcon5 = 'fa fa-heart-o';
                break;
            case 6:
                $scope.showAction.likeText6 = 'Gefällt dir';
                $scope.showAction.likeIcon6 = 'fa fa-heart-o';
                break;
            case 7:
                $scope.showAction.likeText7 = 'Gefällt dir';
                $scope.showAction.likeIcon7 = 'fa fa-heart-o';
                break;
            case 8:
                $scope.showAction.likeText8 = 'Gefällt dir';
                $scope.showAction.likeIcon8 = 'fa fa-heart-o';
                break;
            case 9:
                $scope.showAction.likeText9 = 'Gefällt dir';
                $scope.showAction.likeIcon9 = 'fa fa-heart-o';
                break;
        }
    };

    $scope.shareFunction = function (index) {
        
        switch(index) {
            case 0:
                $scope.showAction.shareText0 = 'Geteilt'
                break;
            case 1: 
                $scope.showAction.shareText1 = 'Geteilt'
                break;
            case 2:
                $scope.showAction.shareText2 = 'Geteilt'
                break;
            case 3:
                $scope.showAction.shareText3 = 'Geteilt'
                break;
            case 4:
                $scope.showAction.shareText4 = 'Geteilt'
                break;
            case 5:
                $scope.showAction.shareText5 = 'Geteilt'
                break;
            case 6:
                $scope.showAction.shareText6 = 'Geteilt'
                break;
            case 7:
                $scope.showAction.shareText7 = 'Geteilt'
                break;
            case 8:
                $scope.showAction.shareText8 = 'Geteilt'
                break;
            case 9:
                $scope.showAction.shareText9 = 'Geteilt'
                break;
        }
    };

    $scope.moreFunction = function () {
		
		ModalService.openLoginModel(function(){
			$rootScope.isSessionCookie = true;
		});
	};

    $scope.getMottoContent = function() {
        $scope.showMotto = {
            contentMotto0: 'Zünde lieber eine Kerze an, statt über die Dunkelheit zu meckern', autorMotto0: 'Unbekannt',
            contentMotto1: 'Der Teufel ist ein Einhörnchen', autorMotto1: 'Unbekannt',
            contentMotto2: 'Jeder ist seines Glückes Schmied', autorMotto2: 'Unbekannt',
            contentMotto3: 'Habe Mut, dich deines eingenen Verstandes zu bedienen', autorMotto3: 'Unbekannt',
            contentMotto4: 'Wer nicht hofft, der wird nie dem Unverhofftem begegnen', autorMotto4: 'Unbekannt',
            contentMotto5: 'Alles im Leben hat zwei Seiten. Suche die Beste!', autorMotto5: 'Unbekannt',
            contentMotto6: 'Angriff ist die beste Verteidigung', autorMotto6: 'Unbekannt',
            contentMotto7: 'Beim Duschen sollte der Duschvorhang immer innen sein!', autorMotto7: 'Unbekannt',
            contentMotto8: 'Ende Gut alles Gut', autorMotto8: 'Unbekannt',
            contentMotto9: 'Alles hat ein Ende nur die Wurst hat zwei', autorMotto9: 'Unbekannt',
        };
    };

}