---
source: https://apidoc.onoffice.de/actions/datensatz-lesen/adressen/
title: adressen
scraped: 2026-01-08T20:25:23.879Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Addresses](https://apidoc.onoffice.de/api-calls-sorted-by-module/addresses/) &raquo; [Read Addresses](https://apidoc.onoffice.de/actions/datensatz-lesen/adressen/) &raquo; Read Addresses		

	
	
		
# Read Addresses
	

	

		
**Resource type:** `address`

Outputs information from address records.

Use the parameter `recordids` to specify the desired addresses. Without this parameter, all addresses are output.

The parameters `filterid` and `filter` can also be used to restrict the selection of addresses. With self-created filters you could output the last changed addresses for example.

All fields specified in the enterprise administration are valid here and are passed as elements of an array in the parameter `data`. Each parameter is returned with the corresponding value of the record. 

Contact details (telephone, fax, e-mail) are returned like this: „`<identifier><typ>__<id>`“.

In addresses, estates and other modules you can set relations like e.g. tenant, buyer, owner, contact person, estate units etc. These relations are not queried and set via estate or address calls, but this information is queried or set via the API calls “Create, Modify, Delete and Get relations”.

Fields of the data type &#8220;file&#8221; can also be queried by specifying the field name. A URL is then generated under which the file can be downloaded for 1 hour.

The parameters are followed by several example calls for different applications: reading out address data, reading out the addresses changed in the last 30 days via a filter, and querying the URL for the passport photo.

Note: Record number (Datensatznummer) and customer number (Kundennummer) are 2 different fields in addresses. The record number is the ID to be specified for the API.

If you want to query all records of a certain period, use the field `Aenderung` in the parameter `filter`.

In order to read the field `outlookSync`, please use [Get relations](https://apidoc.onoffice.de/actions/informationen-abfragen/relationen/) with the relation type `urn:onoffice-de-ns:smart:2.5:relationTypes:address:user:sync`.

`outlookSync` does not work with the `filter` parameter.

**Parameter:**

`data`

ARRAY

- `*(individually)*`

`phone`

all phonebook entries except with type &#8220;mobile&#8221;
`mobile`

all phone book entries with type &#8220;mobile&#8221;
`fax`

all phone book entries with type &#8220;fax&#8221;
`email`

all phone book entries with type &#8220;email&#8221;
`defaultphone`

like `phone`, but only returns the record marked as default
`defaultfax`

like fax, but only returns the record marked as default
`defaultemail`

like email, but only returns the record marked as default
`imageUrl`

image URL (pass photo) of the address.``

`recordids`

ARRAY. Address IDs. Can be used if one or more than one record should be read, but not all.
`filterid`

INTEGER. Filter ID. This parameter can also be used to restrict the selection of address data records via address filters created in enterprise. The filter IDs of your created filters can be read out via the API call [Filter](http://apidoc.onoffice.de/index.php/actions/informationen-abfragen/filter/). Further information on filters can be found in our [online help](https://de.enterprisehilfe.onoffice.com/help_entries/adressfilter/).
`filter`

OBJECT. Key: field, value: array of objects with filter expressions in the format `"status": [{"op": "=", "val": 1}]`. With `op` you specify the operator. Possible values for `op` are the following SQL operators:

```
is or =, >, <, >=, <=, != or <>, between, like, not like, in, not in
```

For the operator `like` the value % can be specified as a placeholder.

With `val` you specify the value which should be applied to the filtering. The individual filter expressions are linked with the AND operation. See first example how to apply multiple filters together and what is the correct array notation for operators like IN, BETWEEN etc.

Filtering by `Email` or `Telefon1` only searches the main number or main email address. If all email addresses or numbers are to be searched, use `phone`, `email` or `fax`.

`listlimit`

INTEGER. Maximum number of addresses in the list. Default value: 20, Maximum: 500.
`listoffset`

INTEGER. Offset of the list, that means from which data record onwards the list should be output.
`sortby`

STRING. Field to sort by.
`sortorder`

STRING. Possible values: `ASC` or `DESC`. Ascending or descending.
`formatoutput`

BOOLEAN. Default = false. Enable formatted output. If set to true, the contents of the single- and multi-select fields (column content in the enterprise administration on tabs singleselect und multiselect) instead of the field (column field in the administration on tabs singleselect und multiselect) are outputted. With formatoutput false, multiselect values are seperated with pipes.

Fields that represent, for example, prices, areas, quantities, are also returned with the corresponding unit (€, qm² etc). Price and area fields then respect the formatting set under &#8220;Extras >> Settings >> Basic settings >> Generel >> Representation of numerical values&#8221;.
`outputlanguage`

STRING. Output language. E.g. the contents of the single- and multi-select fields are output in the specified language. Parameter `formatoutput` must be set to true.
`countryIsoCodeType`

STRING. Works in combination with the field `Land` (country). The parameter `countryIsoCodeType` causes the output of the field `Land` to be displayed in ISO-3166-2 or ISO-3166-3. Valid values are `ISO-3166-2` and `ISO-3166-3`. If the parameter is not set or the value of the parameter invalid, the country is displayed in full text.
`addMobileUrl`

BOOLEAN. If true, the `mobileUrl` parameter is output in the response, the link to the mobile version record.

**1st example: Read address data**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "address",
        "parameters": {
            "data": &#x5B;
                "Briefanrede",
                "Vorname",
                "Name",
                "Land",
                "Ort",
                "Plz",
                "Strasse"
            ],
            "filter": {
                "Vorname": &#x5B;
                    {
                        "op": "IN",
                        "val": &#x5B;
                            "Max",
                            "Moritz"
                        ]
                    }
                ],
                "letzter_Kontakt": &#x5B;
                    {
                        "op": "BETWEEN",
                        "val": &#x5B;
                            "2020-01-01 00:00:00",
                            "2021-04-01 15:00:00"
                        ]
                    }
                ]
            },
            "sortby": "Strasse",
            "sortorder": "DESC"
        }
    }

```

**Response: Read address data**

- `*(individuell)*`

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
                "resourceid": "",
                "resourcetype": "address",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 2
                    },
                    "records": &#x5B;
                        {
                            "id": 10505,
                            "type": "address",
                            "elements": {
                                "id": 10505,
                                "Briefanrede": "Sehr geehrter Herr Mustermann,",
                                "Vorname": "Max",
                                "Name": "Mustermann",
                                "Land": "Deutschland",
                                "Ort": "Musterstadt",
                                "Plz": "123456",
                                "Strasse": "Musterrstra\u00dfe"
                            }
                        },
                        {
                            "id": 10509,
                            "type": "address",
                            "elements": {
                                "id": 10509,
                                "Briefanrede": "Sehr geehrter Herr Mustermann,",
                                "Vorname": "Moritz",
                                "Name": "Mustermax",
                                "Land": "Deutschland",
                                "Ort": "Musterhausen",
                                "Plz": "50000",
                                "Strasse": "Mustergasse"
                            }
                        },
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

**2nd example: Read phone, fax and email**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "address",
        "parameters": {
            "recordids": &#x5B;
                10891
            ],
            "data": &#x5B;
                "phone",
                "fax",
                "email"
            ]
        }
    }

```

**Response: Read phone, fax and mail**

- `*(individuell)*`

If the fields `defaultphone`, `defaultemail` or `defaultfax` have been requested, they will also be output separately in the same notation. The comment is also output in a separate line.

```

                    "records": &#x5B;
                        {
                            "id": 10891,
                            "type": "address",
                            "elements": {
                                "id": 10891,
                                "phone__13021": "024124561",
                                "phone__13021__Comment": "Telefonbemerkung",
                                "fax__13023": "0221156498",
                                "fax__13023__Comment": "Faxbemerkung",
                                "email__13027": "max.mustermann1@my-onoffice.de",
                                "email__13027__Comment": "Mailbemerkung"
                            }
                        }
                    ]

```

**3rd example: Read out the addresses changed in the last 30 days via the filter**

```

    {
        "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid":"",
        "identifier":"",
        "resourcetype":"address",
        "parameters":{
            "filterid":102,
            "data":&#x5B;
                "Briefanrede",
                "Vorname",
                "Name",
                "Strasse",
                "Plz",
                "Ort",
                "Land",
                "Email"
            ]
        }
    }

```

The expression used in the filter is:` ((`adressen`.`Status` = '1' AND `adressen`.`Aenderung` >= DATE_SUB(NOW(), INTERVAL 30 DAY) AND `adressen`.`Aenderung` <= NOW()) AND `adressen`.`Aenderung` >= DATE_SUB(NOW(), INTERVAL 30 DAY) AND `adressen`.`Aenderung` <= NOW() )`

**4th example: Query the URL to the passport photo (top left in an address record)**

```

    {
        "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid":"",
        "identifier":"",
        "resourcetype":"address",
        "parameters":{
            "recordids":&#x5B;32],
            "data":&#x5B;
                "Name",
                "Vorname",
                "imageUrl"
            ]
        }
    }

```