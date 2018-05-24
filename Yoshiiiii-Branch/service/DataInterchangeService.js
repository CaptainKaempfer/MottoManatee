DataInterchangeService.$inject = ['$http', '$cookies'];
function DataInterchangeService ($http, $cookies)
{
	////////// Basic variables to store relevant data //////////
	var elID = [];
	var elIDType = [];
	var numberElid = 0;
	var entityName = '';
	// Variables to store status messages
	var entityAttributeSuccess = 0;
	var entityAttributeError = 0;
	var elIDTypeName = [];
	var entityStatus = [];
	var entityStatusMessage = [];

	// variables to store relation data
	var relationRestriction = [];
	var showRelation = false;
	var relationAttributes = [];
	var relationChange = [];

	var createEntityList;
	var displayEntity = [];

	// Variables to display an status notification
	var notification = [];

	var search;
	var filterData;
	////////// Basic Operations to query relevant data //////////

	var addEntityData = function(newObj, newObj2, newObj3) {
		elID.push(newObj);
		elIDType.push(newObj2);
		elIDTypeName.push(newObj3);
	};
	var getELID = function() {
		return elID;
	};
	var getELIDType = function() {
		return elIDType;
	};
	var getELIDTypeName = function() {
		return elIDTypeName;
	};
	var clearEntityData = function() {
		elID = [];
		elIDType = [];
		elIDTypeName = [];
	};

	//

	var addNumberElid = function(number) {
		numberElid = numberElid + number;
	};
	var getNumberElid = function() {
		return numberElid;
	};
	var clearNumberElid = function() {
		numberElid = 0;
	};

	//

	var setEntityName = function (name) {
		entityName = name;
	};
	var getEntityName = function () {
		return entityName;
	};
	var cleareEntityName = function () {
		entityName = '';
	};

	// 

	var setSuccess = function (attributeSuccess) {
		entityAttributeSuccess = attributeSuccess;
	};
	var setError = function (attributeError) {
		entityAttributeError = attributeError;
	};
	var getSuccess = function () {
		return entityAttributeSuccess;
	};
	var getError = function () {
		return entityAttributeError;
	};
	var clearMessage = function () {
		entityAttributeSuccess = 0;
		entityAttributeError = 0;
	};

	//

	var createEntity = function (newObj) {
		createEntityList = newObj;
	};
	var getCreateEntity = function () {
		return createEntityList;
	};
	var storeDisplayEntity = function(newObj) {
		displayEntity = newObj;
	};
	var getDisplayEntity = function() {
		return displayEntity;
	};

	//

	var setEntityStatus = function (newObj, newObj2) {
		entityStatus= newObj;
		entityStatusMessage = newObj2;
	};
	var getEntityStaus = function() {
		return entityStatus;
	};
	var getEntityStatusMessage = function() {
		return entityStatusMessage;
	};

	//

	var setRelationRestrictions = function(newObj) {
		relationRestriction = newObj;
	};
	var getRelationRestrictions = function() {
		return relationRestriction;
	};
	var setRelationShow = function(boolean) {
		showRelation = boolean;
	};
	var getRelationShow = function() {
		return showRelation;
	};
	var setRelationAttributes = function(string) {
		relationAttributes.push(string);
	};
	var getRelationAttributes = function() {
		return relationAttributes;
	};
	var setRelationChange = function(string) {
		relationChange.push(string);
	};
	var deleteRelationChange = function(string) {
		relationChange.pop(string);
	};
	var getRelationChange = function() {
		return relationChange;
	};
	var deleteRelationChange = function() {
		relationChange = [];
	};

	//

	var setNotification = function(string1, string2, string3) {
		notification.title = string1;
		notification.subTitle = string2;
		notification.message = string3;
	};
	var getNotification = function() {
		return notification;
	};

	// 

	var setSearch = function (string) {
		search = string;
	};
	var getSearch = function() {
		return search;
	};
	var setFilterData = function(obj) {
		filterData = obj;
	};
	var getFilterData = function() {
		return filterData;
	};

	//

	var clearAll = function () {
		console.log("Temporary storage cleared!");
		// Clear numbers
		entityAttributeSuccess = 0;
		entityAttributeError = 0;
		numberElid = 0;
		// Clear arrays
		elID = [];
		elIDType = [];
		elIDTypeName = [];
		entityStatus = [];
		entityStatusMessage = [];
		relationRestriction = [];
		// Clear booleans
		showRelation = false;
		relationAttributes = [];
		relationChange = [];
		filterData = [];
	}

	////////// Provide the operations for outside //////////

	return{
		/**
		 * Adds a new entity data to the List
		 * @param newObj
		 * @param newObj2
		 */
		addEntityData: addEntityData,
		/**
		 * Queries elid data from the List
		 */
		getELID: getELID,
		/**
		 * Queries type of the elid from the List
		 */
		getELIDType: getELIDType,
		/**
		 * Queries type name of the elid from the List
		 */
		getELIDTypeName: getELIDTypeName,
		/**
		 * Clears the entity data from the List
		 */
		clearEntityData: clearEntityData,
		/**
		 * Increments the number of elids
		 * @param number
		 */
		addNumberElid: addNumberElid,
		/**
		 * Queries the number of elids
		 */
		getNumberElid: getNumberElid,
		/**
		 * Resets the number of elids
		 */
		clearNumberElid: clearNumberElid,
		/**
		 * Sets the choosen entity name
		 * @param name
		 */
		setEntityName: setEntityName,
		/**
		 * Queries the choosen entity name
		 */
		getEntityName: getEntityName,
		/**
		 * Clears the choosen entity name
		 */
		cleareEntityName: cleareEntityName,
		/**
		 * Clears the whole temporary storage
		 */
		clearAll: clearAll,
		/**
		 * Set success amount
		 */
		setSuccess: setSuccess,
		/**
		 * Set error amount
		 */
		setError: setError,
		/**
		 * Get success amount
		 */
		getSuccess: getSuccess,
		/**
		 * Get error amount
		 */
		getError: getError,
		/**
		 * Cleare success and error amount
		 */
		clearMessage: clearMessage,
		/**
		 * Stores data for bulk creating entitys
		 */
		createEntity: createEntity,
		/**
		 * Queries data for bulk creating entitys
		 */
		getCreateEntity: getCreateEntity,
		/**
		 * Stores the entitys in order to display them
		 */
		storeDisplayEntity: storeDisplayEntity,
		/**
		 * Queries the stores entity which are displayed
		 */
		getDisplayEntity: getDisplayEntity,
		/**
		 * Stores data relevant to display in result message
		 */
		setEntityStatus: setEntityStatus,
		/**
		 * Queries relevant entity status data
		 */
		getEntityStaus: getEntityStaus,
		/**
		 * Queries relevant entity status message data
		 */
		getEntityStatusMessage: getEntityStatusMessage,
		/**
		 * Stores relevant relation restriction data
		 */
		setRelationRestrictions: setRelationRestrictions,
		/**
		 * Queries relevant relation restriction data
		 */
		getRelationRestrictions: getRelationRestrictions,
		/**
		 * Variale to hide certain relation types
		 * @param(boolean) boolean
		 */
		setRelationShow: setRelationShow,
		/**
		 * Returns the relation hide value
		 */
		getRelationShow: getRelationShow,
		/**
		 * Variale to hide certain relation attributes
		 * @param(boolean) boolean
		 */
		setRelationAttributes: setRelationAttributes,
		/**
		 * Returns the relation attributes hide value
		 */
		getRelationAttributes: getRelationAttributes,
		setRelationChange: setRelationChange,
		deleteRelationChange: deleteRelationChange,
		getRelationChange: getRelationChange,
		deleteRelationChange: deleteRelationChange,
		setNotification: setNotification,
		getNotification: getNotification,
		setSearch: setSearch,
		getSearch: getSearch, 
		setFilterData: setFilterData,
		getFilterData: getFilterData,
	};
}