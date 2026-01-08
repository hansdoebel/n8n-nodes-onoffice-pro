---
source: https://apidoc.onoffice.de/identification-of-data-sets-via-uuid/
title: identification-of-data-sets-via-uuid
scraped: 2026-01-08T20:26:50.621Z
---

[Home](https://apidoc.onoffice.de) &raquo; [Various special topics](https://apidoc.onoffice.de/various-special-topics/) &raquo; [Identification of data sets via UUID](https://apidoc.onoffice.de/identification-of-data-sets-via-uuid/) &raquo; Identification of data sets via UUID		

	
	
		
# Identification of data sets via UUID
	

	

		
A universally unique identifier (UUID) is a 128-bit label used for information in computer systems. When generated according to the standard methods, UUIDs are, for practical purposes, unique.

Thus, anyone can create a UUID and use it to identify something with near certainty that the identifier does not duplicate one that has already been, or will be, created to identify something else.

As an alternative to the record number (`id`), data records in enterprise can also be identified, read out and further processed (e.g. in URLs or databases) via `uuid`. For addresses and estates, there is the field `uuid`, which contains one UUID per record for unique identification. The `uuid` is automatically generated when the data record is created and is then unchangeable.

External tools can use the UUIDs to retrieve address and property data records (e.g. in a URL) without the end user being able to manipulate the parameters to access other data records.

**Use case:**

The UUIDs can be queried via the API calls &#8220;Read address&#8221; and &#8220;Read estate&#8221;. In addition, the UUID field can also be filtered via API. Example: if the UUID is used for identification in an external form, the internal ID for the UUID is queried once via a filter and then worked with. Then only the UUIDs can be used as URL parameters on the form page.

**Note for &#8220;Read estate&#8221;:** to query the UUID of a foreign-language object in the filter parameter, you must enter the UUIDs of the main language (depends on the country of the customer, usually German), together with the desired language in “estatelanguage”. You will then receive the uuids of the foreign-language objects in the response as well as the data record number/ID of the object in the main language in &#8220;mainLangId&#8221; and the ID of the object in the secondary language under &#8220;id&#8221;. Filtering for a foreign-language UUID returns no results.

**Request example: reading out UUIDs via address IDs**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "address",
        "parameters": {
            "recordids": &#x5B;
                469,
                471,
                473
            ],
            "data": &#x5B;
                "uuid"
            ]
        }
    }

```

**Response example: reading out UUIDs via address IDs**

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
                        "cntabsolute": 3
                    },
                    "records": &#x5B;
                        {
                            "id": 469,
                            "type": "address",
                            "elements": {
                                "id": 469,
                                "uuid": "218506a8-df13-411a-b61b-8d0cd5215e27"
                            }
                        },
                        {
                            "id": 471,
                            "type": "address",
                            "elements": {
                                "id": 471,
                                "uuid": "a3a9741f-442c-42aa-a013-49d32f7f52e0"
                            }
                        },
                        {
                            "id": 473,
                            "type": "address",
                            "elements": {
                                "id": 473,
                                "uuid": "16edf071-97a8-4d81-b880-62e1e82f1f85"
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

**Request example: filter address IDs via UUIDs**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "address",
        "parameters": {
            "filter": {
                "uuid": &#x5B;
                    {
                        "op": "IN",
                        "val": &#x5B;
                            "a3a9741f-442c-42aa-a013-49d32f7f52e0",
                            "218506a8-df13-411a-b61b-8d0cd5215e27",
                            "16edf071-97a8-4d81-b880-62e1e82f1f85"
                        ]
                    }
                ]
            },
            "data": &#x5B;
                "uuid"
            ]
        }
    }

```

**Response example: filter address IDs via UUIDs**

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
                        "cntabsolute": 3
                    },
                    "records": &#x5B;
                        {
                            "id": 469,
                            "type": "address",
                            "elements": {
                                "id": 469,
                                "uuid": "218506a8-df13-411a-b61b-8d0cd5215e27"
                            }
                        },
                        {
                            "id": 471,
                            "type": "address",
                            "elements": {
                                "id": 471,
                                "uuid": "a3a9741f-442c-42aa-a013-49d32f7f52e0"
                            }
                        },
                        {
                            "id": 473,
                            "type": "address",
                            "elements": {
                                "id": 473,
                                "uuid": "16edf071-97a8-4d81-b880-62e1e82f1f85"
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

**Request example: reading out UUIDs via estate IDs**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "estate",
        "parameters": {
            "data": &#x5B;
                "uuid"
            ],
            "filter": {
                "Id": &#x5B;
                    {
                        "op": "IN",
                        "val": &#x5B;
                            1663,
                            1647,
                            10825
                        ]
                    }
                ]
            }
        }
    }

```

**Response example: reading out UUIDs via estate IDs**

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
                "resourcetype": "estate",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 3
                    },
                    "records": &#x5B;
                        {
                            "id": 1647,
                            "type": "estate",
                            "elements": {
                                "uuid": "31c83266-c452-43e1-9c99-5681d1cacba7"
                            }
                        },
                        {
                            "id": 1663,
                            "type": "estate",
                            "elements": {
                                "uuid": "bad1b5ce-f2a0-4ad6-8dc1-26e865f2c415"
                            }
                        },
                        {
                            "id": 10825,
                            "type": "estate",
                            "elements": {
                                "uuid": "0e053d5f-c1e9-4c5a-ae2a-a2e689556db3"
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

**Request example: filter estate IDs via UUIDs**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "estate",
        "parameters": {
            "data": &#x5B;
                "uuid"
            ],
            "filter": {
                "uuid": &#x5B;
                    {
                        "op": "IN",
                        "val": &#x5B;
                            "bad1b5ce-f2a0-4ad6-8dc1-26e865f2c415",
                            "0e053d5f-c1e9-4c5a-ae2a-a2e689556db3",
                            "31c83266-c452-43e1-9c99-5681d1cacba7"
                        ]
                    }
                ]
            }
        }
    }

```

**Response example: filter estate IDs via UUIDs**

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
                "resourcetype": "estate",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 3
                    },
                    "records": &#x5B;
                        {
                            "id": 1647,
                            "type": "estate",
                            "elements": {
                                "uuid": "31c83266-c452-43e1-9c99-5681d1cacba7"
                            }
                        },
                        {
                            "id": 1663,
                            "type": "estate",
                            "elements": {
                                "uuid": "bad1b5ce-f2a0-4ad6-8dc1-26e865f2c415"
                            }
                        },
                        {
                            "id": 10825,
                            "type": "estate",
                            "elements": {
                                "uuid": "0e053d5f-c1e9-4c5a-ae2a-a2e689556db3"
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