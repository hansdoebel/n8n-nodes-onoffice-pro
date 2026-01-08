---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/suche-nach-passenden-suchkriterien/
title: suche-nach-passenden-suchkriterien
scraped: 2026-01-08T20:25:40.367Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Search Criteria](https://apidoc.onoffice.de/api-calls-sorted-by-module/search-criteria/) &raquo; [Get Search for suitable Search criteria](https://apidoc.onoffice.de/actions/informationen-abfragen/suche-nach-passenden-suchkriterien/) &raquo; Get Search for suitable Search criteria		

	
	
		
# Get Search for suitable Search criteria
	

	

		
**Resource type: **`search`

Returns all search criteria (search criteria ID + address ID) for a list of fields to be queried.

**Resource ID: **`searchcriteria`

**Parameters:**

`searchdata`

		STRING{}. Fields to be queried. Indication in the form of comma-separated key-value pairs, e.g. `{"range_plz":"52074", "range_ort":"Aachen"}`

You can specify information about geocoordinates either via the field `regionaler_zusatz` or you can set a range via the field `range`. The output differs depending on which of these fields are enabled in the [search criteria administration](https://www.enterprisehilfe.onoffice.de/suchkriterien_2639.xhtml).

Case 1: `regionaler_zusatz` active, `range` (Umkreis/radius) inactive: It is searched directly on the basis of the regional addition. It must be queried for the field (e.g. `indMulti1482Select5627`) and not for the content (e.g. `Aachen`). The field can be found out by downloading the region list in the region administration via the button &#8220;Regionenliste herunterladen / download region list&#8221; and look there.

Case 2: `range` active, `regionaler_zusatz` inactive: With the fields `range_ort` or `range_plz` or `range_breitengrad` + `range_laengengrad` the center of the search is specified. All search criteria that match this query are output. If you are looking for example after `range_ort:"Aachen"`, all search criteria in the surroundings whose range overlaps with Aachen are output. For example, a search criterion with location: Cologne, range: 100 km, would be found.

Case 3: `range` active, `regionaler_zusatz` active: In this case, `range` takes precedence when searching both ways. It is recommended to search by range in this case.

The regional addition, if valid, is converted to geocoordinates and then it is searched by these geocoordinates. The label of the region as defined in the administration is used to search the coordinates. Valid regions will have a green check mark in the regions administration for &#8220;Check region&#8221;.

`outputall`

		BOOL. If true, all information from the search criteria is output. If false, all fields from the parameter `outputfields` are output. (Default: false)

`outputfields`

		STRING[]. Fields of the search criteria to be output. (Default: Id)

`groupbyaddress`

		BOOL. If true, only one search criterion is output per address. (Default: true)

`offset`

		INT. Output search criteria from point X. (Default: 0)

`limit`

		INT. Number of data records to be output. If only the number of search criteria is important, 0 should be selected here for performance reasons. (Default: 10)

`order`

		ARRAY/OBJECT. Examples: `['Id','anzahl_zimmer_bis']` sorts by ID and &#8220;anzahl_zimmer_bis&#8221; ascending.`{'anzahl_zimmer_bis':'DESC'}` sorts by  &#8220;anzahl_zimmer_bis&#8221; descending. Again, combinations are possible. (Default: [])

**Example: Reading the search criteria by regional addition**

If range (Umkreis/radius) is activated in the search criteria administration, the regional addition is converted into geocoordinates and it is searched by using these coordinates.

If radius is deactivated in the search criteria administration, the search is made directly for the regional addition.

```

{
	"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
	"resourceid": "searchcriteria",
	"identifier": "",
	"resourcetype": "search",
	"parameters": 
	{
		"searchdata":{"regionaler_zusatz":"indMulti1482Select5627"},
		"outputall":"true"
	}
}

```

**Example: Reading the search criteria via a postal code**

```

{
	"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
	"resourceid": "searchcriteria",
	"identifier": "",
	"resourcetype": "search",
	"parameters": 
	{
		"searchdata":{"range_plz":"52074"},
		"outputall":"true"
	}
}

```

**Response: Reading the search criteria via a postal code**

```

{
	"id": 131,
	"type": "searchcriteria",
	"elements": {
		"Id": "131",
		"adresse": "121",
		"objektart": "haus",
		"range_breitengrad": "50.93840",
		"range_laengengrad": "6.95997",
		"range_ort": "K\u00f6ln",
		"range": "100",
		"range_land": "DEU",
		"land": "DEU"
		}
}
...

```

**Example: Reading the search criteria for 4 rooms**

```

{
	"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
	"resourceid": "searchcriteria",
	"identifier": "",
	"resourcetype": "search",
	"parameters": 
	{
		"searchdata":{"anzahl_zimmer":"4"}
	}
}

```