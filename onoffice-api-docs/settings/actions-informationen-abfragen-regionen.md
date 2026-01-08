---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/regionen/
title: regionen
scraped: 2026-01-08T20:26:29.712Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Settings](https://apidoc.onoffice.de/api-calls-sorted-by-module/settings/) &raquo; [Get Regions](https://apidoc.onoffice.de/actions/informationen-abfragen/regionen/) &raquo; Get Regions		

	
	
		
# Get Regions
	

	

		
**Resource type:**`regions`

In order for a geographical assignment of prospective buyer and estate is possible, often the details of the place and postcode are not sufficient. onOffice works here with &#8220;regional additions/regionalen Zusätzen&#8221;.

With this API call these regions can be retrieved. If a parent region is inactive, active child regions are not listed.

**Parameters:**

`language`

		language

**Example:**

```

{
        "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid":"",
        "identifier":"",
        "resourcetype":"regions",
        "parameters":
        {
            "language":"DEU"
        }
}

```

**Response:**

`regions`

		Regions and subregions together with related information

**Example response:**

```

...
"id": "Verkaufsgebiet C",
"type": "",
"elements": {
        "id": "Verkaufsgebiet C",
        "name": "Rheinland",
        "description": "Rheinland",
        "postalcodes": &#x5B;
                &#x5B;
                        "52000",
                        "53000"
                ]
        ],
        "state": "NRW",
        "country": "Deutschland",
        "children": {
                "indMulti1274Select5431": {
                "id": "indMulti1274Select5431",
                "name": "Aachen",
                "description": null,
                "postalcodes": &#x5B;
                        &#x5B;
                                "52060",
                                "52074"
                        ]
                ],
                "state": "Nordrhein-Westfalen",
                "country": "Deutschland",
                "children": &#x5B;]
        },
                "indMulti1274Select5437": {
                 "id": "indMulti1274Select5437",
                "name": "Koeln",
                "description": null,
                "postalcodes": &#x5B;
                        &#x5B;
                                "50650",
                                "51150"
                        ]
                ],
                "state": "Nordrhein-Westfalen",
                "country": "Deutschland",
                "children": {
                        "indMulti1274Select5440": {
                                "id": "indMulti1274Select5440",
                                "name": "Chorweiler",
                                "description": "Chorweiler ist ein noerdlicher Stadtbezirk von Koeln",
                                "postalcodes": &#x5B;
                                        "50765"
                                ],
                                "state": "Nordrhein-Westfalen",
                                "country": "Deutschland",
                                "children": &#x5B;]
                        },
                        "indMulti1274Select5438": {
                                "id": "indMulti1274Select5438",
                                "name": "Nippes",
                                "description": "Nippes ist der Stadtbezirk 5 von Koeln",
                                "postalcodes": &#x5B;
                                        "50733"
                                ],
                                "state": "Nordrhein-Westfalen",
                                "country": "Deutschland",
                                "children": &#x5B;]
                        }
                }
        }
}                            
...

```