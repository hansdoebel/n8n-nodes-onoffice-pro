---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/get-link/
title: get-link
scraped: 2026-01-08T20:26:39.195Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Miscellaneous](https://apidoc.onoffice.de/api-calls-sorted-by-module/miscellaneous/) &raquo; [Get link](https://apidoc.onoffice.de/actions/informationen-abfragen/get-link/) &raquo; Get link		

	
	
		
# Get link
	

	

		
**Resource type:** `getlink`

Action Type: Get

This call can be used to retrieve URLs for editing estates, addresses and activities. The URL opens the corresponding detail view when logged in to enterprise.

If you are not logged in, you will be redirected to the login page. Wrong URLs are redirected to the dashboard.

The call returns as result the URL to the corresponding module with the corresponding record encrypted.

Please note that the links should not be saved permanently, as they might change with a release. However, this happens only rarely.

The module to be queried must be specified as the resource ID. Values: `estate`, `address`, `agentslog`

**Parameters:**

`recordId`

INTEGER. MANDATORY. Record ID of the corresponding module.
`type`

STRING. Only relevant for module `agentslog`. Values: `estate`, `address`. Specifies whether a link to the address or estate view of an agentslog entry should be generated. Default: `estate`. &#8220;Access violation&#8221; occurs if you specify a type that does not match the agentslog entry.

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "estate",
        "identifier": "",
        "resourcetype": "getlink",
        "parameters": {
            "recordId": 5979
        }
    }

```

**Response:**

**Parameters:**

`url`

STRING. URL of the detail view of the request record

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
                "resourceid": "estate",
                "resourcetype": "getlink",
                "cacheable": false,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 5979,
                            "type": "",
                            "elements": {
                                "url": "https:\/\/beta.smart.onoffice.de\/smart\/smart.php?params=5nQt5%2B3vEm8pMspgWpqAdCzylyROxhpTIzFucBqtNpuysiqbyYnSblYFrB%2BCq8NWzDxGjsYc%2FmhPFpGh0fnvaJzJlQSSvDNWADJ%2BofMt6hQKAiBDyrb9fVEJkIJKtIqS%2FFVclqS%2FqUO0vUBsuY7lsw%3D%3D"
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