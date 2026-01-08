---
source: https://apidoc.onoffice.de/actions/datensatz-anlegen/maklerbuch-aktivitaeten/
title: maklerbuch-aktivitaeten
scraped: 2026-01-08T20:25:43.506Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Agents log / Activities](https://apidoc.onoffice.de/api-calls-sorted-by-module/agents-log/) &raquo; [Create Agents log / Activities](https://apidoc.onoffice.de/actions/datensatz-anlegen/maklerbuch-aktivitaeten/) &raquo; Create Agents log / Activities		

	
	
		
# Create Agents log / Activities
	

	

		
**Resource type:** `agentslog`

Writes a agents log or activity entry. A list of kind of actions and action types can be found in enterprise under &#8220;Extras >> Settings >> Administration >> Action types&#8221;. The german names are valid for the API.

**Parameters:**

`datetime`

STRING. Date and time (Y-m-d H:i:s). If datetime is not set, the current date and time are written.
`actionkind`

STRING. OPTIONAL. Kind of action (Aktionsart).
`actiontype`

STRING. OPTIONAL. Action type (Aktionstyp).
`origincontact`

STRING. OPTIONAL. Type of contact (Herkunft Kontakt). Values can be found in enterprise under &#8220;Extras >> Settings >> Administration >> Multiselect >> Module: address management&#8221; >> multiselectfield: type of contact&#8221; in the column &#8220;field&#8221;.
`features`

STRING. OPTIONAL. Features (Characteristic / Merkmal). Values can be found in enterprise under &#8220;Extras >> Settings >> Administration >> Multiselect >> Module: Agent´s log&#8221; >> multiselectfield: Characteristic&#8221; in the column &#8220;field&#8221;.
`cost`

FLOAT. OPTIONAL. Costs
`duration`

INTEGER . OPTIONAL. Duration. Specify the value in seconds.
`advisorylevel`

STRING. OPTIONAL. Advisorylevel (Beratungsebene). Specify the values as `A` to `G`.
`reasoncancellation`

STRING. OPTIONAL. Reason of cancellation (Absagegrund). Functions together with advisory level G = Cancellation. Values can be found in enterprise under &#8220;Extras >> Settings >> Administration >> Singleselect >> Module: Property Activities&#8221; >> key field: Reason of cancellation&#8221; in the column &#8220;content&#8221;.
`note`

STRING. OPTIONAL. Note (Bemerkung).
`addressids`

ARRAY. OPTIONAL if estateid is set. Linked address IDs: If there are multiple address IDs, a agents log entry is created for each of these addresses
`estateid`

INTEGER. OPTIONAL, if addressids is set. Linked estate.
`projectid`

INTEGER. OPTIONAL. Linked project.
`taskid`

INTEGER. OPTIONAL. Linked task.
`appointmentid`

INTEGER. OPTIONAL. Linked appointment.
`fileids`

ARRAY. OPTIONAL. Linked files.
`userid`

INTEGER. OPTIONAL. Support (Betreuer) of the entry. Id of linked user. If not set, the logged in user will be set as Support (Betreuer) of the entry.

**Example: Agents log entry for a sent e-mail**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:create",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "agentslog",
        "parameters": {
            "datetime": "2021-02-08 11:13:30",
            "addressids": &#x5B;
                34,
                35
            ],
            "estateid": 41,
            "actionkind": "Email",
            "actiontype": "Ausgang",
            "note": "Vertragsunterlagen versendet",
            "origincontact": "immobilienscout24_system",
            "features": &#x5B;
                "indMulti1832Select5686",
                "indMulti1832Select5690",
                "indMulti1836Select5692"
            ],
            "cost": 2.45,
            "duration": 3000,
            "advisorylevel": "B",
            "reasoncancellation": "Architektur"
        }
    }

```

If `addressids` and `estateid` is set, then also an entry in enterprise will be created under Addresses >> Property Search >> Tab &#8220;Offered till now&#8221; and Estates >> Prospective Buyers >> Tab &#8220;Offered till now&#8221;.

**Example: Activity entry for a revocation confirmation**

```

	{
		"actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:create",
		"resourceid":"",
		"identifier":"",
		"resourcetype":"agentslog",
		"parameters":{
			"addressids":&#x5B;32],
			"actionkind":"Widerruf bestätigt",
			"actiontype":"Vorzeitiger Beginn",
			"note":"Widerruf bestätigt..."
		}
	}

```

**Response:**

`id`

The ID of the new agents log or activity entry

```

...
"records": &#x5B;
    {
        "id": 6065,
        "type": "agentsLog",
        "elements": &#x5B;
        ]
    }
]
...

```