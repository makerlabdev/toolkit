# MSI Dev Experiment Toolkit
Work in progress!!

Sneller experimenten opzetten met kant-en-klare scripts.

# Hoe gebruik je dit?

Kopieer de volgende code in de `<head>` sectie van je Webflow project.

``` html
<script type="text/javascript" src="https://makerlabdev.github.io/toolkit/msitoolkit.js"></script>
```

# Alles-in-één oplossingen

## Alle CTA knoppen opzoeken en de UTM codes erachter plakken

De default functie zoekt alle knoppen op die beginnen met `btn-cta` in de `id` en zet hier de UTM codes achter:

```javascript
msi.utmNaarAlleCTA();
````

Je kan ook zelf een begin term voor de `id` instellen in de parameter
```javascript
msi.utmNaarAlleCTA("customID");
````

## Hidden fields automatisch aanmaken voor alle UTM codes

Deze functie leest de UTM codes uit en maakt automatisch een hidden field aan per UTM, deze worden daarna ook gevuld met de juiste data.
Je moet de exacte form `id` opgeven in de paramter van de functie.
```javascript
msi.maakHiddenFields("formID");
```

# Losse functies

## Alle UTM codes uit de URL krijgen

```javascript
var utms = msi.alleUTM();
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

Vooorbeeld
```javascript
var utm_content = msi.losseUTM("utm_content");
```
