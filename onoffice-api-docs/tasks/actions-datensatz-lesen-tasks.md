---
source: https://apidoc.onoffice.de/actions/datensatz-lesen/tasks/
title: tasks
scraped: 2026-01-08T20:25:57.061Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Tasks](https://apidoc.onoffice.de/api-calls-sorted-by-module/tasks/) &raquo; [Read Tasks](https://apidoc.onoffice.de/actions/datensatz-lesen/tasks/) &raquo; Read Tasks		

	
	
		
# Read Tasks
	

	

		

**Resource type:**` task`


Returns a list of tasks.
You can use the parameter `filter` to specify the filter expression directly in the API call. Or specify a task ID as resource ID, if only one task should be read out.


**Parameters:**



- `data`
ARRAY of fields that you want to read. List of available fields: `Eintragsdatum, modified, von, Deadline, Prio, Aufgabe, Verantwortung, Art, Status, Betreff, Bearbeiter, Beginnt_am, Aufwand_Soll_NUM, Einheit_Aufwand_Soll, Aufwand_Zusatz_NUM, Einheit_Aufwand_Zusatz, erledigt, publicDescription, Stand, Deadline_strikt, Deadline_Zeit, Beginnt_um, Austragsdatum, Erinnerung, Erinnerungsdatum, Erinnerungsdatum_Zeit, Privat, Verantwortung_Gruppe, Kommentar.`
 See [Create tasks](https://apidoc.onoffice.de/index.php/actions/datensatz-anlegen/tasks/) for more information on the fields.
`filter`
OBJECT. Key: field, value: array of objects with filter expressions in the format `"status": [{"op": "=", "val": 1}]`. With `op` you specify the operator. Possible values for `op` are the following SQL operators:

```
is or =, >, <, >=, <=, != or <>, between, like, not like, in, not in
```


For the operator `like` the value % can be specified as a placeholder.

With `val` you specify the value which should be applied to the filtering. The individual filter expressions are linked with the AND operation. 

Additionally, you can query `Nr` in the filter. This is the ID of the task, and appears as `id` in the response. Querying `Nr` in data is not possible.
 See also the example below.



- `listlimit`
INTEGER. Maximum number of tasks in the list. Maximum: 500.


 	`relatedAddressId`

INTEGER. Address IDs linked with the task. Syntax: &#8220;relatedAddressId&#8221;:1,
 	`relatedEstateId`

INTEGER. Estate ID with linked with the task. Syntax: &#8220;relatedEstateId&#8221;:1,
 	`relatedProjectIds`

INTEGER. Project IDs linked with the task.
 	`responsibilityByGroup`

BOOLEAN. Flag, if a group is responsible for the task. Can be `0` or `1`. Syntax: `responsibilityByGroup":""`
 	`addMobileUrl`

BOOLEAN. If true, the `mobileUrl` parameter is output in the response, the link to the mobile version record.
 	`showEfforts`

BOOLEAN. If true, the parameter `efforts` is output in the response. The parameter outputs the values &#8220;Aufwand offen / Remaining workload&#8221;, &#8220;Ist Aufwand / Actual effort&#8221; and the processing time of the individual users as an object. The time is formatted as a time span according to ISO 8601 (hour/minute/second). See 3rd example.



**1st example: read out all tasks with entry date > 2019-03-01 00:00**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "task",
    "parameters": {
        "data": &#x5B;
            "Betreff",
            "Aufgabe"
        ],
        "relatedAddressId": 1,
        "relatedProjectIds": 1,
        "relatedEstateId": 1,
        "filter": {
            "Eintragsdatum": &#x5B;
                {
                    "op": ">",
                    "val": "2019-03-01 00:00"
                }
            ]
        }
    }
}

```



**2nd example: read out a single task via task ID**


```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
    "resourceid": "451",
    "identifier": "",
    "resourcetype": "task",
    "parameters": {
        "data": &#x5B;
            "Betreff",
            "Aufgabe"
        ],
        "relatedAddressId": 1,
        "relatedEstateId": 1
    }
}

```



**Response 2nd example: read out a single task via task ID**


```

    "response": {
        "results": &#x5B;
            {
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
                "resourceid": "451",
                "resourcetype": "task",
                "cacheable": false,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 1
                    },
                    "records": &#x5B;
                        {
                            "id": 451,
                            "type": "task",
                            "elements": {
                                "Betreff": "Besichtigungstermin Max Mustermann",
                                "Aufgabe": "Um 11:00 am 03.10.2018 Besichtigungstermin bei Max Mustermann durchf\u00fchren.",
                                "relatedAddressId": &#x5B;
                                    "247"
                                ],
                                "relatedEstateId": &#x5B;
                                    "459"
                                ]
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

```



**3rd example: read out the actual efforts and remaining workload of a task**


```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
    "resourceid": "19",
    "identifier": "",
    "resourcetype": "task",
    "parameters": {
        "data": &#x5B;
            "Betreff",
            "Aufgabe"
        ],
      "showEfforts":true
    }
}

```



**Response 3rd example: read out the actual efforts and remaining workload of a task**


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
        "resourceid": "19",
        "resourcetype": "task",
        "cacheable": false,
        "identifier": "",
        "data": {
          "meta": {
            "cntabsolute": 1
          },
          "records": &#x5B;
            {
              "id": 19,
              "type": "task",
              "elements": {
                "Betreff": "",
                "Aufgabe": "543453",
                "efforts": {
                  "remaining": "PT5H40M0S",
                  "actual": "PT1H19M0S",
                  "users": &#x5B;
                    {
                      "id": "1",
                      "individual": "PT1H8M0S"
                    },
                    {
                      "id": "3",
                      "individual": "PT0H11M0S"
                    }
                  ]
                }
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