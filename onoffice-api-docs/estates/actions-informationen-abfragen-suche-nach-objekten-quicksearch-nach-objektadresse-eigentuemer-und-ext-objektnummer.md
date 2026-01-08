---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/suche-nach-objekten-quicksearch-nach-objektadresse-eigentuemer-und-ext-objektnummer/
title: suche-nach-objekten-quicksearch-nach-objektadresse-eigentuemer-und-ext-objektnummer
scraped: 2026-01-08T20:25:19.625Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Get Search for Estates (Quick Search for Estate address, Owner and external Estate number)](https://apidoc.onoffice.de/actions/informationen-abfragen/suche-nach-objekten-quicksearch-nach-objektadresse-eigentuemer-und-ext-objektnummer/) &raquo; Get Search for Estates (Quick Search for Estate address, Owner and external Estate number)		

	
	
		
# Get Search for Estates (Quick Search for Estate address, Owner and external Estate number)
	

	

		
**Resource type: **`search`

Search for estates via quick search

**Parameters:**

`input`

Search string. The estate fields `objektnr_extern`, `ort`, `strasse` and the address fields `Vorname` and `Name` of the estate owner will be searched through. In case of combined search of street and house number, the results are restricted, i.e. they are linked with the AND operator.
`sortby`

STRING. Field to sort by. The database field names have to be used: `objektnr_extern` for `externalestateno`, `ort` for `city`, `strasse` for `street`, `hausnummer` for `houseno`.
`sortorder`

STRING. Possible values: `ASC` or `DESC`. Ascending or descending.
`includeThumbnail`

STRING. Possible values: `small` or `medium`. If set, a link to the thumbnail of the title image of the property is displayed in the response under `thumbnail`.
`filterId`

INTEGER. Filter ID. This parameter can also be used to restrict the search of estates via estate filters created in enterprise. The filter IDs of your created filters can be read out via the API call [Filter](http://apidoc.onoffice.de/index.php/actions/informationen-abfragen/filter/). For more information about filters, see our [online help](https://de.enterprisehilfebeta.onoffice.com/help_entries/immobilienfilter/).
`filter`

OBJECT. Key: field, value: array of objects with filter expressions in the format `"status": [{"op": "=", "val": 1}]`. With `op` you specify the operator. Possible values for `op` are the following SQL operators:

```
is or =, >, <, >=, <=, != or <>, between, like, not like, in, not in
```

For the operator `like` the value % can be specified as a placeholder.

With `val` you specify the value which should be applied to the filtering. The individual filter expressions are linked with the AND operation. Multiple values or ranges for operators like IN or BETWEEN are specified in comma separated array notation.

`"objektart": [{"op": "IN","val": ["Zimmer","Haus"]}], "letzte_aktion ": [{"op": "BETWEEN","val": ["2020-01-01","2021-04-01"]}]}`

**Response:**

`externalestateno`

ImmoNr. / external estate no
`zipcode`

ZIP code
`city`

City
`street`

Street
`houseno`

House number
`owner`

Owner of property
`type`

Type of property
`thumbnail`

Link to the thumbnail of the title image of the property. Is output if request parameter `includeThumbnail` is set.

**Request example:**

```

	{
		"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
		"identifier": "x",
		"resourceid": "estate",
		"resourcetype": "search",
		"parameters":
		{
			"input": "Musterstrasse"
		}
	}

```

**Response example:**

```

"actions":
            {
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
                "resourceid": "estate",
                "resourcetype": "search",
                "cacheable": false,
                "identifier": "x",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 1237,
                            "type": "estate",
                            "elements": {
                                "externalestateno": "PC910",
                                "zipcode": "52064",
                                "city": "Aachen, Innenstadt",
                                "street": "Musterstrasse",
                                "houseno": "12",
                                "owner": "Max Mustermann",
                                "type":"Haus"
                            }
                        }
                    ]
                },
                "status": {
                    "errorcode": 0,
                    "message": "OK"
                }
            }

```