---
source: https://apidoc.onoffice.de/actions/datensatz-lesen/read-imprint/
title: read-imprint
scraped: 2026-01-08T20:26:20.213Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Settings](https://apidoc.onoffice.de/api-calls-sorted-by-module/settings/) &raquo; [Read Imprint](https://apidoc.onoffice.de/actions/datensatz-lesen/read-imprint/) &raquo; Read Imprint		

	
	
		
# Read Imprint
	

	

		
**Resource type: **`impressum`

Reads the imprint in enterprise (Extras >> Settings  >> Basic settings). If the user is a member of an office group, the imprint of the office group is retrieved (Extras >> Settings >> Groups >> Tab basic data).

The user ID can be specified as the resource ID. The imprint of this user is output. If no resource ID is specified, the imprint of the calling user is output.

**Parameter:**

`data`

ARRAY. Data. The fields you want to query. If data is not set, all fields will be returned. The following fields can be queried: `title`, `firstname`, `lastname`, `firma`, `postcode`, `city`, `street`, `housenumber`, `state`, `country`, `phone`, `mobil`, `fax`, `email`, `homepage`, `vertretungsberechtigter`, `berufsaufsichtsbehoerde`, `handelsregister`, `handelsregisterNr`, `ustId`, `bank`, `iban`, `bic`, `chamber`.
`language`

STRING. Default = user language. Language in format ISO-3166-1, e.g. DEU, ENG. If language is set, the fields &#8220;title&#8221; (Anrede) and &#8220;country&#8221; are returned in the specified language.
`formatoutput`

BOOLEAN. Default = false. If set on true, the field &#8220;country&#8221; will return the country name. If set on false, the field &#8220;country&#8221; will return the 3 letter ISO-3166-1 country code.

**Example:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
    "resourceid": "21",
    "identifier": "",
    "resourcetype": "impressum",
    "parameters": {
        "data": &#x5B;
            "title",
            "firstname",
            "lastname",
            "firma",
            "country"
        ],
        "language": "ENG",
        "formatoutput": true
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
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
                "resourceid": "21",
                "resourcetype": "impressum",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": "impressum",
                            "type": null,
                            "elements": {
                                "title": "Mr.",
                                "firstname": "Max",
                                "lastname": "Mustermann",
                                "firma": "onOffice GmbH",
                                "country": "Germany"
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