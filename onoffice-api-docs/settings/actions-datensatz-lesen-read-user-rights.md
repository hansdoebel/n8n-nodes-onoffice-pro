---
source: https://apidoc.onoffice.de/actions/datensatz-lesen/read-user-rights/
title: read-user-rights
scraped: 2026-01-08T20:26:25.558Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Settings](https://apidoc.onoffice.de/api-calls-sorted-by-module/settings/) &raquo; [Read User rights](https://apidoc.onoffice.de/actions/datensatz-lesen/read-user-rights/) &raquo; Read User rights		

	
	
		
# Read User rights
	

	

		
**Resource type:** `checkuserrecordsright`

Action Type: Get

Reads out the user rights. Specify the type of right (`action`), `module`, `userid` and an array of `recordIds`. The response delivers a filtered array of `recordIds`, on which the user has read rights.

**Parameters:**

`action`

STRING. Action. Possible values: `read`, `delete`, `modify`, `create`.
`module`

STRING. Module. Possible values: `folder`, `agents_log`, `calendar`, `address`, `estate`, `task`, `project`, `statistic`, `searchCriteria`, `file`, `emailDraft`, `objecttracking`, `smartsite2Root`, `pdfForms`,  `agentslogMail`
`userid`

INTEGER. User ID
`recordIds`

ARRAY. Record IDs.

**Example: Reading out user read rights for user 17 on addressess 153 and 149**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "checkuserrecordsright",
    "parameters": {
        "action": "read",
        "module": "address",
        "userid": 17,
        "recordIds": &#x5B;
            "153",
            "149"
        ]
    }
}

```

**Response:**

- `Elements.` Record IDs where user has rights.

**Response-Example: Reading out user read rights for user 17 on addressess 153 and 149**

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
                "resourcetype": "checkuserrecordsright",
                "cacheable": false,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 1
                    },
                    "records": &#x5B;
                        {
                            "id": 0,
                            "type": "",
                            "elements": &#x5B;
                                "153"
                            ]
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