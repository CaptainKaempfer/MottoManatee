/* Query utility functions for Web Engineering REST Project*/

//GET JSON data for users or mottos and return a JSON Object
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
            var responseObj = JSON.parse(req.responseText); //JSON object erstellen un zurückgeben
            return responseObj;
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

//Create new motto from JSON data
function postMotto(jsonObj){
	var jsonString = JSON.stringify(jsonObj);
	var req = new XMLHttpRequest();
	req.open("POST", "https://mottomanatee.firebaseio.com/api/mottos" + ".json", true);
	req.onload = function () {
		if (req.readyState == 4 && req.status == "200") {
			document.write(req.responseText); // mottoID in der Form {"name":"-JSOpn9ZC54A4P4RoqVa"}
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