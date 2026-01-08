---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/calendar-resources/
title: calendar-resources
scraped: 2026-01-08T20:25:52.959Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Appointments](https://apidoc.onoffice.de/api-calls-sorted-by-module/appointments/) &raquo; [Get Calendar resources](https://apidoc.onoffice.de/actions/informationen-abfragen/calendar-resources/) &raquo; Get Calendar resources		

	
	
		
# Get Calendar resources
	

	

		
**Resource type:** `calendarResources`

Returns a list of all calendar resources from the appointment module. Individual resources can be created in the administration under &#8220;Extras >> Settings >> Administration >> Singleselect >> Module: Calendar management, Key field: ressources&#8221;. To read out only the active resources, use parameter `filter` with value `active`.

**Parameters:**

`filter`

OBJECT. The filter can only be used to read out the active resources with value `active`. Example: `"filter": {"active": [{"op": "=", "val": 1}]}`

**Example:**

```

{
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "calendarResources",
        "parameters": {
                "filter": {"active": &#x5B;{"op": "=", "val": 1}]}
        }
}

```

**Response:**

**Parameters:**

`id`

INTEGER. Resource ID. Specifies also the position.
`type`

STRING. Type of resource. Always empty. Is not used yet.
`elements`

OBJECT. Field name and label of the resource.

```

            {
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
                "resourceid": "",
                "resourcetype": "calendarResources",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 0,
                            "type": "",
                            "elements": {
                                "Konferenzraum": "Konferenzraum"
                            }
                        },
                        {
                            "id": 1,
                            "type": "",
                            "elements": {
                                "Firmenfahrzeug": "Firmenfahrzeug"
                            }
                        },
                        {
                            "id": 2,
                            "type": "",
                            "elements": {
                                "ind_Schl_3151": "Laptop"
                            }
                        },
                        {
                            "id": 3,
                            "type": "",
                            "elements": {
                                "ind_Schl_2903": "Beamer"
                            }
                        }
                    ]
                },
                "status": {
                    "errorcode": 0,
                    "message": "OK"
                }
            }

```