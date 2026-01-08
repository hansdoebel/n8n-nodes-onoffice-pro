---
source: https://apidoc.onoffice.de/marketplace/cancel-subscription/
title: cancel-subscription
scraped: 2026-01-08T20:26:43.374Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Marketplace](https://apidoc.onoffice.de/marketplace/) &raquo; [Do Cancel subscription](https://apidoc.onoffice.de/marketplace/cancel-subscription/) &raquo; Cancel subscription		

	
	
		
# Cancel subscription
	

	

		
**Action type: **`Do`

**Resource type: **`marketplaceCancelAbo`

This call is used to inform onOffice about the cancellation of a subscription.

**Important Process Information**

 

**Cancellation Authority:** Subscriptions cannot be cancelled by the customer directly within onOffice. The intended workflow requires the customer to cancel the subscription with you (the provider). You must provide suitable means for the customer to do so (e.g., a cancellation button directly within your service).

**Your Responsibility:** You are responsible for actively transmitting the cancellation to onOffice after it has been processed in your system. Use this API call or the onOffice GUI (Marketplace partner area) to do so.

**No Automated Status Tracking:** There is no API endpoint to query if a customer has &#8220;cancelled within onOffice&#8221;, as onOffice only records a cancellation once you have proactively reported it.

**Payment Failures:** Please note that failed payments do **not** automatically trigger a cancellation in the onOffice system. You must decide whether to send a formal cancellation call in these cases.

**Best Practice: **To ensure a smooth user experience, you should provide an easy-to-use cancellation option directly within your own service&#8217;s dashboard. Once a customer triggers this option, your system should automatically forward the cancellation to onOffice using this API call to ensure that both your records and the onOffice billing/provisioning status remain synchronized.

- See [technical marketplace documentation](https://www.marketplacedoc.onoffice.de/en/payment-processing/) (Cancel subscription) for more information.

**Parameter:**

`aboid`

STRING. Subscription ID.
`cancelationDate`

DATE. Cancelation date. From this date on no more debits will be made.
`extendedclaim`

STRING. Extended claim. See [here](https://apidoc.onoffice.de/marketplace/) for more information.

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "marketplaceCancelAbo",
        "parameters": {
            "aboid": "5",
            "cancelationDate": "2019-10-05",
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
                "resourcetype": "marketplaceCancelAbo",
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

```