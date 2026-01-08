---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/suchkriterienfelder/
title: suchkriterienfelder
scraped: 2026-01-08T20:25:39.350Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Search Criteria](https://apidoc.onoffice.de/api-calls-sorted-by-module/search-criteria/) &raquo; [Get Search criteria fields](https://apidoc.onoffice.de/actions/informationen-abfragen/suchkriterienfelder/) &raquo; Get Search criteria fields		

	
	
		
# Get Search criteria fields
	

	

		
**Resource type:** `searchCriteriaFields`

With this API call all fields can be queried that are marked / selected as search criteria.

**Parameters:**

`language`

STRING. 3-digit ISO code, e.g. &#8220;ENG&#8221;. If parameter is set, the field labels in the response are displayed in the set language.
`additionalTranslations`

BOOLEAN. If true, the parameter `additionalTranslations` is also output for all ‘from-to’ fields, e.g. purchase price in the response, and shows the field name and field label of the ‘from’ and ‘to’ information.

**Request example**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "searchCriteriaFields",
        "parameters": &#x5B;]
    }

```

**Response:**

`name`

Name of the category
`fields`

Array of JSON objects. List of fields in a category.

`id`

Unique field key
`name`

name of field
`position`

Position of the field within the search criteria fields
`type`

Type of field (data type, `singleselect`, `multiselect`)

Special case “regionaler_zusatz” (Regional addition): `limitExceeded` (if more than 200 values are available), `displayLive` (if &#8220;Extras >> Settings >> Miscellaneuos >> Regions in contact data completion by automatic completion&#8221; is active), `displayAll` (otherwise, if the other conditions do not apply)
`ko`

OPTIONAL. Field is marked as knockout criterion
`mandatory`

OPTIONAL. Field is a mandatory field
`rangefield`

OPTIONAL. Field has a value range (&#8220;from&#8221; &#8211; &#8220;to&#8221; field)
`objektarten`

OPTIONAL. Field filter for property classes. Comma-separated &#8220;list&#8221; of the property classes for which the field is to be displayed
`nutzungsarten`

OPTIONAL. Field filter for type of usage. Comma-separated &#8220;list&#8221; of the types of usage for which the field is to be displayed
`vermarktungsarten`

OPTIONAL. Field filter for marketing method. Comma-separated &#8220;list&#8221; of marketing methods for which the field is to be displayed
`values`

OPTIONAL. Only for type `single-` and `multiselect`. JSON object with individual key-value pairs
`default`

OPTIONAL. Only for type `single-` und `multiselect`. Default value of the singleselect or multiselect values
`additionalTranslations`

OPTIONAL. BOOLEAN. If request parameter `additionalTranslations` is true, this response parameter is output for all ‘from-to’ fields, e.g. purchase price in the response, and shows the field name and field label of the ‘from’ and ‘to’ information.

**Beispiel:**

```

...
elements: {
	name: "Flächen",
	fields: &#x5B;
	{
		id: "wohnflaeche",
		name: "Wohnfläche",
		position: "3",
		ko: "true",
		rangefield: "true",
		type: "urn:onoffice-de-ns:smart:2.5:dbAccess:dataType:float",
		objektarten: "wohnung,haus,waz,hallen_lager_prod,zimmer"
	},
...

```