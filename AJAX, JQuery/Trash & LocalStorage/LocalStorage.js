(function(window) {
	function Local() {
		this.ls = localStorage;
		
	};
	Local.prototype.initField = function(fieldid) {
		if(!this.ls[fieldId]) {
			this.clearField(fieldId);
		}
	};
	Local.prototype.updateField = function(fieldId, data) {
		this.ls[fieldId] = JSON.stringify(data);
	};
	Local.prototype.getFieldData = function(fieldId) {
		return JSON.(parse[this.isFieldId]);
	};
	Local.prototype.clearField = function(fieldId) {
		this.ls[fieldId] = [];
	};
	window.ls = new Local();
})(window);