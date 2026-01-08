---
source: https://apidoc.onoffice.de/actions/datensatz-lesen/kalender-termin/
title: kalender-termin
scraped: 2026-01-08T20:25:47.667Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Appointments](https://apidoc.onoffice.de/api-calls-sorted-by-module/appointments/) &raquo; [Read Appointments (deprecated)](https://apidoc.onoffice.de/actions/datensatz-lesen/kalender-termin/) &raquo; Read Appointments (deprecated)		

	
	
		
# Read Appointments (deprecated)
	

	

		
**Resource type:** `calendar`

Note: This API call is obsolete. We recommend using the new call for [reading appointments](https://apidoc.onoffice.de/actions/informationen-abfragen/get-appointments-list/).

Appointments can be read out with this API call. Reads the database fields from appointment records.

If you specify the resource ID of the appointment, the data of the appointment is returned.

If no resource ID is specified, the data of the appointments of a specific period can be requested via the parameters `datestart` and `dateend`. It will return the appointments of the logged-in user and his groups, when the parameters `users` and `groups` aren&#8217;t specified.

**NOTE:** The participants in the appointment are taken into account when using the parameters `users` or `groups`, but not the appointment creator (`von`) himself if he is not a participant in the appointment. With the parameter `filter` with value `von` you can read out all appointments created by a user.

The user rights on appointments set in enterprise are respected. When queried by ID, more information is returned in the response.

The maximum number of appointments that can be queried at one time is 500. To avoid this restriction, please query smaller periods of time in which there are less than 500 appointments.

**Parameters:**

`datestart`

STRING. Start date of the time interval for the requested appointments, the time part is ignored. All participants in the appointment are taken into account, but not the appointment creator himself if he is not a participant in the appointment. With the parameter `filter` with value `von` you can read out all appointments created by a user.
`dateend`

STRING. End date of the time interval for the requested appointments, the time part is ignored. All participants in the appointment are taken into account, but not the appointment creator himself if he is not a participant in the appointment. With the parameter `filter` with value `von` you can read out all appointments created by a user.
`modifiedstart`

STRING. Earliest date of last edit for requested appointments. Can be used alone or in combination with `modifiedend`. Will be ignored if used together with `datestart` and `dateend`.The response parameter for the time stamp `modified` is stored internally in UTC in enterprise, i.e. independent of the local time. You should convert your local time to UTC when querying `modifiedstart` and `modifiedend` and then perform the request with UTC time if you refer to the value of `modified`. There are conversion options for this in `PHP` and other programming languages.
`modifiedend`

STRING. Latest date of last edit for requested appointments. Can be used alone or in combination with `modifiedstart`. Will be ignored if used together with `datestart` and `dateend`.
`showcancelled`

BOOLEAN. Default: `false`. Flag if cancelled appointments should be requested.
`showConfirmationStatus`

BOOLEAN. Default: `false`. If `true`, the overall confirmation status of the appointment is listed as response parameter `confirmationStatus`. Also outputs the response parameter `addresses`, which lists all addresses with ID and their appointment confirmation statuses.
`users`

ARRAY. User IDs. Specify here the appointments of which users you want to read out. Works only in combination with the parameters `datestart` and `dateend`.
`groups`

ARRAY. Group IDs. Specify here the appointments of which groups you want to read out. Works only in combination with the parameters `datestart` and `dateend`.
`allusers`

BOOLEAN. Flag for reading out all data. If set on `true`, the parameters `users` and `groups` will be ignored. Default: `false`.

If you want to read out appointments that do not have a user linked, you must also set `allusers` to `true`.
`showConflicts`

BOOLEAN. Default: `false`. If `true`, the parameter `hints` is shown in the response. `hints` returns information on the different overlaps for users, resources, addresses and properties.
`filter`

OBJECT. Key: field, value: array of objects with filter expressions in the format `"art": [{"op": "=", "val": "Besichtigung"}]`. With `op` you specify the operator. Possible values for `op` are the following SQL operators:

```
is or =, >, <, >=, <=, != or <>, between, like, not like, in, not in
```

For the operator `like` the value % can be specified as a placeholder.

With `val` you specify the value which should be applied to the filtering. The individual filter expressions are linked with the AND operation.

Multiple values for operators like IN are specified in comma separated array notation.

`"art": [{"op": "IN","val": ["Besichtigung","Notartermin"]}],`

The filter works for the fields `start_dt` (Starting on), `end_dt` (Ends on), `rp_flag` (Flag for serial appointment), `description` (Subject), `von` (Creator), `erledigt` (Done), `note` (Notes), `art` (Type of appointment).

The values for appointment type can be looked up under &#8220;Extras >> Settings >> Administration >> Input Fields, Module: Calender management&#8221;.

See also the example below.

**Response:**

- `*(individually)*`

- `ressources`. German labels of the resources of the appointment.

- `ressourcesWithKeys`. Keys (column field in the administration) and translated labels (column content in the administration) of the resources of the appointment.

- `users`. ARRAY of OBJECTS. The users who have been explicitly added to an appointment. If the user is a participant in the appointment via his group, he is listed under `user_ids`. The following data of the user are output: `id`, `username`, `firstName`, `lastName`, `email`.

- `user_ids`. ARRAY. IDs of all participants of the appointment, regardless of whether they were explicitly added to the appointment as a user or via their group.

- `addresses`. Is only output if request parameter `showConfirmationStatus` is set to `true`. Lists all addresses with ID and their appointment confirmation statuses. Possible values: `canceled`, `confirmed`, `sent`, `not-set`.

- `confirmationStatus`. Is only output if request parameter `showConfirmationStatus` is set to `true`. Shows the overall confirmation status of the appointment. Depends on the status of the appointment confirmations of the addresses. Possible values: `canceled`, `confirmed`, `confirmed and canceled`, `not-set`, `sent`.

- `status`. Appointment status (Terminstatus). Possible values: `active`, `completed`, `canceled`, `participantsAvailable`.

- `hints`. OBJECT. Is only shown if request parameter `showConflicts` is true. Hints will only be output if exactly one individual appointment is queried (i.e. `resourceid` is specified). Returns information on the different overlaps for users, resources, addresses and properties (Terminüberschneidungen). The IDs of the affected data records are returned for the various overlaps. Please note: No hints are issued for serial appointments and private appointments.

**Example: Read appointment by resource ID**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid": "407",
        "identifier": "",
        "resourcetype": "calendar",
        "parameters": &#x5B;]
    }

```

**Response example: Read appointment by resource ID**

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
                "resourceid": "407",
                "resourcetype": "calendar",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 1
                    },
                    "records": &#x5B;
                        {
                            "id": 407,
                            "type": "calendar",
                            "elements": {
                                "start_dt": "2023-10-22 13:30:00",
                                "end_dt": "2023-10-22 14:00:00",
                                "description": "Kundenbesuch",
                                "note": "Notiz",
                                "ort": "Beisenweg, 54646 , Deutschland",
                                "art": {
                                    "Besuch des Kunden im Beratungsb\u00fcro": "Besuch des Kunden im Beratungsb\u00fcro"
                                },
                                "fuer": &#x5B;
                                    "Tester, onOffice (A)",
                                    "Tester, onOffice (B)"
                                ],
                                "groups": &#x5B;],
                                "emails": {
                                    "A": "tester1@onoffice.de",
                                    "B": "tester2@onoffice.de"
                                },
                                "user_ids": &#x5B;
                                    53,
                                    55
                                ],
                                "ressources": &#x5B;
                                    "Konferenzraum"
                                ],
                                "ressourcesWithKeys": {
                                    "Konferenzraum": "Konferenzraum"
                                },
                                "erinnerung": "15 minutes",
                                "ganztags": false,
                                "rp_flag": false,
                                "abgesagt": false,
                                "status": "active",
                                "assignedaddressids": &#x5B;
                                    4499,
                                    199,
                                    261
                                ],
                                "assignedobjectids": &#x5B;],
                                "rp_type": "",
                                "rp_tage": 0,
                                "rp_beginn_datum": "0000-00-00",
                                "rp_ende_datum": "0000-00-00",
                                "rp_ende_status": "0",
                                "allowTransitTime": false,
                                "transitTime": null,
                                "transitTimePre": "00:00:00",
                                "transitTimePost": "00:00:00",
                                "rp_exception": &#x5B;],
                                "ProjektNr": null,
                                "von": "robert",
                                "private": "0",
                                "modified": "2023-10-19 09:54:57",
                                "users": &#x5B;
                                    {
                                        "id": "53",
                                        "username": "A",
                                        "firstName": "onOffice",
                                        "lastName": "Tester",
                                        "email": "tester1@onoffice.de"
                                    },
                                    {
                                        "id": "55",
                                        "username": "B",
                                        "firstName": "onOffice",
                                        "lastName": "Tester",
                                        "email": "tester2@onoffice.de"
                                    }
                                ],
                                "hints": {
                                  "conflictedUsers": &#x5B;
                                    {
                                      "id": 19
                                    }
                                  ],
                                  "conflictedResources": &#x5B;],
                                  "conflictedAddresses": &#x5B;],
                                  "conflictedEstates": &#x5B;]
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

**Example: Reading out the appointments of a period**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "calendar",
        "parameters": {
            "datestart": "2021-01-01 01:00:00",
            "dateend": "2021-02-03 01:00:00",
            "filter": {
                "art": &#x5B;
                    {
                        "op": "IN",
                        "val": &#x5B;
                            "Besichtigung",
                            "Notartermin"
                        ]
                    }
                ]
            },
            "showcancelled": true,
            "showConfirmationStatus": true,
            "users": &#x5B;
                53
            ]
        }
    }

```

**Response: Reading out the appointments of a period**

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
                "resourcetype": "calendar",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 2
                    },
                    "records": &#x5B;
                        {
                            "id": 439,
                            "type": "calendar",
                            "elements": {
                                "start_dt": "2021-02-01 11:00:00",
                                "end_dt": "2021-02-01 11:30:00",
                                "description": "Besichtung",
                                "note": "Notiz",
                                "ort": "Charlottenburger Allee 200, 52064 Aachen, Deutschland",
                                "art": {
                                    "Besichtigung": "Besichtigung"
                                },
                                "fuer": &#x5B;
                                    "Tester, onOffice (aaaaaaaaaaaa)"
                                ],
                                "groups": &#x5B;],
                                "emails": {
                                    "aaaaaaaaaaaa": "r.igelmjjund@onoffice.de"
                                },
                                "user_ids": &#x5B;
                                    53
                                ],
                                "ressources": &#x5B;],
                                "ressourcesWithKeys": &#x5B;],
                                "erinnerung": "",
                                "ganztags": false,
                                "rp_flag": false,
                                "abgesagt": false,
                                "status": "active",
                                "assignedaddressids": &#x5B;
                                    195
                                ],
                                "confirmationStatus": "not-set",
                                "addresses": &#x5B;
                                    {
                                        "id": 195,
                                        "confirmationStatus": "not-set"
                                    }
                                ],
                                "assignedobjectids": &#x5B;
                                    29
                                ],
                                "rp_type": "",
                                "rp_tage": 0,
                                "rp_beginn_datum": "0000-00-00",
                                "rp_ende_datum": "0000-00-00",
                                "rp_ende_status": "0",
                                "allowTransitTime": false,
                                "transitTime": null,
                                "transitTimePre": "00:00:00",
                                "transitTimePost": "00:00:00",
                                "rp_exception": &#x5B;],
                                "ProjektNr": null,
                                "von": "robert",
                                "private": "0",
                                "modified": "2023-10-19 10:12:16",
                                "users": &#x5B;
                                    {
                                        "id": "53",
                                        "username": "aaaaaaaaaaaa",
                                        "firstName": "onOffice",
                                        "lastName": "Tester",
                                        "email": "r.igelmjjund@onoffice.de"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 441,
                            "type": "calendar",
                            "elements": {
                                "start_dt": "2021-02-01 13:00:00",
                                "end_dt": "2021-02-01 13:30:00",
                                "description": "Vertragsabschluss",
                                "note": "",
                                "ort": ", Deutschland",
                                "art": {
                                    "Notartermin": "Notartermin"
                                },
                                "fuer": &#x5B;
                                    "Tester, onOffice (aaaaaaaaaaaa)"
                                ],
                                "groups": &#x5B;],
                                "emails": {
                                    "aaaaaaaaaaaa": "r.igelmjjund@onoffice.de"
                                },
                                "user_ids": &#x5B;
                                    53
                                ],
                                "ressources": &#x5B;],
                                "ressourcesWithKeys": &#x5B;],
                                "erinnerung": "",
                                "ganztags": false,
                                "rp_flag": false,
                                "abgesagt": false,
                                "assignedaddressids": &#x5B;
                                    305
                                ],
                                "confirmationStatus": "not-set",
                                "addresses": &#x5B;
                                    {
                                        "id": 305,
                                        "confirmationStatus": "not-set"
                                    }
                                ],
                                "assignedobjectids": &#x5B;],
                                "rp_type": "",
                                "rp_tage": 0,
                                "rp_beginn_datum": "0000-00-00",
                                "rp_ende_datum": "0000-00-00",
                                "rp_ende_status": "0",
                                "allowTransitTime": false,
                                "transitTime": null,
                                "transitTimePre": "00:00:00",
                                "transitTimePost": "00:00:00",
                                "rp_exception": &#x5B;],
                                "ProjektNr": null,
                                "von": "robert",
                                "private": "0",
                                "modified": "2023-10-19 10:13:21",
                                "users": &#x5B;
                                    {
                                        "id": "53",
                                        "username": "aaaaaaaaaaaa",
                                        "firstName": "onOffice",
                                        "lastName": "Tester",
                                        "email": "r.igelmjjund@onoffice.de"
                                    }
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
}

```

**Example: Reading out appointments edited in a period**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "calendar",
        "parameters": {
            "modifiedstart": "2023-10-18 13:45:54",
            "modifiedend": "2023-10-19 17:45:00",
            "showcancelled": true,
            "showConfirmationStatus": true,
            "users": &#x5B;
                53
            ]
        }
    }

```

**Response: Reading out appointments edited in a period**

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
                "resourcetype": "calendar",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 3
                    },
                    "records": &#x5B;
                        {
                            "id": 439,
                            "type": "calendar",
                            "elements": {
                                "start_dt": "2021-02-01 11:00:00",
                                "end_dt": "2021-02-01 11:30:00",
                                "description": "Besichtung",
                                "note": "Notiz",
                                "ort": "Charlottenburger Allee 200, 52064 Aachen, Deutschland",
                                "art": {
                                    "Besichtigung": "Besichtigung"
                                },
                                "fuer": &#x5B;
                                    "Tester, onOffice (aaaaaaaaaaaa)"
                                ],
                                "groups": &#x5B;],
                                "emails": {
                                    "aaaaaaaaaaaa": "r.igelmjjund@onoffice.de"
                                },
                                "user_ids": &#x5B;
                                    53
                                ],
                                "ressources": &#x5B;],
                                "ressourcesWithKeys": &#x5B;],
                                "erinnerung": "",
                                "ganztags": false,
                                "rp_flag": false,
                                "abgesagt": false,
                                "status": "active",
                                "assignedaddressids": &#x5B;
                                    195
                                ],
                                "confirmationStatus": "not-set",
                                "addresses": &#x5B;
                                    {
                                        "id": 195,
                                        "confirmationStatus": "not-set"
                                    }
                                ],
                                "assignedobjectids": &#x5B;
                                    29
                                ],
                                "rp_type": "",
                                "rp_tage": 0,
                                "rp_beginn_datum": "0000-00-00",
                                "rp_ende_datum": "0000-00-00",
                                "rp_ende_status": "0",
                                "allowTransitTime": false,
                                "transitTime": null,
                                "transitTimePre": "00:00:00",
                                "transitTimePost": "00:00:00",
                                "rp_exception": &#x5B;],
                                "ProjektNr": null,
                                "von": "robert",
                                "private": "0",
                                "modified": "2023-10-19 10:12:16",
                                "users": &#x5B;
                                    {
                                        "id": "53",
                                        "username": "aaaaaaaaaaaa",
                                        "firstName": "onOffice",
                                        "lastName": "Tester",
                                        "email": "r.igelmjjund@onoffice.de"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 441,
                            "type": "calendar",
                            "elements": {
                                "start_dt": "2021-02-01 13:30:00",
                                "end_dt": "2021-02-01 14:00:00",
                                "description": "Vertragsabschluss",
                                "note": "",
                                "ort": ", Deutschland",
                                "art": {
                                    "Notartermin": "Notartermin"
                                },
                                "fuer": &#x5B;
                                    "Tester, onOffice (aaaaaaaaaaaa)"
                                ],
                                "groups": &#x5B;],
                                "emails": {
                                    "aaaaaaaaaaaa": "r.igelmjjund@onoffice.de"
                                },
                                "user_ids": &#x5B;
                                    53
                                ],
                                "ressources": &#x5B;],
                                "ressourcesWithKeys": &#x5B;],
                                "erinnerung": "",
                                "ganztags": false,
                                "rp_flag": false,
                                "abgesagt": false,
                                "status": "active",
                                "assignedaddressids": &#x5B;
                                    305
                                ],
                                "confirmationStatus": "not-set",
                                "addresses": &#x5B;
                                    {
                                        "id": 305,
                                        "confirmationStatus": "not-set"
                                    }
                                ],
                                "assignedobjectids": &#x5B;],
                                "rp_type": "",
                                "rp_tage": 0,
                                "rp_beginn_datum": "0000-00-00",
                                "rp_ende_datum": "0000-00-00",
                                "rp_ende_status": "0",
                                "allowTransitTime": false,
                                "transitTime": null,
                                "transitTimePre": "00:00:00",
                                "transitTimePost": "00:00:00",
                                "rp_exception": &#x5B;],
                                "ProjektNr": null,
                                "von": "robert",
                                "private": "0",
                                "modified": "2023-10-19 10:21:34",
                                "users": &#x5B;
                                    {
                                        "id": "53",
                                        "username": "aaaaaaaaaaaa",
                                        "firstName": "onOffice",
                                        "lastName": "Tester",
                                        "email": "r.igelmjjund@onoffice.de"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 407,
                            "type": "calendar",
                            "elements": {
                                "start_dt": "2023-10-22 13:30:00",
                                "end_dt": "2023-10-22 14:00:00",
                                "description": "Kundenbesuch",
                                "note": "Notiz",
                                "ort": "Beisenweg, 54646 , Deutschland",
                                "art": {
                                    "Besuch des Kunden im Beratungsb\u00fcro": "Besuch des Kunden im Beratungsb\u00fcro"
                                },
                                "fuer": &#x5B;
                                    "Tester, onOffice (aaaaaaaaaaaa)",
                                    "Tester, onOffice (BBBB)"
                                ],
                                "groups": &#x5B;],
                                "emails": {
                                    "aaaaaaaaaaaa": "r.igelmjjund@onoffice.de",
                                    "BBBB": "r.igelmund@onoffice.de"
                                },
                                "user_ids": &#x5B;
                                    53,
                                    55
                                ],
                                "ressources": &#x5B;
                                    "Konferenzraum"
                                ],
                                "ressourcesWithKeys": {
                                    "Konferenzraum": "Konferenzraum"
                                },
                                "erinnerung": "15 minutes",
                                "ganztags": false,
                                "rp_flag": false,
                                "abgesagt": false,
                                "status": "completed",
                                "assignedaddressids": &#x5B;
                                    4499,
                                    199,
                                    261
                                ],
                                "confirmationStatus": "sent",
                                "addresses": &#x5B;
                                    {
                                        "id": 4499,
                                        "confirmationStatus": "sent"
                                    },
                                    {
                                        "id": 199,
                                        "confirmationStatus": "canceled"
                                    },
                                    {
                                        "id": 261,
                                        "confirmationStatus": "confirmed"
                                    }
                                ],
                                "assignedobjectids": &#x5B;],
                                "rp_type": "",
                                "rp_tage": 0,
                                "rp_beginn_datum": "0000-00-00",
                                "rp_ende_datum": "0000-00-00",
                                "rp_ende_status": "0",
                                "allowTransitTime": false,
                                "transitTime": null,
                                "transitTimePre": "00:00:00",
                                "transitTimePost": "00:00:00",
                                "rp_exception": &#x5B;],
                                "ProjektNr": null,
                                "von": "robert",
                                "private": "0",
                                "modified": "2023-10-19 09:54:57",
                                "users": &#x5B;
                                    {
                                        "id": "53",
                                        "username": "aaaaaaaaaaaa",
                                        "firstName": "onOffice",
                                        "lastName": "Tester",
                                        "email": "r.igelmjjund@onoffice.de"
                                    },
                                    {
                                        "id": "55",
                                        "username": "BBBB",
                                        "firstName": "onOffice",
                                        "lastName": "Tester",
                                        "email": "r.igelmund@onoffice.de"
                                    }
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
}

```