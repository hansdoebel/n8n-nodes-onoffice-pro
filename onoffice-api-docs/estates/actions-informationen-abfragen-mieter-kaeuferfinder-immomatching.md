---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/mieter-kaeuferfinder-immomatching/
title: mieter-kaeuferfinder-immomatching
scraped: 2026-01-08T20:25:20.686Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Get Tenant / Buyer seeker (Immomatching)](https://apidoc.onoffice.de/actions/informationen-abfragen/mieter-kaeuferfinder-immomatching/) &raquo; Get Tenant / Buyer seeker (Immomatching)		

	
	
		
# Get Tenant / Buyer seeker (Immomatching)
	

	

		
**Resource type:**` qualifiedsuitors`

Find suitable tenants / buyers based on estate data.

**Parameters:**

`estatedata`

		JSON object with arbitrary object data (search criteria). The key corresponds to the field name, the value to the searched criterion. Example: `{"plz": "52074","ort":"Aachen"}`. The comma-separated values form an OR operation. Regional addition (regionaler Zusatz) and other single-select fields cannot be specified as an array, only 1 value can be specified as a string.

**Example:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "qualifiedsuitors",
    "parameters": {
        "estatedata": {
            "plz": "52074",
            "ort": "Aachen"
        }
    }
}

```

**Response:**

`id`

		KdNr of the respective address data record
`percentage`

		Hit rate of the most appropriate search criterion in percent
`deviated`

		List of deviated search criteria fields
`searchcriteria`

		ID of the most appropriate search criterion

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
                "resourcetype": "qualifiedsuitors",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 2
                    },
                    "records": &#x5B;
                        {
                            "id": 191,
                            "type": "",
                            "elements": {
                                "percentage": 100,
                                "deviated": &#x5B;
                                    &#x5B;]
                                ],
                                "searchcriteria": 521
                            }
                        },
                        {
                            "id": 18446077777783,
                            "type": "",
                            "elements": {
                                "percentage": 50,
                                "deviated": &#x5B;
                                    {
                                        "strasse": 0
                                    }
                                ],
                                "searchcriteria": 517
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