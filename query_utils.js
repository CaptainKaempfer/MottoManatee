/* Query utility functions for Web Engineering REST Project*/

//GET JSON data for users and return a JSON Object
function getUserData(userID = "", callback){
	var req = new XMLHttpRequest();
	if( userID == ""){ //all users
		req.open("GET", "https://mottomanatee.firebaseio.com/api/users" +".json", true);
	}else{ // single user
		req.open("GET", "https://mottomanatee.firebaseio.com/api/users/" + userID + ".json", true);
	}
    
	req.onload = function () {
		if (req.readyState == 4 && req.status == "200") {
            var responseObj = JSON.parse(req.responseText); //JSON object erstellen un zurückgeben
            callback(responseObj);
		}
	}
	
	req.send();
}

//GET JSON data for mottos and return a JSON Object
function getMottoData(userID = "", mottoID = "", callback){
	var req = new XMLHttpRequest();
	if((userID != "") && (mottoID == "")){ //all mottos for a given user
		req.open("GET", "https://mottomanatee.firebaseio.com/api/mottos" + '.json?orderBy="user"&equalTo="' + userID + '"', true);
	}else if((userID == "") && (mottoID != "")){ // single motto
		req.open("GET", "https://mottomanatee.firebaseio.com/api/mottos/" + mottoID + ".json", true);
	}else if((userID == "") && (mottoID = "")){// 5 newest mottos
		req.open("GET", 'https://mottomanatee.firebaseio.com/api/mottos.json?orderBy="timestamp"&limitToLast=5', true);
	}

	req.onload = function () {
		if (req.readyState == 4 && req.status == "200") {
            var responseObj = JSON.parse(req.responseText); //JSON object erstellen un zurückgeben
            callback(responseObj);
		}
	}
	
	req.send();
}

//Create new user from JSON data
function createUser(jsonObj){ 
	var jsonString = JSON.stringify(jsonObj);
	var req = new XMLHttpRequest();
	req.open("PATCH", "https://mottomanatee.firebaseio.com/api/users" + ".json", true);
	req.send(jsonString);
}

//Create new motto from JSON data and return the mottoID as a String
function postMotto(jsonObj,callback){
	var jsonString = JSON.stringify(jsonObj);
	var req = new XMLHttpRequest();
	req.open("POST", "https://mottomanatee.firebaseio.com/api/mottos" + ".json", true);
	req.onload = function () {
		if (req.readyState == 4 && req.status == "200") {
			var jsonObj = JSON.parse(req.responseText); // mottoID in der Form {"name":"-JSOpn9ZC54A4P4RoqVa"}, muss irgendwo im html auf der webseite hinterlegt sein
			var mottoID = jsonObj.name;
			callback(mottoID);
		}
	}
	req.send(jsonString);
}

function like(userID /*the one who clicks like*/, mottoID){
	var req = new XMLHttpRequest();
	req.open("PATCH", "https://mottomanatee.firebaseio.com/api/mottos/" + mottoID + "/" + "likes.json", true);
	req.send('{"' + userID + '":true}');
}

function deleteMotto(mottoID){
    var req = new XMLHttpRequest();
    req.open("DELETE", "https://mottomanatee.firebaseio.com/api/mottos/" + mottoID + ".json", true);
    req.send();
}