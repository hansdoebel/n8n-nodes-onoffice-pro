---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/selling-price-offer/
title: selling-price-offer
scraped: 2026-01-08T20:25:14.462Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Get Selling price offer](https://apidoc.onoffice.de/actions/informationen-abfragen/selling-price-offer/) &raquo; Get Selling price offer		

	
	
		
# Get Selling price offer
	

	

		
**Resource type:** `priceOffer`

With this API call, the field &#8220;Purchase price offer&#8221; of the [property search](https://de.enterprisehilfebeta.onoffice.com/help_entries/general-instructions/immo-search/?lang=en) can be read out from &#8220;Properties >> Tab Prospects&#8221; or &#8220;Contacs >> Tab Property search&#8221;.

**Parameters:**

`estateId`

INTEGER. MANDATORY.
`addressId`

INTEGER. MANDATORY.

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "priceOffer",
        "parameters": {
            "estateId": 1021,
            "addressId": 6101
        }
    }

```

**Response:**

`priceOffer`

Purchase price offer of the interested party for the property with currency unit.

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
                "resourcetype": "priceOffer",
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
                                "priceOffer": "350.000,00 \u20ac"
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