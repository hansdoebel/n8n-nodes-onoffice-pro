---
source: https://apidoc.onoffice.de/marketplace/generate-subsequent-payment-link/
title: generate-subsequent-payment-link
scraped: 2026-01-08T20:26:44.404Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Marketplace](https://apidoc.onoffice.de/marketplace/) &raquo; [Do Generate subsequent payment link](https://apidoc.onoffice.de/marketplace/generate-subsequent-payment-link/) &raquo; Generate subsequent payment link		

	
	
		
# Generate subsequent payment link
	

	

		
**Action type: **`Do`

**Resource type: **`subsequentPaymentLink`

Generates an subsequent payment link for the marketplace via the API. Use this call in your provider customer, not in the client customers. The current customer must be the same customer that is linked to the provider of the transaction for the call to work.

See [technical marketplace documentation](https://www.marketplacedoc.onoffice.de/api-calls/) for general information.

See [subsequent payment link ](https://www.marketplacedoc.onoffice.de/zahlungsabwicklung/#nachtraegliche-kosten) for more information on this topic.

**Parameter:**

`transactionid`

STRING. Transaction ID.
`priceNet`

STRING. Net price in the format `1100.50`.
`description`

STRING. Description.
`sendMailToCustomer`

BOOLEAN. Sends email to customer if true.

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": null,
        "resourcetype": "subsequentPaymentLink",
        "identifier": "",
        "parameters": {
            "transactionid": "1100135697",
            "priceNet": "1000.00",
            "description": "Nachzahlung 3D-Rundgang",
            "sendMailToCustomer": true
        }
    }

```

**Response parameter:**

`subsequentPaymentUrl`

STRING. URL link for the subsequent payment.
`mailToCustomerSent`

BOOLEAN. Sends email to customer if true.

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
                "resourcetype": "subsequentPaymentLink",
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
                                "result": {
                                    "subsequentPaymentUrl": "https:\/\/beta.smart.onoffice.de\/smart\/short.php?c=1c138688f89e2d24d363ed7efec5a62797f5415671ddb358bd847486126ee4da",
                                    "mailToCustomerSent": true
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