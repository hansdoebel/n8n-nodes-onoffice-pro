---
source: https://apidoc.onoffice.de/marketplace/get-marketplace-invoice-recipient/
title: get-marketplace-invoice-recipient
scraped: 2026-01-08T20:26:42.287Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Marketplace](https://apidoc.onoffice.de/marketplace/) &raquo; [Get marketplace invoice recipient](https://apidoc.onoffice.de/marketplace/get-marketplace-invoice-recipient/) &raquo; Get marketplace invoice recipient		

	
	
		
# Get marketplace invoice recipient
	

	

		
**Action type: **`Get`

**Resource type: **`getMarketplaceInvoiceRecipient`

Gets information about the marketplace invoice recipient. This call is used in the customer versions to read out the billing address.

Please note:

Use with parameter extendedclaim: The recipient&#8217;s invoice data can be retrieved for an unlimited period of time.

Use without parameter extendedclaim: The data of the invoice recipient can only be retrieved within 900 seconds after the transaction. After that the error 190 appears: &#8220;The time to call the transaction has expired&#8221;.

See [technical marketplace documentation](https://www.marketplacedoc.onoffice.de/api-calls/) for more information.

**Parameter:**

`transactionid`

INTEGER. MANDATORY. Transaction ID.
`userid`

INTEGER. MANDATORY. User id of the paying customer.
`extendedclaim`

STRING. Extended claim. See [here](https://apidoc.onoffice.de/marketplace/) for more information.

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "getMarketplaceInvoiceRecipient",
        "parameters": {
            "transactionid": "<ID der Transaction>",
            "userid": "<ID des zahlenden Benutzers>",
            "extendedclaim": "ctguyroHtO7_6XaBpJgwUB_npk8nGUPociZaKzYfAEYRXFR_Cv879mYelDHEEfeB754tN7HWFcQN4Aq2B-8lpBYHYEE0xeHxoJ6yRZMJjOyHdno1514ycUD0buDx0GYVLx7fgL_BEYgvz3aQgToYL05WxXQTrE23EkM4XLEjUN-nlHHH7OqC9R9yZF-KNrgz7qDAEVNY9MHcmFxO_8RRicWEzr9kPRGBpmPhx6OUUf-2UljhG_SdiETiQROOAar9"
        }
    }

```

**Response:**

`salutation`

Salutation
`firstname`

First name
`lastname`

Last name
`companyname`

Company name
`address`

Address
`zipcode`

Zip code
`city`

City
`country`

Country
`email`

Email
`companyUstId`

Sales tax id

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
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
                "resourceid": "",
                "resourcetype": "getMarketplaceInvoiceRecipient",
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
                            "elements": {
                                "salutation": "Herr",
                                "firstname": "Theo",
                                "lastname": "Test",
                                "companyname": "onOffice GmbH",
                                "address": "Charlottenburger Allee 5",
                                "zipcode": "52068",
                                "city": "Aachen",
                                "country": "Deutschland",
                                "email": "theo.test@onoffice.de",
                                "companyUstId": "123456789"
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

Possible API error codes:

184: User id is not existing or inactive (INFO: User id in the order is not the same as the transaction buying user id)

188: The user data could not be found

189: The transaction could not be found

190: The time to call the transaction has expired