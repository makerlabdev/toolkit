# MSI Dev Experiment Toolkit
Work in progress!!

Sneller experimenten opzetten met kant-en-klare scripts.

# Hoe gebruik je dit?

Kopieer de volgende code in de `<head>` sectie van je Webflow project.

``` html
<import type="text/javascript" src=""></script>
```

# Functies

## Alle UTM codes uit de URL krijgen

```javascript
msi.alleUTM();
```

Voorbeeld

```javascript
var utmCodes = msi.alleUTM();
var buttonUrl = "https://www.landingpage.com";
var nieuweUrl = buttonUrl + utmCodes;
```

## Een losse UTM code uit de URL krijgen

```javascript
msi.losseUTM();
```