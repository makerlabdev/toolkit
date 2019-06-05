// MSI TOOLKIT 0.1
// AUTHOR(S): JORI VAN KEULEN
// ORGANISATION: MAKERSTREET INNOVATION AMSTERDAM

(function(window){
	function msiToolkit(){
		var _msiToolkitObject = {};

		// Hier schrijven we alle methods!

		// Return alle URL params in 1 string 
		_msiToolkitObject.alleUTM = function() {
			var data = window.location.search.slice(1);
			return data;
		}

		// Return individuele URL params op basis van naam
		_msiToolkitObject.losseUTM = function(name) {
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		}

		// Alles in 1 cookiebanner
		_msiToolkitObject.cookieBanner = function() {
			return "work in progress....";
		}

		// Maak per URL param een hidden field in het formulier
		_msiToolkitObject.maakHiddenFields = function(formID) {

		}

		// Vind alle CTA's en plak UTM codes in de href
		_msiToolkitObject.utmNaarAlleCTA = function(cta = "btn-cta") {
			var ctaBtnArray = $('*[id^="btn-cta"]'); 
			ctaBtnArray.each(function() {
			    var url = $(this).attr('href');
			    $(this).attr('href', url + window.location.search.slice(1));
			});
		}

		return _msiToolkitObject;
	}

	if (typeof(window.msi) === 'undefined'){
		window.msi = msiToolkit();
	}
})(window);