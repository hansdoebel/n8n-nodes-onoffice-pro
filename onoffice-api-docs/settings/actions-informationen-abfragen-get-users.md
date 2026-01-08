---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/get-users/
title: get-users
scraped: 2026-01-08T20:26:23.355Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Settings](https://apidoc.onoffice.de/api-calls-sorted-by-module/settings/) &raquo; [Get Users](https://apidoc.onoffice.de/actions/informationen-abfragen/get-users/) &raquo; Get users		

	
	
		
# Get users
	

	

		
**Resource type:** `users`

Action Type: Get

Returns a list of users with information about id, user name, first name and last name. With no parameters specified a list of all users is returned. 

With parameter `userfilter` set to `onlyOwn` an additional response parameter `NeuerTerminFuer` is added, which contains the user data in an array and is used internally by the app in the appointment module.

**Parameters:**

`userfilter`

STRING. User filter. Possible values: `ownOfficeGroupOrAll`, `onlyOwn` or `byGroupId`
`groupId`

INTEGER. Group ID. Must be used in combination with parameter `userfilter`. 

**Example:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "users",
    "parameters": {
        "groupId": 225,
        "userfilter": "byGroupId"
    }
}

```

**Response:**

**Parameters:**

`id`

INTEGER. User ID
`username`

STRING. User name
`firstname`

STRING. First name
`lastname`

STRING. Last name
`email`

STRING. Email
`meetingurl`

STRING. Meeting URL of the user
`NeuerTerminFuer`

ARRAY. New appointment for

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
                "resourcetype": "users",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 25,
                            "type": null,
                            "elements": {
                                "id": 25,
                                "username": "paulprobe",
                                "firstname": "Paul",
                                "lastname": "Probe",
                                "email": "paulprobe154@onoffice.de",
                                "meetingurl": "www.meetinglink3178.com"
                            }
                        },
                        {
                            "id": 17,
                            "type": null,
                            "elements": {
                                "id": 17,
                                "username": "theotest",
                                "firstname": "Theo",
                                "lastname": "Test",
                                "email": "theotest154@onoffice.de",
                                "meetingurl": "www.meetinglink6542.com"
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