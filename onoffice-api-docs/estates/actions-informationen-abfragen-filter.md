---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/filter/
title: filter
scraped: 2026-01-08T20:25:12.378Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Get Estate Filter](https://apidoc.onoffice.de/actions/informationen-abfragen/filter/) &raquo; Get Filter		

	
	
		
# Get Filter
	

	

		
**Resource type:** `filters`

This call can be used to query a list of filters created in onOffice.

**Parameters:**

- `module`
Name of the module. Possible values are `address` and `estate`. STRING.

**Example:**

```

	{
		"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
		"resourceid": "",
		"identifier": "",
		"resourcetype": "filters",
		"parameters": {
      	      "module":"address"
		}
	}

```

**Response:**

- `scope`
Visibility of the filter. There are private, public and office filters

- `name`
Name of the filter

- `userId`
User ID

- `groupId`
Office group ID

```

...
"records": &#x5B;
	{
		"id": 15,
		"type": "filter",
		"elements": 
		{
			"scope": "public",
			"name": "Adressen ohne Suchkriterium",
			"userId": null,
			"groupId": null
		}
	},
	{
		"id": 8,
		"type": "filter",
		"elements": 
		{
			"scope": "office",
			"name": "Büroadressen",
			"userId": null,
			"groupId": 195
                            }
		}
	},
		{
			"id": 19,
			"type": "filter",
			"elements": 
			{
				"scope": "public",
				"name": "aktive Adressen ohne Aktivit\u00e4ten",
				"userId": null,
				"groupId": null
			}
	},
]
...

```