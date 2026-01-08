---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/single-and-multiselect-values/
title: single-and-multiselect-values
scraped: 2026-01-08T20:25:33.144Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Addresses](https://apidoc.onoffice.de/api-calls-sorted-by-module/addresses/) &raquo; [Get Single- and multiselect values of address fields](https://apidoc.onoffice.de/actions/informationen-abfragen/single-and-multiselect-values/) &raquo; Get Single- and multiselect values of address fields		

	
	
		
# Get Single- and multiselect values of address fields
	

	

		
**Resource type: **`confignewaddressfields`

The values of singleselect and multiselect fields of the address module can be read out.

**Parameters:**

- `fieldname`
Field name of a singleselect or multiselect address field.

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "fieldvalues",
        "identifier": "",
        "resourcetype": "confignewaddressfields",
        "parameters": {
            "fieldname": "Land"
        }
    }

```

**Response parameters:**

- `id`
ID of the key value

- `title`
Label of the key value

**Response snippet:**

```

...
                        {
                            "id": "DEU",
                            "type": "",
                            "elements": {
                                "title": "Deutschland"
                            }
                        },
...

```