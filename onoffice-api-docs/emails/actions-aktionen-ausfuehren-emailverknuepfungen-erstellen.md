---
source: https://apidoc.onoffice.de/actions/aktionen-ausfuehren/emailverknuepfungen-erstellen/
title: emailverknuepfungen-erstellen
scraped: 2026-01-08T20:26:14.851Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Emails](https://apidoc.onoffice.de/api-calls-sorted-by-module/emails/) &raquo; [Do Email links](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/emailverknuepfungen-erstellen/) &raquo; Do Email links		

	
	
		
# Do Email links
	

	

		
**Resource type:** `emailassignments`

This can be used to link an email with address and / or estate data records. Analogous to the enterprise software, only one data record can be linked at a time. If no address or property ID is specified, the call returns success, but then no link is set.

**Parameters:**

`emailidentity`

STRING. MANDATORY. Identity under whose name the emails should be sent. Can only accept identities associated with the user in enterprise
`messageid`

STRING. MANDATORY. Unique message ID of the email
`uid`

INTEGER. MANDATORY. Unique identifier of the email
`folder`

STRING. MANDATORY. Folder in which the email is located
`addressid` (deprecated, use `adressIds` instead)

INTEGER. OPTIONAL. ID of the address data record. If the adress is to be unlinked, &#8220;0&#8221; is to be transferred
`addressIds`

ARRAY. OPTIONAL. IDs of the address data records. If the array is empty, all links are removed. If there are one or more IDs in the array, these are stored as links in the e-mail. Existing links are overwritten.
`estateid`

INTEGER. OPTIONAL. ID of the estate data record. If the estate is to be unlinked, &#8220;0&#8221; is to be transferred

**Example:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "emailassignments",
    "parameters": {
        "emailidentity": "max.mustermann@my-onoffice.de",
        "folder": "INBOX",
        "messageid": "<cron001-5f0277a7187e33.77784738-1556997217.100882@onoffice.de>",
        "uid": 1973,
        "addressIds": &#x5B;601, 523],
        "estateid": 2649
    }
}

```

**Response:**

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
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
                "resourceid": "",
                "resourcetype": "emailassignments",
                "cacheable": false,
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
                                "success": "success"
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