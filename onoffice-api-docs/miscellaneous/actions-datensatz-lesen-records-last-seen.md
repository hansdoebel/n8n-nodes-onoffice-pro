---
source: https://apidoc.onoffice.de/actions/datensatz-lesen/records-last-seen/
title: records-last-seen
scraped: 2026-01-08T20:26:34.058Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Miscellaneous](https://apidoc.onoffice.de/api-calls-sorted-by-module/miscellaneous/) &raquo; [Read Records last seen](https://apidoc.onoffice.de/actions/datensatz-lesen/records-last-seen/) &raquo; Read Records last seen		

	
	
		
# Read Records last seen
	

	

		
**Resource:** `recordsLastSeen`

This API call can be used to query the number of recently viewed records. In enterprise this is the view &#8220;Last opened datasets&#8221; via the star.

The call returns the number of records under `cntabsolute` and the IDs of the records in `records` array.

The maximum number of records is 1000, as in enterprise, where the number of records displayed is reduced to the 1000 most recent records every night per module.

As with other read calls, restrictions can be made via the `filter` parameter.

**Parameters:**

`module`

STRING. MANDATORY. Possible values: `address`, `estate`, `task`, `email`
`listlimit`

INTEGER. MANDATORY. If the parameter `listlimit` is 0, only the number of data records is output in the response as `cntabsolute`.
`user`

INTEGER. User ID for the user whose data records are to be queried. In order to be able to query other users for the parameter `user`, the user right &#8220;Last opened datasets&#8221; under &#8220;Logging/Statistics&#8221; must be set accordingly. If user is not specified, the data sets of the logged-in user are delivered.
`filter`

OBJECT. For the filter `date` can be specified to limit the time period of the records last seen. `date` is a DATETIME, the exact time can be given with seconds. If no time is set, 00:00:00 is added. For the query of time periods use the operator `BETWEEN`. Some operators do not give meaningful results. See example below for usage.

You can also filter by the fields of the modules. For addresses and estates all fields specified in the enterprise administration are valid here. For tasks, the field names can be looked up [here](https://apidoc.onoffice.de/actions/datensatz-lesen/tasks/). Email fields cannot be filtered, only the date for emails.

Key: field, value: array of objects with filter expressions in the format `"date": [{"op": "BETWEEN", "val": ["2010-01-01 00:00:00","2022-04-01 15:00:00"]}]`. With `op` you specify the operator. Possible values for `op` are the following SQL operators:

```
is or =, >, <, >=, <=, != or <>, between, like, not like, in, not in
```

For the operator `like` the value % can be specified as a placeholder.

With `val` you specify the value which should be applied to the filtering. The individual filter expressions are linked with the AND operation.

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "recordsLastSeen",
        "parameters": {
            "user": 17,
            "listlimit": 5,
            "module": "estate",
            "filter": {
                "date": &#x5B;
                    {
                        "op": "BETWEEN",
                        "val": &#x5B;
                            "2024-01-01 00:00:00",
                            "2024-09-01 00:00:00"
                        ]
                    }
                ]
            }
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
                "resourceid": "",
                "resourcetype": "recordsLastSeen",
                "cacheable": false,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 5
                    },
                    "records": &#x5B;
                        {
                            "id": 27,
                            "type": "lastSeen",
                            "elements": {
                                "id": "27"
                            }
                        },
                        {
                            "id": 51,
                            "type": "lastSeen",
                            "elements": {
                                "id": "51"
                            }
                        },
                        {
                            "id": 53,
                            "type": "lastSeen",
                            "elements": {
                                "id": "53"
                            }
                        },
                        {
                            "id": 35,
                            "type": "lastSeen",
                            "elements": {
                                "id": "35"
                            }
                        },
                        {
                            "id": 31,
                            "type": "lastSeen",
                            "elements": {
                                "id": "31"
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