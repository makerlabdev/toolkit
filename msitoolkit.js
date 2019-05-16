// MSI TOOLKIT 0.1
// AUTHORS: JORI VAN KEULEN

// Constructor
(function(window){
	function msiToolkit(){
		var _msiToolkitObject = {};

		// methods
		_msiToolkitObject.alleUTMs = function() {
			var data = window.location.search.slice(1);
			return data;
		}

		return _msiToolkitObject;
	}

	if (typeof(window.msi) === 'undefined'){
		window.msi = msiToolkit();
	}
})(window);