---
source: https://apidoc.onoffice.de/actions/aktionen-ausfuehren/selling-price-offer/
title: selling-price-offer
scraped: 2026-01-08T20:25:15.486Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Do Selling price offer](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/selling-price-offer/) &raquo; Do Selling price offer		

	
	
		
# Do Selling price offer
	

	

		
**Resource type:** `priceOffer`

With this API call, the field &#8220;Purchase price offer&#8221; from &#8220;Properties >> Tab Prospects&#8221; and &#8220;Contacs >> Tab Property search&#8221; of the [property search](https://de.enterprisehilfebeta.onoffice.com/help_entries/general-instructions/immo-search/?lang=en) can be set.

By writing a purchase price offer, the [advisory level](https://de.enterprisehilfebeta.onoffice.com/help_entries/detailed-address-view/immo-search-overview/immo-search-details/?lang=en#Advisory_level) is set to &#8220;C &#8211; in intensive communication&#8221; if it was lower than C before.

To be able to write the data, write rights on address and property are necessary.

If there is no entry for an address and property pair, the API call creates an entry on the &#8220;Properties >> Offered till now&#8221; tab.

No activity is written by the action. If you want to write an activity for this action, please use the additional API call &#8220;[Create activities](https://apidoc.onoffice.de/actions/datensatz-anlegen/maklerbuch-aktivitaeten/)&#8221; with the action type &#8220;Kaufpreisangebot&#8221; (selling price offer).

**Parameters:**

`estateId`

INTEGER. MANDATORY.
`addressId`

INTEGER. MANDATORY.
`priceOffer`

DECIMAL. MANDATORY. Purchase price offer of the interested party for the property without currency unit. The currency unit is automatically determined by the currency of the property.

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "priceOffer",
        "parameters": {
            "estateId": 1061,
            "addressId": 6103,
            "priceOffer": 350000
        }
    }

```

**Response: success, if successful**

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
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
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