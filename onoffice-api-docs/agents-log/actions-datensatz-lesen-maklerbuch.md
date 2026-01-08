---
source: https://apidoc.onoffice.de/actions/datensatz-lesen/maklerbuch/
title: maklerbuch
scraped: 2026-01-08T20:25:42.441Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Agents log / Activities](https://apidoc.onoffice.de/api-calls-sorted-by-module/agents-log/) &raquo; [Read Agents log / Activities](https://apidoc.onoffice.de/actions/datensatz-lesen/maklerbuch/) &raquo; Read Agents log		

	
	
		
# Read Agents log
	

	

		
**Resource:** `agentslog`

Reads all specified fields from a given agents log record. All fields listed under parameter `data` are valid here and are passed as elements of an array in the parameter `data`. The information from the info icon at the bottom left is also displayed. A list of kind of actions and action types can be found in enterprise under &#8220;Extras >> Settings >> Administration >> Action types&#8221;. The german names are valid for the API.

**Parameters:**

`data`ARRAY. Each field is returned with the appropriate value of the record. Entries are sorted antichronologically. Following fields can be queried within the `data` parameter:

`Objekt_nr`, `Adress_nr`, `Aktionsart`, `Aktionstyp`, `Datum`, `created`, `Benutzer`, `Benutzer_nr`, `Datum_bearb`, `Kosten`, `Bemerkung`, `merkmal`, `HerkunftKontakt`, `dauer`, `Beratungsebene`, `Absagegrund`, `Benutzer_bearb`, `mailDate`, `Aktionsmerkmale`, `Angeboten_fuer`, `Nr` (ID / data record number). 

The values for `Beratungsebene` (Advisory level) are `A Miet-/Kaufvertrag unterzeichnet`, `B Schriftliche Miet-/Kaufzusage`, `C Im intensiven Gespräch`, `D Interessiert, aber noch prüfend`, `E Dokumentation erhalten`, `F Dokumentation bestellt`, `G Absage`. The values for `Absagegrund` (Reason of cancellation) can be found in the administration under Singleselect, Module: Property activities. A reason for cancellation can be specified if the advisory level is &#8220;G Absage&#8221;.
`estateid`

ARRAY. Return only entries associated with this estate records. Note that multiple IDs can be specified.
`addressid`

ARRAY. Return only entries associated with this address records. Note that multiple IDs can be specified.
`projectid`

INTEGER. Return only entries associated with this project record.
`filter`
OBJECT. Key: field, value: array of objects with filter expressions in the format `"Aktionsart": [{"op": "=", "val": "Email"}]`. With `op` you specify the operator. Possible values for `op` are the following SQL operators:

```
is or =, >, <, >=, <=, != or <>, between, like, not like, in, not in
```

For the operator `like` the value % can be specified as a placeholder.

With `val` you specify the value which should be applied to the filtering. The individual filter expressions are linked with the AND operation. Multiple values or ranges for operators like IN or BETWEEN are specified in comma separated array notation.

`"Aktionsart": [{"op": "IN","val": ["Email","Preisänderung"]}],`

`"created": [{"op": "BETWEEN","val": ["2020-01-01 00:00:00","2021-04-01 15:00:00"]}]}`

**NOTE**: The following fields cannot be specified in the filter parameter: `Benutzer`, `Adress_nr`, `Objekt_nr`, `dauer`

`listlimit`

INTEGER. Maximum number of records returned in the response. Maximum: 500. Default: 20.
- `listoffset`
INTEGER. Offset of the list, that means from which data record onwards the list should be output.

- `sortby`
OBJECT. Fields to sort by. The field name is used as the key, and the type of sorting as the value. Notation: `{"Aktionsart": "ASC", "Aktionstyp": "DESC"}`
Possible values for sorting are ASC for ascending, DESC for descending. It is also possible to specify only field names without sort information and use `sortorder` together with parameters, e.g. `"sortby": "Aktionsart"`.

`sortorder`

STRING. Possible values: `ASC` or `DESC`. Ascending or descending. Only applicable if `sortby` was specified as a string without sorting information, e.g. `"sortby": "Aktionsart"`.
`fullmail`

BOOLEAN. If true, the associated email will be returned in the response parameter `mailbody`.
`tracking`

BOOLEAN. Return only entries released for object tracking.

**Example:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
    "resourcetype": "agentslog",
    "resourceid": "",
    "identifier": "",
    "parameters": {
        "estateid": 2507,
        "filter": {
            "Aktionsart": &#x5B;
                {
                    "op": "=",
                    "val": "Email"
                }
            ]
        },
        "data": &#x5B;
            "Objekt_nr",
            "Aktionsart",
            "Aktionstyp",
            "Datum",
            "Bemerkung",
            "merkmal"
        ]
    }
}

```

**Response:**

- `*(individually)*`

`mailbody`

STRING. Mail body of the associated e-mail

```

{
    "status": {
        "code": 200,
        "errorcode": 0,
        "message": "OK"
    },
    "response": {
        "results": &#x5B;
            {
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
                "resourceid": "",
                "resourcetype": "agentslog",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 2
                    },
                    "records": &#x5B;
                        {
                            "id": 67075,
                            "type": "agentslog",
                            "elements": {
                                "Objekt_nr": &#x5B;
                                    "2529"
                                ],
                                "Aktionsart": "Email",
                                "Aktionstyp": "Ausgang",
                                "Datum": "2021-02-23 12:28:30",
                                "Bemerkung": "Vertragsunterlagen versendet",
                                "merkmal": null
                            }
                        },
                        {
                            "id": 67035,
                            "type": "agentslog",
                            "elements": {
                                "Objekt_nr": &#x5B;
                                    "2529"
                                ],
                                "Aktionsart": "Email",
                                "Aktionstyp": "Ausgang",
                                "Datum": "2021-02-20 15:30:00",
                                "Bemerkung": "Hallo",
                                "merkmal": "|indMulti1780Select8196|"
                            }
                        },
                "status": {
                    "errorcode": 0,
                    "message": "OK"
                }
            }
        ]
    }
}

```

**2nd Example: Filter with `Beratungsebene` and `Absagegrund`**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourcetype": "agentslog",
        "resourceid": "",
        "identifier": "",
        "parameters": {
            "estateid": 6103,
            "filter": {
                "Beratungsebene": &#x5B;
                    {
                        "op": "in",
                        "val": &#x5B;
                            "G Absage"
                        ]
                    }
                ],
                "Absagegrund": &#x5B;
                    {
                        "op": "in",
                        "val": &#x5B;
                            "Alter",
                            "Lage"
                        ]
                    }
                ]
            },
            "data": &#x5B;
                "Objekt_nr",
                "Aktionsart",
                "Aktionstyp",
                "Datum",
                "Bemerkung",
                "merkmal",
                "Beratungsebene",
                "Absagegrund"
            ]
        }
    }

```