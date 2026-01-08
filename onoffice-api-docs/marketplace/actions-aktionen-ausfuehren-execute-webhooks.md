---
source: https://apidoc.onoffice.de/actions/aktionen-ausfuehren/execute-webhooks/
title: execute-webhooks
scraped: 2026-01-08T20:26:46.446Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Marketplace](https://apidoc.onoffice.de/marketplace/) &raquo; [Do Execute Webhooks](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/execute-webhooks/) &raquo; Execute Webhooks		

	
	
		
# Execute Webhooks
	

	

		
**Resource type:** `executeMarketplaceWebhooks`

In the marketplace, some services are set up as webhooks. This API call triggers all active marketplace webhooks (update or create) in the customer for the specified record and module. The record id is to be specified as resource id.

The changed fields cannot be checked here either, as the saving has already taken place at this point.

If a new record is created or changed in the onOffice app, the API call should be called afterwards and all webhooks for the record should be triggered.

Marketplace providers cannot use the call.

**Parameters:**

`module`

STRING. Module for which the webhooks are executed. Possible values: `estate`, `address`, `task`, `calendar`

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": "15005",
        "identifier": "",
        "resourcetype": "executeMarketplaceWebhooks",
        "parameters": {
            "module": "address"
        }
    }

```

**Response parameters:** &#8220;result&#8221;: &#8220;success&#8221; if  successfull

**Response example: **

```

...
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
                "resourceid": "15005",
                "resourcetype": "executeMarketplaceWebhooks",
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
                                "result": "success"
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
...

```