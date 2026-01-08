---
source: https://apidoc.onoffice.de/actions/datensatz-bearbeiten/tasks/
title: tasks
scraped: 2026-01-08T20:25:59.140Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Tasks](https://apidoc.onoffice.de/api-calls-sorted-by-module/tasks/) &raquo; [Modify Tasks](https://apidoc.onoffice.de/actions/datensatz-bearbeiten/tasks/) &raquo; Modify Tasks		

	
	
		
# Modify Tasks
	

	

		
**Resource type: **`task`

Modifies a task if the user has the necessary rights. The task ID has to be specified as resource ID. The modifications are logged in the comment section of the task.

Please remember when working with the [action task](https://de.enterprisehilfebeta.onoffice.com/help_entries/create-process-template/action-task/?lang=en) in the process manager: The next process step is only started when the task has been completed (Parameter `erledigt` true).

**Parameter:**

`data`

OBJECT. The following information can be set when modifying a task. See example below for usage.

- `Deadline:`DATETIME. Deadline. e.g. `2018-01-10 23:59:59`

- `Deadline_Zeit:`TIME. Deadline (Fällig am). e.g. `23:59:59`. Works in combination with `Deadline_strikt`. Sets only the time.

- `Deadline_strikt:`BOOLEAN. Deadline checkbox. 1 for checked, 0 for unchecked.

- `Prio:`INTEGER. Priority. From 1 to 5, with 1 = highest, 2 = high, 3 = normal, 4 = low, 5 = lowest.

- `Aufgabe:`STRING. Task description.

- `Verantwortung:`STRING. Responsibility. Specify a user name here. Or a group name, if responsibilityByGroup is set to 1.

- `Art:`INTEGER. ID of the action type from action kind &#8220;Task&#8221;. The IDs can be read out via [Kind of Action and Type of action](https://apidoc.onoffice.de/actions/informationen-abfragen/aktionsart-und-typ/).

- `Status:`INTEGER. Status. From 1 to 7, with 1 = not started, 2 = in process, 3 = completed, 4 = deferred, 5 = cancelled, 6 = miscellaneous, 7 = checked, 8 = need clarification

- `Stand:`INTEGER. Processing stage. Options are: `0, 25, 50, 75, 100`

- `Betreff:`STRING. Subject.

- `Bearbeiter:`STRING. Processor. Specify a user name here.

- `Beginnt_am:`DATETIME. Deferred date. Specify a date, till when the task shall be deferred (Zurückgestellt &#8211; Datum). e.g. `2018-01-10 14:30:00`

- `Beginnt_um:`TIME. Deferred time. Specify a time, till when the task shall be deferred (Zurückgestellt &#8211; Datum). e.g. `14:30:00`. Sets only the time.

- `Aufwand_Soll_NUM:`DECIMAL. Targeted time investment. Enter a decimal number here. e.g. `10.5`

- `Einheit_Aufwand_Soll:`STRING. Unit for targeted time investment. Options are minutes, hours and days: `Minuten, Stunden, Tage`

- `Aufwand_Zusatz_NUM:`DECIMAL. Additional expenses. Enter a decimal number here. e.g. `10.5`

- `Einheit_Aufwand_Zusatz:`STRING. Unit for additional expenses. Options are minutes, hours and days: `Minuten, Stunden, Tage`

`erledigt:`BOOLEAN. Completed. Can be `true` or `false`.
- `Erinnerung:`BOOLEAN. Reminder checkbox, can be 1 or 0. Works in combination with `Erinnerungsdatum` and `Erinnerungsdatum_Zeit`.

- `Erinnerungsdatum:`DATE. Reminder date. Format: `2020-08-28`. The reminder is created with the reminder date only for the user calling the API.

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

**Example:**

```

    {
        "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
        "resourceid":"451",
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
		"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
                "resourceid": "451",
                "resourcetype": "task",
                "cacheable": false,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 0,
                            "type": "task",
                            "elements": {
                                "success": "success"
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
...

```