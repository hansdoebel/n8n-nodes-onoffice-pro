---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/get-groups/
title: get-groups
scraped: 2026-01-08T20:26:21.236Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Settings](https://apidoc.onoffice.de/api-calls-sorted-by-module/settings/) &raquo; [Get Groups](https://apidoc.onoffice.de/actions/informationen-abfragen/get-groups/) &raquo; Get groups		

	
	
		
# Get groups
	

	

		
**Resource type:** `groups`

Action Type: Get

Returns a list of groups with information about `id`, `name`, `abr`, `userIds`, `groupType` and `leaders`. With no parameters specified a list of all groups is returned.

**Parameters:**

`groupfilter`

STRING. Group filter. Possible values: `officeGroups` or `noRegionGroups`. `officeGroups` returns office groups (Bürogruppen) only.

`noRegionGroups` returns only office groups and general groups (Gruppen ohne Angaben / ohne Art)

**Example:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "groups",
    "parameters": {
        "groupfilter": "officeGroups"
    }
}

```

**Response:**

**Parameters:**

`id`

INTEGER. Group ID
`name`

STRING. Group name
`abr`

STRING. Group abbreviation
`userIds`

ARRAY. User IDs of the user in the group
`groupType`

STRING. Group type. Possible values: `GroupOffice` (Bürogruppe), `GroupRegion` (Regionengruppe) or `GroupGeneral` (Gruppe ohne Art / ohne Angaben)
`leaders`

ARRAY. User IDs of the leaders in the group. The leaders of a group can be set under &#8220;Extras >> Settings >> Groups&#8221;. For region groups, the corresponding office groups are listed with their leaders. See also the [online help](https://de.enterprisehilfebeta.onoffice.com/help_entries/office-group/?lang=en) under &#8220;Tab Groups&#8221;.

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
                "resourcetype": "groups",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 225,
                            "type": null,
                            "elements": {
                                "id": 225,
                                "name": "B\u00fcro1",
                                "abr": "tt",
                                "userIds": &#x5B;
                                    25
                                ],
                                "groupType": "GroupOffice",
                                "leaders": &#x5B;
                                    25
                                ]
                            }
                        },
                        {
                            "id": 231,
                            "type": null,
                            "elements": {
                                "id": 231,
                                "name": "B\u00fcro2",
                                "abr": "",
                                "userIds": &#x5B;
                                    27,
                                    37
                                ],
                                "groupType": "GroupOffice",
                                "leaders": &#x5B;]
                            }
                        },
                        {
                            "id": 251,
                            "type": null,
                            "elements": {
                                "id": 251,
                                "name": "Omega",
                                "abr": "",
                                "userIds": &#x5B;
                                    17
                                ],
                                "groupType": "GroupOffice",
                                "leaders": &#x5B;]
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