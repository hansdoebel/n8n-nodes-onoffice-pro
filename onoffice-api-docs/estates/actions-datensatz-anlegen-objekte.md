---
source: https://apidoc.onoffice.de/actions/datensatz-anlegen/objekte/
title: objekte
scraped: 2026-01-08T20:25:04.885Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Create Estates](https://apidoc.onoffice.de/actions/datensatz-anlegen/objekte/) &raquo; Create Estates		

	
	
		
# Create Estates
	

	

		

**Resource type: **`estate`





Creates a new estate record, if the user has the necessary rights. The parameter `data` of this action include all fields active in enterprise for estate records.


In addresses, estates and other modules you can set relations like e.g. tenant, buyer, owner, contact person, estate units etc. These relations are not queried and set via estate or address calls, but this information is queried or set via the API calls “Create, Modify, Delete and Get relations”. For more information on the relations of the multi-property module, which manages property complexes, see [here](https://apidoc.onoffice.de/multi-object-module-real-estate-investments/).







**Parameters:**








`data`
ARRAY





*`(individually)`*. The possible field names can be read out via [&#8220;Get field configuration&#8221;. ](https://apidoc.onoffice.de/actions/informationen-abfragen/feldkonfiguration/) The following fields are system fields whose values are set automatically: `erstellt_am` (created on), `erstellt_von` (created by), `provisionsbetrag` (commission amount (internal)), `summe_innenprovision` (Total listing agent&#8217;s brokerage (internal)), `summe_aussenprovision` (Total buyer&#8217;s agent brokerage (internal)).


- `benutzer`
INTEGER. Field &#8220;Betreuer&#8221; (&#8220;Support&#8221;). You need to specify the user ID to set &#8220;Betreuer&#8221;. The user id can be retrieved with the [ Read user](https://apidoc.onoffice.de/index.php/actions/datensatz-lesen/user/) call.

- `verkauft`
TINYINT(1). Value `1` sets the field `marketing status` on value `sold` or `rented`, depending on the value of the field `marketing method`.

- `reserviert`
TINYINT(1). Value `1` sets the field `marketing status` on value `reserved`.

If neither







`verkauft`




or




`reserviert`




are set,




`marketing status`




will be set to




`open`

.
- `status`
TINYINT(1). &#8220;Active / Aktiv&#8221; = 1, &#8220;Pending / Inaktiv&#8221; = 2, &#8220;Archive / Archiviert&#8221; = 0.

- `land`
country as [ISO 3166-1 alpha-3 value ](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)












**Example:**







```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:create",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "estate",
        "parameters": {
            "data": {
                "objektart": "haus",
                "nutzungsart": "wohnen",
                "vermarktungsart": "kauf",
                "objekttyp": "einfamilienhaus",
                "plz": 52068,
                "ort": "Aachen",
                "land": "DEU",
                "nebenkosten": 100,
                "heizkosten": 80,
                "mietpreis_pro_qm": 12,
                "wohnflaeche": 75,
                "anzahl_zimmer": 3,
                "anzahl_schlafzimmer": 1,
                "anzahl_badezimmer": 1,
                "breitengrad": "50.7762106",
                "laengengrad": "6.0857545",
                "heizungsart": &#x5B;
                    "zentral",
                    "fussboden"
                ],
                "stellplatzart": &#x5B;
                    "freiplatz",
                    "carport"
                ],
                "kaufpreis": 200000
            }
        }
    }
```







**Response:**








- `id`
The ID of the new estate record









```


...
"response":{
        "results":&#x5B;
            {
                "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:create",
                "resourceid":"",
                "resourcetype":"estate",
                "identifier":"",
                "data":{
                    "meta":{
                        "cntabsolute":null
                    },
                    "records":&#x5B;
                        {
                            "id":102,
                            "type":"estate",
                            "elements":&#x5B;

                            ]
                        }
                    ]
                },
                "status":{
                    "errorcode":0,
                    "message":"OK"
                }
            }
        ]
...

```


```

```