DataInterchangeService.$inject = ['$http', '$cookies'];
function DataInterchangeService ($http, $cookies)
{
	////////// Basic variables to store relevant data //////////
	var editType = '';
	var mottoContentData = {
        contentMotto: ['','','','','','','','',''], 
		autorMotto: ['','','','','','','','','']
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
	}

	var setContentMottoData = function (obj) {
		mottoContentData.contentMotto = obj.contentMotto;
		mottoContentData.autorMotto = obj.autorMotto;
		console.log(mottoContentData);
	};
	var getContentMottoData = function()
	{
		console.log("-----Daten: ", mottoContentData);
		return mottoContentData;
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
		setContentMottoData: setContentMottoData,
		getContentMottoData: getContentMottoData,

	};
}