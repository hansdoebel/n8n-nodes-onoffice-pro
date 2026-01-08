---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/get-macro-resolve/
title: get-macro-resolve
scraped: 2026-01-08T20:26:35.073Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Miscellaneous](https://apidoc.onoffice.de/api-calls-sorted-by-module/miscellaneous/) &raquo; [Get macro resolve](https://apidoc.onoffice.de/actions/informationen-abfragen/get-macro-resolve/) &raquo; Get macro resolve		

	
	
		
# Get macro resolve
	

	

		
**Resource type:** `macroresolve`

Action Type: Get

Returns the given text resolved by macro resolver. To have a proper context, usually IDs of a module have to be specified, see parameter list.

See [macro list](https://beta.smart.onoffice.de/smart/Popup/popupmacrolist.php) for reference (you need to be logged in in enterprise). You can call the macro list from enterprise via the menu &#8220;?->macro list&#8221;.

**Parameters:**

`text`

STRING. MANDATORY. Text to resolve.
`ishtml`

BOOL. Text or html.
`estateids`

ARRAY. Estate IDs.
`addressids`

ARRAY. Address IDs.
`appointmentids`

ARRAY. Appointment IDs.
`agentlogids`

ARRAY. agent log IDs.

**Example:**

```

{
	"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
	"resourceid": "",
	"identifier": "",
	"resourcetype": "macroresolve",
	"parameters": {
              "text":"_Uservorname _Username"
	}
}

```

**Response:**

**Parameters:**

`resolvedtext`

STRING. Resolved text

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
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
                "resourceid": "",
                "resourcetype": "macroresolve",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 0,
                            "type": "",
                            "elements": {
                                "resolvedtext": "Max Mustermann"
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
}

```