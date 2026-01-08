---
source: https://apidoc.onoffice.de/actions/aktionen-ausfuehren/objekt-tracking-konto-erstellen/
title: objekt-tracking-konto-erstellen
scraped: 2026-01-08T20:25:17.533Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Do Create an Estate tracking account](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/objekt-tracking-konto-erstellen/) &raquo; Do Create an Estate tracking account		

	
	
		
# Do Create an Estate tracking account
	

	

		
**Resource type:** `createestatetrackingaccount`

Creates a new real estate tracking account with the specified information.

**Parameters:**

- `accountname`
MANDATORY. Name

- `accountpassword`
MANDATORY. Password in plain text

- `accountinformation`
Description

- `accountnote`
Additional comments

- `estateid`
MANDATORY. Linked estate record

- `addressid`
Linked address record

**Request example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "createestatetrackingaccount",
        "parameters": {
            "accountname": "tracking123@myonoffice.de",
            "accountpassword": "strongpasswordhere351@e1234",
            "estateid": "2529"
        }
    }

```

**Response:**

- `trackingid (Resourceid)`
ID of the newly created account in the resource ID

- `accountname`
Name

- `password`
Password in plain text

**Request example:**

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
                "resourcetype": "createestatetrackingaccount",
                "cacheable": false,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 27,
                            "type": "estateTracking",
                            "elements": {
                                "accountname": "tracking123@myonoffice.de",
                                "accountpassword": "strongpasswordhere351@e1234"
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