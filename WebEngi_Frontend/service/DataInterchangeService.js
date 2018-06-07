DataInterchangeService.$inject = ['$http', '$cookies'];
function DataInterchangeService ($http, $cookies)
{
	////////// Basic variables to store relevant data //////////
	var editType = '';
	var Motto = {
		currentLikes: 0,
		MottoText: '',
		MottoTitle: '',
		author: '',
		share: 0,
		postDate: '',
		content: ''
	};
	////////// Basic Operations to query relevant data //////////

	var setEditType = function(editStr) {
		this.editType = editStr;
	};
	var getEditType = function() {
		return this.editType;
	};
	var clearEditType = function() {
		this.editType = '';
	};

	//

	var clearAll = function () {
		thist.editType = '';
	};

	var getMotto = function() {
		return Motto;
	};
	var setMotto = function(content, author) {
		console.log("Daten: " + author + content);
		Motto.author = author;
		Motto.content = content;
	};
	////////// Provide the operations for outside //////////

	return{
		/**
		 * Set the edit type for editing the user profile
		 * @param editStr
		 */
		setEditType: setEditType,
		/**
		 * Return the edit type
		 */
		getEditType: getEditType,
		/**
		 * Clear the edit type
		 */
		clearEditType: clearEditType,
		/**
		 * Clear all data
		 */
		clearAll: clearAll,
		getMotto: getMotto,
		setMotto: setMotto,
	};
}