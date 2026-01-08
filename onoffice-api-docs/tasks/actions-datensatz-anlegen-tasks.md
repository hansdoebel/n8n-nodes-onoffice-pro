---
source: https://apidoc.onoffice.de/actions/datensatz-anlegen/tasks/
title: tasks
scraped: 2026-01-08T20:25:58.094Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Tasks](https://apidoc.onoffice.de/api-calls-sorted-by-module/tasks/) &raquo; [Create Tasks](https://apidoc.onoffice.de/actions/datensatz-anlegen/tasks/) &raquo; Create Tasks		

	
	
		
# Create Tasks
	

	

		
**Resource type: **`task`

Creates a new task if the user has the necessary rights.

**Parameter:**

`data`

OBJECT. The following information can be set when creating a task. See example below for usage.

- `Deadline:`DATETIME. Deadline (Fällig am). e.g. `2018-01-10 23:59:59`. Works in combination with `Deadline_strikt`.

- `Deadline_Zeit:`TIME. Deadline (Fällig am). e.g. `23:59:59`. Works in combination with `Deadline_strikt`. Sets only the time.

- `Deadline_strikt:`BOOLEAN. Deadline checkbox. 1 for checked, 0 for unchecked.

- `Prio:`INTEGER. Priority. From 1 to 5, with 1 = highest, 2 = high, 3 = normal, 4 = low, 5 = lowest.

- `Aufgabe:`STRING. Task description.

- `Verantwortung:`STRING. Responsibility. Specify a user name here. Or a group name, if `responsibilityByGroup` is set to 1.

- `Art:`INTEGER. ID of the action type from action kind &#8220;Task&#8221;. The IDs can be read out via [Kind of Action and Type of action](https://apidoc.onoffice.de/actions/informationen-abfragen/aktionsart-und-typ/). If the setting &#8220;Task type is mandatory&#8221; under &#8220;Extras >> Settings >> Basic settings >> Tab Other&#8221; is active, then the specification of the task type is mandatory.

- `Status:`INTEGER. Status. From 1 to 7, with 1 = not started, 2 = in process, 3 = completed, 4 = deferred, 5 = cancelled, 6 = miscellaneous, 7 = checked, 8 = need clarification.

- `Betreff:`STRING. Subject.

- `Bearbeiter:`STRING. Processor. Specify a user name here.

- `Beginnt_am:`DATETIME. Deferred date. Specify a date, till when the task shall be deferred (Zurückgestellt &#8211; Datum). e.g. `2018-01-10 14:30:00`.

- `Beginnt_um:`TIME. Deferred time. Specify a time, till when the task shall be deferred (Zurückgestellt &#8211; Datum). e.g. `14:30:00`. Sets only the time.

- `Aufwand_Soll_NUM:`DECIMAL. Targeted time investment. Enter a decimal number here. e.g. `10.5`.

- `Einheit_Aufwand_Soll:`STRING. Unit for targeted time investment. Options are minutes, hours and days: `Minuten, Stunden, Tage`.

- `Aufwand_Zusatz_NUM:`DECIMAL. Additional expenses. Enter a decimal number here. e.g. `10.5`.

- `Einheit_Aufwand_Zusatz:`STRING. Unit for additional expenses. Options are minutes, hours and days: `Minuten, Stunden, Tage`.

- `Erinnerung:`BOOLEAN. Reminder checkbox, can be 1 or 0. Works in combination with `Erinnerungsdatum` and `Erinnerungsdatum_Zeit`.

- `Erinnerungsdatum:`DATE. Reminder date. Format: `2020-08-28`. The reminder is created with the reminder date only for the user calling the API. If the user under `Verantwortung` (responsibility) is not set to &#8220;deactivated&#8221; in the user settings &#8220;Popup for new tasks&#8221;, a reminder is also created for this user. However, the reminder date is set to the current time and the text is &#8220;New task from x&#8221;.

- `Erinnerungsdatum_Zeit:`TIME. Reminder time. Format: `15:50:00`.

- `Kommentar:`STRING. Task comment.

`relatedAddressId`

INTEGER. Address IDs to be linked with the task.
`relatedEstateId`

INTEGER. Estate ID to be linked with the task.
`relatedProjectIds`

INTEGER. Project ID to be linked with the task.
`responsibilityByGroup`

BOOLEAN. Flag, if a group is responsible for the task. Can be `0` or `1`.
`mailMessageId`

STRING. Unique message ID of an email. If this parameter is set, the newly created task is linked to the email with the specified message ID.

**Example:**

```

    {
        "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:create",
        "resourceid":"",
        "identifier":"",
        "resourcetype":"task",
        "parameters":{
            "data":{
                "Betreff":"Besichtigungstermin Max Mustermann",
                "Verantwortung":"robert",
                "Bearbeiter":"robert",
                "Aufgabe":"Um 11:00 am 03.10.2018 Besichtigungstermin bei Max Mustermann durchführen."
            },
            "relatedAddressId":247,
            "relatedEstateId":459
        }
    }

```

**Response:**

```

...
"response": {
	"results": &#x5B;
	{
		"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:create",
                "resourceid": "",
                "resourcetype": "task",
                "cacheable": false,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 157,
                            "type": "task",
                            "elements": &#x5B;

                            ]
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
...

```