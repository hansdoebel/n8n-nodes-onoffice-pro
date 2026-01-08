---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/estate-tracking-details/
title: estate-tracking-details
scraped: 2026-01-08T20:25:16.513Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Get Estate tracking details](https://apidoc.onoffice.de/actions/informationen-abfragen/estate-tracking-details/) &raquo; Get Estate tracking details		

	
	
		
# Get Estate tracking details
	

	

		
**Resource type:**` estatetrackingdetails`

Returns information about the estate tracking accounts under &#8220;Actions >> Property actions >> Property tracking / follow-up&#8221;.

**Parameters:**

`accountname`

		STRING. MANDATORY. Account name of the estate tracking account. This is the column &#8220;Login&#8221; in the enterprise GUI.

`password`

		STRING. MANDATORY. Password of the estate tracking account.

**Example:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "estatetrackingdetails",
    "parameters": {
        "accountname": "Tracking Kunde Musterfrau",
        "password": "kjsdfhks56jdhfsdjkhfhjhui"
    }
}

```

**Response:**

`accountname`

		Account name of the estate tracking account
`information`

		Information about the estate tracking account
`note`

		Note about the estate tracking account
`addressid`

		Address id, which is linked with the estate tracking account
`estateids`

		Estate ids, which are linked with the estate tracking account

**Response example:**

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
                "resourcetype": "estatetrackingdetails",
                "cacheable": false,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 1,
                            "type": "estateTracking",
                            "elements": {
                                "accountname": "Tracking Kunde Musterfrau",
                                "information": "Test",
                                "note": "Test",
                                "addressid": "153",
                                "estateids": {
                                    "1": "2591",
                                    "3": "2595",
                                    "5": "2607"
                                }
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