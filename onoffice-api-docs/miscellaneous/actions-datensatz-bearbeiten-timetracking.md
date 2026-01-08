---
source: https://apidoc.onoffice.de/actions/datensatz-bearbeiten/timetracking/
title: timetracking
scraped: 2026-01-08T20:26:38.157Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Miscellaneous](https://apidoc.onoffice.de/api-calls-sorted-by-module/miscellaneous/) &raquo; [Modify Timetracking](https://apidoc.onoffice.de/actions/datensatz-bearbeiten/timetracking/) &raquo; Modify Timetracking		

	
	
		
# Modify Timetracking
	

	

		
**Resource type:** `timetracking`

Starts and stops the time tracking for the loggin-in user. Reads out the tracked working time and tracked break time.

**Parameters:**

`track`

BOOLEAN. Possible values: 0 or 1. 1 starts the time tracking. 0 stops the time tracking.

**Example:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "timetracking",
    "parameters": {
        "track": 1
    }
}

```

**Response:**

**Parameters:**

`worktime`

TIME. Today&#8217;s working hours.
`breaktime`

TIME. Today&#8217;s break time.
`currentlytracking`

BOOLEAN. True, if time tracking is active. False, if time tracking is not active.
`worktimeActive`

BOOLEAN. Is the worktime module activated?
`targetTimeToday`

TIME. Planned working time for the day.

If the module &#8220;timekeeping&#8221; is not active, the only response parameter is `worktimeActive`.

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
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
                "resourceid": "",
                "resourcetype": "timetracking",
                "cacheable": false,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 0,
                            "type": null,
                            "elements": {
                                "worktimeActive": true,
                                "worktime": "01:35:10",
                                "breaktime": "00:00:14",
                                "currentlytracking": true,
                                "targetTimeToday": "00:00:00"
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

Whether the starting and stopping of working time in the onOfffice app is possible is controlled by the setting &#8220;Start/stop working time via onOffice app&#8221; under &#8220;Extras >> Settings > Basic settings >> onOffice App&#8221;.