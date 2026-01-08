---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/feldkonfiguration/
title: feldkonfiguration
scraped: 2026-01-08T20:26:26.592Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Settings](https://apidoc.onoffice.de/api-calls-sorted-by-module/settings/) &raquo; [Get Field Configuration](https://apidoc.onoffice.de/actions/informationen-abfragen/feldkonfiguration/) &raquo; Get Field Configuration		

	
	
		
# Get Field Configuration
	

	

		
**Resource type:** `fields`

With this call a list of the fields created in onOffice, their types and their permitted values can be queried. Depending on the parameters, the corresponding labels from the GUI can also be retrieved in the specified language.

It is important to keep the output in a cache, as the call may take several seconds, depending on the language selected.

Without specifying `modules` or `fieldList`, all fields are output.

**Parameters:**

- `labels`
BOOLEAN. OPTIONAL. Determines if labels are included.

- `language`
STRING. OPTIONAL. Language in three capital letters according to ISO 3166-1 alpha-3.

- `fieldList`
ARRAY. OPTIONAL. Only the fields specified here are output.

- `modules`
ARRAY. OPTIONAL. Only the fields of the modules specified here are output. The most important module IDs are: `address, estate, agentsLog, calendar, email, file, news, intranet, project, task, user`. The information about the main modules are complete. For some modules, information on the permitted values is missing in the response parameter `permittedvalues`.

`showfieldfilters`
BOOLEAN. OPTIONAL. If true, information about the field filters set in Administration is displayed in the response parameter `filters`. Existing filters for any of the field&#8217;s `permittedvalues` are also listed.

Possible values of `filters`:

- `status`: Status2 value (under Technical Data). Example: `status2obj_aktiv` (active)

- `nutzungsarten`: Category > Type of use. Example: `gewerbe` (Commercial)

- `vermarktungsarten`: Category > Type of commercialization. Example: `kauf` (Purchase)

- `immobilienart`: Type of property. Example: `wohnung` (Apartment)

- `stammobjekte`: Master property or unit. Example: `keineEinheitKeinStammobjekt` (neither a unit nor a master property)

- `showfielddependencies`
BOOLEAN. OPTIONAL. If true, the required type for each subtype listed in `permittedvalues` is output in key-value pairs in the response parameter `dependencies`.

- `showOnlyInactive`
BOOLEAN. OPTIONAL. Only inactive fields are displayed.

- `realDataTypes`
BOOLEAN. If true, the correct data type is output for the data types `datei`, `user`, `redhint`, `blackhint` and `dividingline` and not data type text.

`showFieldMeasureFormat`
BOOLEAN. If true, the parameter `fieldMeasureFormat` is output in the response. This parameter provides additional information about the data type or formatting of the field. Numerical fields can be output e.g. as prices, areas or percentages or with rounding. In enterprise this is the column [Type of the field](https://de.enterprisehilfebeta.onoffice.com/help_entries/administration/eingabefelder/#art) under &#8220;Administration >> Input fields&#8221;. Via the API you can read the type of all fields.

The field values are formatted this way when [addresses](https://apidoc.onoffice.de/actions/datensatz-lesen/adressen/) or [estates](https://apidoc.onoffice.de/actions/datensatz-lesen/objekte/) are requested and the parameter `formatoutput` is set true. The output can vary depending on the requested language, which can be controlled for addresses and estates by the `outputlanguage` parameter. If `formatoutput` is false, you can use the information from `fieldMeasureFormat` to implement logic for the formatting yourself.

Possible values of `fieldMeasureFormat`:

- `DATA_TYPE_DATE`: Date. Example: 10.01.2022

- `DATA_TYPE_DATETIME`: Date with time. Example: 10.01.2022 16:23:13

- `DATA_TYPE_TIME`: Time. Example: 16:23:13

- `DATA_TYPE_AREA`: Area. Example: approx. 100 m²

- `DATA_TYPE_DISTANCE`: Distance. Example: 111,11 km

- `DATA_TYPE_LENGTH`: Length. Example: 111 m. Result is rounded, no decimals

- `DATA_TYPE_DECIMAL_LENGTH`: Length with number of decimals. Example: 111,11 m

- `DATA_TYPE_VOLUME`: Volume. Example: 111 m³

- `DATA_TYPE_MONETARY`: Price. Example: 111,11 €. The currency unit corresponds to the set currency of the requested estate. 

- `DATA_TYPE_MONETARY_WITHOUT_CURRENCY`: Price without currency. Example: 111,11

- `DATA_TYPE_PERCENTAGE`: Percent. Example: 111 %. Result is rounded, no decimals

- `DATA_TYPE_YEAR`: Year. Example: 2022

- `DATA_TYPE_NUMERIC`: Quantity. Example: 111,11

- `DATA_TYPE_BYTESIZE`: Bytes (file size). Example: 111.1 Bytes

- `DATA_TYPE_MONETARY_OR_TEXT`: Price if digit, text otherwise

- `DATA_TYPE_ENERGY_REQUIRED`: Energy demand. Example: 111,11 kWh/(m²*a)

- `DATA_TYPE_DURATION`: Period in min. Example: ca. 111 Min. Result is rounded, no decimals 

- `DATA_TYPE_USER`: User. Example: Max Mustermann

- `DATA_TYPE_BOOLEAN`: Boolean values, `true` and `false`.

`DATA_TYPE_NONE`: Standard data type, e.g. for text fields. No formatting
- `DATA_TYPE_ALL`: If none of the previously mentioned

- `null`

**Example:**

```

    {
        "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid":"",
        "identifier":"",
        "resourcetype":"fields",
        "parameters": {
                "labels":true,
                "language":"DEU",
                "modules":&#x5B;"address", "estate"]
        }
    }

```

**Response:**

The module is always specified as the record ID. Under &#8220;elements&#8221; the label of the respective module can be found (if `labels` is set), as well as the respective fields:

- the field name as a key,

- `type`
Specification of the type (`singleselect`, `multiselect`, `freetext`)

- `permittedvalues`
Permitted values (only relevant for `singleselect` and `multiselect` fields)

- `default`
Default value of the field

- `filters`
Array of filters for the field and any `singleselect` and `multiselect` fields

- `dependencies`
Array of relevant dependencies

- `compoundField`
Array of fields that make up the composite field. E.g. the field `Plz-Ort` is composed of postcode (`Plz`) and city (`Ort`). A compound field is set by setting the individual fields.

- `label`
Field name in the GUI in the selected language

- `fieldMeasureFormat`
If `showFieldMeasureFormat` is true, the type of field under &#8220;Administration >> Input Fields&#8221; is output here.

```

...
"actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:get",
	"resourceid":"",
	"resourcetype":"fields",
	"identifier":"",
	"data":{
		"meta":{
			"cntabsolute":null
		},
		"records":&#x5B;
			{
				"id":"address",
				"type":"",
				"elements":{
					"gwgMitgliederVerwaltungsorgan":{
						"type":"freetext",
						"permittedvalues":&#x5B;],
						"default":null,
						"filters": &#x5B;],
						"dependencies": &#x5B;]
						},
					"schaufensterTv_veroeffentlichen":{
						"type":"freetext",
						"permittedvalues":&#x5B;],
						"default":null,
						"filters": &#x5B;],
						"dependencies": &#x5B;]
					},
...

```

**Response with filters and dependencies:**

```

...
"records":&#x5B;
	{
		"id": "estate",
		"type":"",
		"elements":{
			"anzahl_zimmer": {
				"type": "float",
				"length": null,
				"permittedvalues": null,
				"default": null,
				"filters": {
					"anzahl_zimmer": {
						"nutzungsarten": &#x5B;
							"wohnen",
							"gewerbe"
						],
						"immobilienart": &#x5B;
							"haus",
							"buero_praxen"
						]
					}
				},
				"dependencies": &#x5B;],
				"compoundFields": &#x5B;],
				"label": "Anzahl Zimmer",
				"fieldMeasureFormat": "DATA_TYPE_NUMERIC"
			},
			"objekttyp": {
				"type": "singleselect",
				"length": null,
				"permittedvalues": {
					"stellplatz": "Stellplatz",
					"carport": "Carport",
					"zimmer": "Zimmer",
					"hausbau_reihenhaus": "Reihenhaus",
					"hausbau_mehrfamilienhaus": "Mehrfamilienhaus",
					&#x5B;...]
					"wohnanlage": "Wohnanlage",
					"besondereImmobilie": "besondere Immobilie"
				},
				"default": null,
				"filters": {
					"carport": {
						"status": &#x5B;
							"status2obj_aktiv"
						],
						"nutzungsarten": &#x5B;
							"wohnen"
						],
						"vermarktungsarten": &#x5B;
							"kauf",
							"miete"
						]
					}
				},
				"dependencies": {
					"stellplatz": "parken",
					"carport": "parken",
					"zimmer": "zimmer",
					"hausbau_reihenhaus": "hausbau",
					"hausbau_mehrfamilienhaus": "hausbau",
					&#x5B;...]
					"wohnanlage": "haus",
					"besondereImmobilie": "haus"
				},
				"compoundFields": &#x5B;],
				"label": "Objekttyp",
				"fieldMeasureFormat": null
			},
...

```

The query for the fields `Aktionsart` (kind of action) and `Aktionstyp` (type of action) is an exception: `Aktionsart` is displayed as a singleselect and `Aktionstyp` as `freetext`. These two fields are handled differently internally and must be queried via a separate action.

**[Kind of action und type of action](https://apidoc.onoffice.de/index.php/actions/informationen-abfragen/aktionsart-und-typ/)**