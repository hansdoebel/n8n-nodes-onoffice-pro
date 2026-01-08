---
source: https://apidoc.onoffice.de/marketplace/unlock-marketplace-provider/
title: unlock-marketplace-provider
scraped: 2026-01-08T20:26:41.272Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Marketplace](https://apidoc.onoffice.de/marketplace/) &raquo; [Do Unlock marketplace provider](https://apidoc.onoffice.de/marketplace/unlock-marketplace-provider/) &raquo; Unlock marketplace provider		

	
	
		
# Unlock marketplace provider
	

	

		
**Action type: **`Do`

**Resource type: **`unlockProvider`

Unlocks a marketplace provider for the onOffice marketplace for an onOffice enterprise user. Use this call to activate your service in the customer versions. You can find more information about the activation process in the [technical marketplace documentation](https://www.marketplacedoc.onoffice.de/freischaltung/#Freischaltung1).

Sets the information, if a user is a regular customer.

See also [technical marketplace documentation](https://www.marketplacedoc.onoffice.de/api-calls/) for more information about the API calls for the marketplace.

**Parameter:**

`parameterCacheId`

ARRAY. Parameter cache ID. The parameter cache contains information for the identification of the client.
`isRegularCustomer`

BOOLEAN. Flag, if the user is a regular customer. That allows the provider to handle the payment process directly with the user. Possible values: `1` (is regular customer) or `0`. Default: `0`
`extendedclaim`

STRING. Extended claim. See [here](https://apidoc.onoffice.de/marketplace/) for more information.

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "unlockProvider",
        "parameters": {
            "parameterCacheId": "6802c44a-7ac0-4210-a3d4-e5581e3fa0b6",
            "extendedclaim": "ctguyroHtO7_6XaBpJgwUB_npk8nGUPociZaKzYfAEYRXFR_Cv879mYelDHEEfeB754tN7HWFcQN4Aq2B-8lpBYHYEE0xeHxoJ6yRZMJjOyHdno1514ycUD0buDx0GYVLx7fgL_BEYgvz3aQgToYL05WxXQTrE23EkM4XLEjUN-nlHHH7OqC9R9yZF-KNrgz7qDAEVNY9MHcmFxO_8RRicWEzr9kPRGBpmPhx6OUUf-2UljhG_SdiETiQROOAar9"
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
                "resourcetype": "unlockProvider",
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