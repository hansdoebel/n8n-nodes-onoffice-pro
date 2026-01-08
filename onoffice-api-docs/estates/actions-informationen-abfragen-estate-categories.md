---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/estate-categories/
title: estate-categories
scraped: 2026-01-08T20:25:18.554Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Get Estate categories](https://apidoc.onoffice.de/actions/informationen-abfragen/estate-categories/) &raquo; Get Estate categories		

	
	
		
# Get Estate categories
	

	

		
**Action type: **`Get`

**Resource type: **`estateCategories`

Outputs the property classes and property types defined in enterprise.

**Parameter: none**

**Example:**

```

{
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "estateCategories",
        "parameters": &#x5B;]
}

```

**Response:**

```

...
"id": "objektart",
"type": "",
"elements": &#x5B;
  {
    "id": "zimmer",
    "name": "Zimmer"
  },
  {
    "id": "haus",
    "name": "Haus"
  },
...

```