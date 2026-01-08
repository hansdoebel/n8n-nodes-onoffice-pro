---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/adressvervollstaendigungsfelder/
title: adressvervollstaendigungsfelder
scraped: 2026-01-08T20:25:30.068Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Addresses](https://apidoc.onoffice.de/api-calls-sorted-by-module/addresses/) &raquo; [Get Address completion fields](https://apidoc.onoffice.de/actions/informationen-abfragen/adressvervollstaendigungsfelder/) &raquo; Get Address completion fields		

	
	
		
# Get Address completion fields
	

	

		
**Resource type :** `addressCompletionFields`

With this API call all fields can be queried, which are marked / selected for address completion.

**Parameters:**

- (none)

**Request example**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "addressCompletionFields",
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

		Name of field
`type`

		Type of field (Data type, `singleselect`, `multiselect`)
`values`

		OPTIONAL. Only for type `singleselect` and `multiselect`. JSON object with individual key-value pairs.
`default`

		OPTIONAL. Only for type `singleselect` and `multiselect`. Default value of the singleselect or multiselect values.

**Example:**

```

...
elements: {
	name: "Verwaltung",
	fields: &#x5B;
	{
		id: "ArtDaten",
		name: "Kontaktart",
		type: "multiselect",
		values: {
			indMulti5509Select5509: "Objektesammler",
			indMulti5507Select5507: "Mensch",
...

```