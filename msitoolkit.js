// MSI TOOLKIT 0.1
// AUTHORS: JORI VAN KEULEN

// Constructor
function msi(id) {
	return this;
}

// Dot-operator methods
msi.prototype = {
	alleUTM: function() {
		var data = window.location.search.slice(1);
		return this;
	}
}