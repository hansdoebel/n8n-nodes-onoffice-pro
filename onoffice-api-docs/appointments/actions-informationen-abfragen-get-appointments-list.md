---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/get-appointments-list/
title: get-appointments-list
scraped: 2026-01-08T20:25:46.594Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Appointments](https://apidoc.onoffice.de/api-calls-sorted-by-module/appointments/) &raquo; [Get Appointments](https://apidoc.onoffice.de/actions/informationen-abfragen/get-appointments-list/) &raquo; Get Appointments		

	
	
		
# Get Appointments
	

	

		
**Resource type:** `appointmentList`

`appointmentList` is our new API call, introduced to improve how we retrieve appointments. The `appointmentList` API is designed to be more focused. It provides only the essential information needed for the list and delivers the confirmation status more directly. This makes the process of fetching appointments for the list more streamlined and uses resources more effectively.

The maximum number of appointments that can be queried at one time is 500. To avoid this restriction, please query smaller periods of time in which there are less than 500 appointments.

The parameter is divided into two: **`data`** and **`filter`**

**Parameters:**

**`data`**

`id`

STRING. The unique record ID of the appointment.
`createdBy`

STRING. The user name of the user who initially created the entry.
`modified`

DATETIME. Timestamp indicating when the entry was last updated.
`subject`

STRING. The title or short description of the appointment.
`notes`

STRING. Additional details or description text.
`type`

OBJECT. The appointment type (e.g., meeting, visit), represented by a &#8220;value&#8221; and a &#8220;label&#8221;. Possible values are the values from the administration under “Types of action” in the “appointment” module.
`status`

OBJECT. Current state of the entry. Possible values:  `active`,  `completed`,  `canceled`,  `participantsAvailable`.
`confirmationStatus`

STRING.  Overall confirmation status. Depends on the status of the appointment confirmations of the addresses. Possible values: `canceled`, `confirmed`, `confirmed` and `canceled`, `not-set`, `sent`.
`private`

BOOLEAN. Indicates if the entry is marked as private.
`date`

OBJECT. Contains start/end dates and times.
`travelTime`

OBJECT. Outward and return travel times. Can be `null` if disabled.
`location`

OBJECT. The physical or virtual location of the appointment.
`recurrence`

OBJECT. Details for recurring events (Interval as INT, Start/End as DATE).
`reminder`

OBJECT. The reminder is a setting to provide a notification before the appointment begins. Uses INT for `timeBefore`, STRING for `recipients`, ARRAY(of STRINGS) for `types`, and BOOLEAN for `confirmedOnly`.
`groups`

ARRAY. Groups participating in the appointment (ID and name).
`users`

ARRAY. Users participating in the appointment (ID, userName, firstName, lastName, email).
`resources`

ARRAY. Resources (rooms, cars) associated with the appointment. Each resource has an ID and name represented as STRING.
`contacts`

ARRAY. Contacts linked to the appointment including their individual confirmation status.
`showFollowUpStatus`

Must be used with `contacts` parameter. Adds two fields to each contact in the contacts array: followUpAvailable represented as BOOLEAN and followUpStatus represented as STRING (returns `null` if property feedback is not configured).
`estate`

OBJECT. The estate associated with the appointment.
`project`

OBJECT. A project associated with the appointment.
`conflicts`

OBJECT. Information regarding schedule overlaps for users or resources.

**`filter`**

`startDate`

DATE. MANDATORY. Start date of the time interval for the requested appointments. All participants in the appointment are taken into account, but not the appointment creator himself if he is not a participant in the appointment.
`endDate`

DATE. MANDATORY. End date of the time interval for the requested appointments. All participants in the appointment are taken into account, but not the appointment creator himself if he is not a participant in the appointment.
`isCancelled`

BOOLEAN. Filter by cancelled (true) or not cancelled (false) entries.
`isDone`

BOOLEAN. Filter by completed (true) or not completedf (false) entries.
`isRecurrent`

BOOLEAN. Filter by recurring (true) or single (false) entries.
`userIds`

ARRAY. Filter by specific user IDs (Array of strings)..
`groupIds`

ARRAY. Filter by specific group IDs (Array of strings).
`notes`

ARRAY. Allows filtering calendar entries based on the content of their &#8220;notes&#8221; field. The filter value should be an array of objects, where each object specifies an operation and a value. For example: `"notes": [{"op": "!=", "val": "secret"}]`.

- `op`: The operator (e.g., `!=` for &#8220;not equals&#8221; or &#8220;does not contain&#8221;, `=` for &#8220;equals&#8221; or &#8220;contains&#8221;).

- `val`: The value to be checked against the notes content.

**Note** : There is a required field for single resource queries: **`resourceId`**. The following filter parameters: **`notes`**, **`createdBy`**, **`type`**,and **`subject`** will support the SQL operators function (e.g., `!=`, `=`). Example: `"subject": [{"op": "!=", "val": "test"}]`. With the parameter filter **`createdBy`** and the value `von` , you can read out all appointments created by a user.

Possible values for `op` are the following SQL operators:

```
is or =, >, <, >=, <=, != or <>, between, like, not like, in, not in
```

For the operator `like` the value % can be specified as a placeholder.

**Request example**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "appointmentList",
    "parameters": {
        "data": &#x5B;
            "id",
            "createdBy",
            "modified",
            "subject",
            "notes",
            "type",
            "status",
            "confirmationStatus",
            "private",
            "date",
            "travelTime",
            "location",
            "recurrence",
            "reminder",
            "groups",
            "users",
            "resources",
            "contacts",
            "estate",
            "project"
        ],
        "filter": {
            "startDate": "2025-05-22",
            "endDate": "2025-05-22",
            "isDone": false,
            "isCancelled": false,
            "notes": &#x5B;
                {
                    "op": "=",
                    "val": "test123"
                }
            ]
        }
    }
}

```

**Response example**

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
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
                "resourceid": "",
                "resourcetype": "appointmentList",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 1
                    },
                    "records": &#x5B;
                        {
                            "id": 7,
                            "type": "calendar",
                            "elements": {
                                "id": "7",
                                "createdBy": "max",
                                "modified": "2025-06-04T10:24:14+00:00",
                                "subject": "Test von Max Mustermann",
                                "notes": "test123",
                                "confirmationStatus": "not-set",
                                "private": false,
                                "type": {
                                    "value": "Besuch des Kunden im Beratungsbüro",
                                    "label": "Besuch des Kunden im Beratungsbüro"
                                },
                                "status": {
                                    "value": "active",
                                    "label": "active"
                                },
                                "date": {
                                    "start": "2025-05-22T08:00:00+00:00",
                                    "end": "2025-05-22T08:30:00+00:00",
                                    "allDay": false
                                },
                                "travelTime": {
                                    "outward": 30,
                                    "return": 30
                                },
                                "location": {
                                    "type": "customer",
                                    "value": "Charlottenburger Allee 5, 52068 Aachen, Deutschland"
                                },
                                "recurrence": null,
                                "reminder": {
                                    "timeBefore": 15,
                                    "recipients": "all",
                                    "confirmedOnly": false,
                                    "types": &#x5B;]
                                },
                                "groups": &#x5B;
                                    {
                                        "id": "219",
                                        "name": "Test_Gruppe"
                                    }
                                ],
                                "users": &#x5B;
                                    {
                                        "id": "21",
                                        "userName": "max",
                                        "firstName": "Max",
                                        "lastName": "Mustermann",
                                        "email": "max.mustermann@mytest.de"
                                    },
                                    {
                                        "id": "31",
                                        "userName": "gaby",
                                        "firstName": "Gaby",
                                        "lastName": "Musterfrau",
                                        "email": "musterfrau2@my-test.de"
                                    }
                                ],
                                "resources": &#x5B;],
                                "contacts": &#x5B;
                                    {
                                        "id": "153",
                                        "confirmationStatus": "not-set"
                                    }
                                ],
                                "estate": {
                                    "id": "61"
                                },
                                "project": {
                                    "id": "1"
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