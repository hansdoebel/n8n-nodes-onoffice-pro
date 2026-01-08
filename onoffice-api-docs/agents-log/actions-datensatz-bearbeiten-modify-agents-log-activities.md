---
source: https://apidoc.onoffice.de/actions/datensatz-bearbeiten/modify-agents-log-activities/
title: modify-agents-log-activities
scraped: 2026-01-08T20:25:44.538Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Agents log / Activities](https://apidoc.onoffice.de/api-calls-sorted-by-module/agents-log/) &raquo; [Modify Agents log / Activities](https://apidoc.onoffice.de/actions/datensatz-bearbeiten/modify-agents-log-activities/) &raquo; Modify Agents log / Activities		

	
	
		
# Modify Agents log / Activities
	

	

		
**Resource type:** `agentslog`

Modifies an agents log or activity entry. The agents log / activity ID has to be specified as resource ID. A list of kind of actions and action types can be found in enterprise under &#8220;Extras >> Settings >> Administration >> Action types&#8221;. The german names are valid for the API.

Relations (estate, address, task, project, file) can already be modified with the &#8220;[Modify relations](https://apidoc.onoffice.de/actions/datensatz-bearbeiten/relations/)&#8221; call.

**Parameters:**

`actionkind`

STRING. Kind of action (Aktionsart).
`actiontype`

STRING. Action type (Aktionstyp).
`origincontact`

STRING. Type of contact (Herkunft Kontakt). Values can be found in enterprise under &#8220;Extras >> Settings >> Administration >> Multiselect >> Module: address management&#8221; >> multiselectfield: type of contact&#8221; in the column &#8220;field&#8221;.
`cost`

FLOAT. Costs
`note`

STRING. Note (Bemerkung).
`duration`

INTEGER . Duration. Specify the value in seconds.
`features`

STRING. Features (Characteristic / Merkmal). Values can be found in enterprise under &#8220;Extras >> Settings >> Administration >> Multiselect >> Module: Agent´s log&#8221; >> multiselectfield: Characteristic&#8221; in the column &#8220;field&#8221;.
`datetime`

STRING. Date and time (Y-m-d H:i:s). Activity Date/Time; not the &#8216;modified on&#8217; date.

**Example: Agents log entry for an appointment**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
        "resourceid": "267",
        "identifier": "",
        "resourcetype": "agentslog",
        "parameters": {
            "data": {
                "actionkind": "Termin",
                "actiontype": "Beratung",
                "origincontact": "immobilienscout24_system",
                "cost": 179.99,
                "note": "Wertermittlung der Immobilie",
                "duration": 7200,
                "features": &#x5B;
                    "invoiceOpen", 
                    "property_valuation"
                ],
                "datetime": "2025-11-17 15:30:25"
            }
        }
    }

```

**Response:**

```

...
"response": {
    "results": &#x5B;
        {
            "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
            "resourceid": "267",
            "resourcetype": "agentslog",
            "cacheable": false,
            "identifier": "",
            "data": {
                "meta": {
                    "cntabsolute": null
                },
                "records": &#x5B;
                    {
                        "id": 267,
                        "type": "agentsLog",
                        "elements": {
                            "Aktionsart": "Termin",
                            "Aktionstyp": "Beratung",
                            "HerkunftKontakt": "immobilienscout24_system",
                            "Kosten": "179.99",
                            "Bemerkung": "Wertermittlung der Immobilie",
                            "dauer": "7200",
                            "merkmal": "|invoiceOpen||property_valuation|",
                            "Datum": "2025-11-17 15:30:25",
                            "Uhrzeit": "15:30:25"
                        }
                    }
                ]
            },
            "status": {
                "errorcode": 0,
                "message": "OK"
            }
        }
    ]
}
...

```