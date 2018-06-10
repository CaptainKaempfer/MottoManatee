ShowCtrl.$inject = ['$rootScope', '$scope', '$cookies', 'DataInterchangeService', 'ModalService'];
function ShowCtrl ($rootScope, $scope, $cookies, DataInterchangeService, ModalService)
{
	////////////////////////////////// Variable Declaration /////////////////////////////

    $scope.mottoID = [];

    // Search bar declarations
	$scope.searchMotto = {
		titel: '',
		author: '',
		content: ''
    };

    $scope.showMotto = DataInterchangeService.getContentMottoData();

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
        var req = new XMLHttpRequest();
	
        $scope.showAction.likeText[index] = "Gefällt dir";
        $scope.showAction.likeIcon[index] = "fa fa-heart-o";

        req.open("PATCH", "https://mottomanatee.firebaseio.com/api/mottos/" + $scope.mottoID[index] + "/likes.json", true);
        req.send('{"' + $scope.user.username + '":true}');
    };

    /**
     * Share a specific motto
     * @param {index} index 
     */
    $scope.shareFunction = function (index) {
        
            $scope.showAction.shareText[index] = 'Geteilt';
    };

    /**
     * Show detailed motto
     */
    $scope.moreFunction = function () {
		
		ModalService.openDetailModal(function(){
			$rootScope.isSessionCookie = true;
		});
	};

    /**
     * Get the motto content from REST API
     */
    $scope.getMottoContent = function() {

		//get JSON motto data
		var callback = function(result){ //result is a JSON object with the 11 newest mottos
            var i;
            var tempData = {
                contentMotto: ['','','','','','','','',''], 
		        autorMotto: ['','','','','','','','','']
            };

            for(i = 0; i<10; i++){
                try{
                tempData.contentMotto[i] = result[Object.keys(result)[i]].text;
                tempData.autorMotto[i] = result[Object.keys(result)[i]].user;
                $scope.mottoID[i] = Object.keys(result)[i];
                }catch(e){
                    
                }
            }
            console.log($scope.showMotto);
            
            DataInterchangeService.setContentMottoData(tempData);

        }

        $scope.showMotto = DataInterchangeService.getContentMottoData();

        console.log("+++++++++++");
        console.log("Daten: ", $scope.showMotto);

         getMottoData(callback);

         alert($scope.showMotto);
		
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