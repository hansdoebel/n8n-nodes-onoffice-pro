---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/regionen-live-suche/
title: regionen-live-suche
scraped: 2026-01-08T20:26:30.805Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Settings](https://apidoc.onoffice.de/api-calls-sorted-by-module/settings/) &raquo; [Get Regions Live Search](https://apidoc.onoffice.de/actions/informationen-abfragen/regionen-live-suche/) &raquo; Get Regions Live Search		

	
	
		
# Get Regions Live Search
	

	

		
**Resource type:** `regionsLiveSearch`

With this API call, regions can be read out by a search term (part of the region name) (&#8220;Regions in Address Completion via Autocomplete&#8221;).

**Parameters:**

`searchstring`

		Search term

**Request example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "regionsLiveSearch",
        "parameters": {
            "searchstring": "Aachen"
        }
    }

```

**Response:**

`key`

		Combination of region level and ID (z.B. „*1_5515*“)
`title`

		Name of the region. Scheme: Region1 – Region2 &#8211; Region3
`field`

		Unique region key

**Response example:**

```

...
elements: &#x5B;
{
	key: "1_5409",
	title: "Bezirk Aachen",
	field: "indMulti1186Select5407"
},
{
	key: "2_5415",
	title: "Bezirk Aachen - Aachen Stadt",
	field: "indMulti1186Select5409"
},
...

```