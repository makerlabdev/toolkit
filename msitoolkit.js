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
		_msiToolkitObject.maakHiddenFields = function(formID = "form") {
			var formObj = $("#"+formID);
			var utmRaw = location.search.substring(1);
			if (!location.search.substring(1)) return;
			var utmObj = JSON.parse('{"' + utmRaw.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) });

			$.each(utmObj, function(key, value) {
				if (!key.includes('utm')) { return; }
				$('<input>').attr({
						type: 'hidden',
						id: key,
						name: key,
						value: value,
				}).appendTo(formObj);
			});
		}

		// Vind alle CTA's en plak UTM codes in de href
		_msiToolkitObject.utmNaarAlleCTA = function(ctaID = "btn-cta") {
			var ctaBtnObj = $('*[id^="' + ctaID + '"]'); 
			ctaBtnObj.each(function() {
			    var url = $(this).attr('href');
			    $(this).attr('href', url + "?" + window.location.search.slice(1));
			});
		}

		// Lees het formulier, serialize de data en plak dit onder de submit button (brutefore submit method=GET)
		_msiToolkitObject.formDataNaarVolgendePagina = function(form = "form", url) {
			$("#"+form).find('input[type=submit]').click(function(e) {
				setTimeout(
					function() 
					{
						window.location.replace(url + "?" + $("#"+form).serialize());
					}, 2000);
			});
		}

		// Haal alle non-utm params uit de url en populate een form
		_msiToolkitObject.vulFormMetUrlParams = function(formID = "form", utm = false) {
            var formObj = $("#"+formID);
            var paramsRaw = location.search.substring(1);
            var paramsObj = JSON.parse('{"' + paramsRaw.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) });

            $.each(paramsObj, function(key, value) {
                if (key.includes('utm') && utm === false) { return; }
                $("input[name='"+key+"']").val(value);
            });
        }
        
		return _msiToolkitObject;
	}

	if (typeof(window.msi) === 'undefined'){
		window.msi = msiToolkit();
	}
})(window);