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
        contentMotto: ['','','','','','','','',''], 
		autorMotto: ['','','','','','','','','']
    };

    // Button interaction
    $scope.showAction = {
        likeText: ['Gefällt mir','Gefällt mir','Gefällt mir','Gefällt mir','Gefällt mir','Gefällt mir','Gefällt mir','Gefällt mir','Gefällt mir','Gefällt mir'],
        shareText: ['Teilen','Teilen','Teilen','Teilen','Teilen','Teilen','Teilen','Teilen','Teilen','Teilen'],
        likeIcon: ['fa fa-heart','fa fa-heart','fa fa-heart','fa fa-heart','fa fa-heart','fa fa-heart','fa fa-heart','fa fa-heart','fa fa-heart','fa fa-heart']
    };

    // Sort possibilities
	$scope.categories = ('Neuste-zuerst Älteste-zuerst ' +'Diese-Woche Diesen-Monat Dieses-Jahr' + '').split(' ').map(function(category) {
		return {abbrev: category};
	});

    ////////////////////////////////// Methoden /////////////////////////////////////////
    /**
     * Like a specific motto
     * @param {index} index 
     */
    $scope.likeFunction = function (index) {
        switch(index) {
            case 0:
                $scope.showAction.likeText[0] = 'Gefällt dir';
                $scope.showAction.likeIcon[0] = 'fa fa-heart-o';
                break;
            case 1: 
                $scope.showAction.likeText[1] = 'Gefällt dir';
                $scope.showAction.likeIcon[1] = 'fa fa-heart-o';
                break;
            case 2:
                $scope.showAction.likeText[2] = 'Gefällt dir';
                $scope.showAction.likeIcon[2] = 'fa fa-heart-o';
                break;
            case 3:
                $scope.showAction.likeText[3] = 'Gefällt dir';
                $scope.showAction.likeIcon[3] = 'fa fa-heart-o';
                break;
            case 4:
                $scope.showAction.likeText[4] = 'Gefällt dir';
                $scope.showAction.likeIcon[4] = 'fa fa-heart-o';
                break;
            case 5:
                $scope.showAction.likeText[5] = 'Gefällt dir';
                $scope.showAction.likeIcon[5] = 'fa fa-heart-o';
                break;
            case 6:
                $scope.showAction.likeText[6] = 'Gefällt dir';
                $scope.showAction.likeIcon[6] = 'fa fa-heart-o';
                break;
            case 7:
                $scope.showAction.likeText[7] = 'Gefällt dir';
                $scope.showAction.likeIcon[7] = 'fa fa-heart-o';
                break;
            case 8:
                $scope.showAction.likeText[8] = 'Gefällt dir';
                $scope.showAction.likeIcon[8] = 'fa fa-heart-o';
                break;
            case 9:
                $scope.showAction.likeText[9] = 'Gefällt dir';
                $scope.showAction.likeIcon[9] = 'fa fa-heart-o';
                break;
        }
    };

    /**
     * Share a specific motto
     * @param {index} index 
     */
    $scope.shareFunction = function (index) {
        
        switch(index) {
            case 0:
                $scope.showAction.shareText[0] = 'Geteilt'; break;
            case 1: 
                $scope.showAction.shareText[1] = 'Geteilt'; break;
            case 2:
                $scope.showAction.shareText[2] = 'Geteilt'; break;
            case 3:
                $scope.showAction.shareText[3] = 'Geteilt'; break;
            case 4:
                $scope.showAction.shareText[4] = 'Geteilt'; break;
            case 5:
                $scope.showAction.shareText[5] = 'Geteilt'; break;
            case 6:
                $scope.showAction.shareText[6] = 'Geteilt'; break;
            case 7:
                $scope.showAction.shareText[7] = 'Geteilt'; break;
            case 8:
                $scope.showAction.shareText[8] = 'Geteilt'; break;
            case 9:
                $scope.showAction.shareText[9] = 'Geteilt'; break;
        }
    };

    /**
     * Show detailed motto
     */
    $scope.moreFunction = function () {
		
		ModalService.openLoginModel(function(){
			$rootScope.isSessionCookie = true;
		});
	};

    /**
     * Get the motto content from firebase database
     */
    $scope.getMottoContent = function() {

		//get JSON motto data
		var callback = function(result){ //result is a JSON object with the 11 newest mottos
			$scope.showMotto.contentMotto[0] = result[Object.keys(result)[0]].text;
			$scope.showMotto.autorMotto[0] = 'Unbekannt';
			$scope.showMotto.contentMotto[1] = 'Der Teufel ist ein Einhörnchen';
			$scope.showMotto.autorMotto[1] = 'Unbekannt';
			$scope.showMotto.contentMotto[2] = 'Jeder ist seines Glückes Schmied';
			$scope.showMotto.autorMotto[2] = 'Unbekannt';
			$scope.showMotto.contentMotto[3] = 'Habe Mut; dich deines eingenen Verstandes zu bedienen';
			$scope.showMotto.autorMotto[3] = 'Unbekannt';
			$scope.showMotto.contentMotto[4] = 'Wer nicht hofft; der wird nie dem Unverhofftem begegnen';
			$scope.showMotto.autorMotto[4] = 'Unbekannt';
			$scope.showMotto.contentMotto[5] = 'Alles im Leben hat zwei Seiten. Suche die Beste!';
			$scope.showMotto.autorMotto[5] = 'Unbekannt';
			$scope.showMotto.contentMotto[6] = 'Angriff ist die beste Verteidigung';
			$scope.showMotto.autorMotto[6] = 'Unbekannt';
			$scope.showMotto.contentMotto[7] = 'Beim Duschen sollte der Duschvorhang immer innen sein!';
			$scope.showMotto.autorMotto[7] = 'Unbekannt';
			$scope.showMotto.contentMotto[8] = 'Ende Gut alles Gut';
			$scope.showMotto.autorMotto[8] = 'Unbekannt';
			$scope.showMotto.contentMotto[9] = 'Alles hat ein Ende nur die Wurst hat zwei'; 
			$scope.showMotto.autorMotto[9] = 'Unbekannt';
		}
		getMottoData(callback);
		
    };
    
    /** 
     * API request -> get motto object
     */
	function getMottoData(callback){
		var req = new XMLHttpRequest();
		req.open("GET", 'https://mottomanatee.firebaseio.com/api/mottos.json?orderBy="timestamp"&limitToLast=11', true); // 11 newest mottos
		
		req.onload = function () {
			if (req.readyState == 4 && req.status == "200") {
				var responseObj = JSON.parse(req.responseText); //JSON object erstellen und zurückgeben
				callback(responseObj);
			}
		}
		
		req.send();
    }
    
    /**
     * Update motto content for page 1
     */
    $scope.reloadeMottoContent1 = function() {

    };

    /**
     * Update motto content for page 2
     */
    $scope.reloadeMottoContent2 = function() {

    };

    /**
     * Update motto content for page 3
     */
    $scope.reloadeMottoContent3 = function() {

    };
	

}