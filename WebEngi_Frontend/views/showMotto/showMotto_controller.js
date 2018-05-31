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

    /**
     * Share a specific motto
     * @param {index} index 
     */
    $scope.shareFunction = function (index) {
        
        switch(index) {
            case 0:
                $scope.showAction.shareText0 = 'Geteilt'; break;
            case 1: 
                $scope.showAction.shareText1 = 'Geteilt'; break;
            case 2:
                $scope.showAction.shareText2 = 'Geteilt'; break;
            case 3:
                $scope.showAction.shareText3 = 'Geteilt'; break;
            case 4:
                $scope.showAction.shareText4 = 'Geteilt'; break;
            case 5:
                $scope.showAction.shareText5 = 'Geteilt'; break;
            case 6:
                $scope.showAction.shareText6 = 'Geteilt'; break;
            case 7:
                $scope.showAction.shareText7 = 'Geteilt'; break;
            case 8:
                $scope.showAction.shareText8 = 'Geteilt'; break;
            case 9:
                $scope.showAction.shareText9 = 'Geteilt'; break;
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
    	
		$scope.showMotto.contentMotto[0] = 'Zünde lieber eine Kerze an; statt über die Dunkelheit zu meckern'; 
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
		
		//get JSON motto data
		var callback = function(result){ //result is a JSON object with the 11 newest mottos
			//console.log(JSON.stringify(result));
			//parse the JSON in here
		}
		getMottoData(callback);
    };
    
    /** 
     * Firebase database connection -> get motto object
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