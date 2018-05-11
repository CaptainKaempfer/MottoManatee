/* Query utility functions for Web Engineering REST Project*/

//GET JSON data
function getJSON(userID = "", mottoID = ""){
	var req = new XMLHttpRequest();
	if((userID == "") && (mottoID == "")){
		req.open("GET", "https://mottomanatee.firebaseio.com/api/users" +".json", true);
	}else if((userID != "") && (mottoID == "")){
		req.open("GET", "https://mottomanatee.firebaseio.com/api/users/" + userID + ".json", true);
	}else if((userID != "") && (mottoID != "")){
		req.open("GET", "https://mottomanatee.firebaseio.com/api/users/" + userID + "/" + mottoID +".json", true);
	}
	
	req.onload = function () {
		if (req.readyState == 4 && req.status == "200") {
			document.write(req.responseText);
		}
	}
	
	req.send();
}

//Create new user from JSON data
function createUser(jsonObj){ 
	//var jsonString = JSON.stringify(jsonObj);
	var jsonString = '{"testuser1234":{"name": "Mustermann", "vorname": "Martina", "stadt": "Heidenheim", "land": "Deutschland"}}'; //just for testing purposes
	// bei Accounterstellung überprüfen, ob username schon vorhanden!
	var req = new XMLHttpRequest();
	req.open("PATCH", "https://mottomanatee.firebaseio.com/api/users" + ".json", true);
	req.send(jsonString);
}

//Create new motto from JSON data
function postMotto(userID, jsonObj){
	// var jsonString = JSON.stringify(jsonObj);
	var jsonString = '{"user": "' + userID + '", "text":"mottotext here", "timestamp":{".sv":"timestamp"} }'
	var req = new XMLHttpRequest();
	req.open("POST", "https://mottomanatee.firebaseio.com/api/mottos" + ".json", true);
	req.onload = function () {
		if (req.readyState == 4 && req.status == "200") {
			document.write(req.responseText); // mottoID
		}
	}
	req.send(jsonString);
}

function like(userID /*the one who clicks like*/, mottoID){
	var req = new XMLHttpRequest();
	req.open("PATCH", "https://mottomanatee.firebaseio.com/api/mottos/" + mottoID + "/" + "likes.json", true);
	req.send('{"' + userID + '":true}');
}