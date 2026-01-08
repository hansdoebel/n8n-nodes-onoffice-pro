---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/get-appointment-conflicts/
title: get-appointment-conflicts
scraped: 2026-01-08T20:25:55.015Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Appointments](https://apidoc.onoffice.de/api-calls-sorted-by-module/appointments/) &raquo; [Get Appointment conflicts](https://apidoc.onoffice.de/actions/informationen-abfragen/get-appointment-conflicts/) &raquo; Get Appointment conflicts		

	
	
		
# Get Appointment conflicts
	

	

		
**Resource type:** `appointmentConflicts`

This new API call for real-time queries regarding appointment and resource conflicts enables conflict notifications to be displayed during appointment creation, rather than only after saving.

**Parameters:**

data

OBJECT. The following information will be checked for conflicts when creating an appointment:

- `start_dt:` STRING. Start of the appointment. MANDATORY.

- `end_dt:` STRING. End of the appointment. MANDATORY.

- `transitTimePre:` STRING. Transit time before the appointment. Time format: e.g. 00:30:00.

- `transitTimePost:` STRING. Transit time after the appointment. Time format: e.g. 00:30:00.

- `ganztags:` BOOL. All-day appointment?

- `allowTransitTime:` BOOL. Enter transit time?

- `ressources:` ARRAY. Ressources of the appointment that will be checked for conflicts.

- `status:` STRING. Appointment status (Terminstatus). Possible values: `active`, `completed`, `participantsAvailable`, `canceled```

`relatedAddressIds`

ARRAY. Address IDs that will be checked for conflicts.
`relatedEstateId`

INTEGER. Estate ID that will be checked for conflicts.
`location`

OBJECT. Place of appointment (see below).
`subscribers`

OBJECT. Participants. Can be users (`users`) and/or groups (`groups`) that will be checked for conflicts.

**Example:**

```

    {
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "appointmentConflicts",
    "parameters": {
        "data": {
            "start_dt": "2025-11-18 12:00:00",
            "end_dt": "2025-11-18 14:00:00",
            "transitTimePre": "00:00:00",
            "transitTimePost": "00:00:00",
            "ganztags": false,
            "allowTransitTime": true,
            "ressources": &#x5B;"Firmenfahrzeug","Konferenzraum"],
            "status": "active"
        },  
        "relatedAddressIds": &#x5B;371,383],
        "relatedEstateId": 325,
        "location": {
            "estate": 155
        },
        "subscribers": {
            "users": &#x5B;
                21
            ],
            "groups": &#x5B;
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
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "",
        "resourcetype": "appointmentConflicts",
        "cacheable": false,
        "identifier": "",
        "data": {
          "meta": {
            "cntabsolute": 4
          },
          "records": &#x5B;
            {
              "id": "conflictedUsers",
              "type": "",
              "elements": &#x5B;
                {
                  "id": 21
                }
              ]
            },
            {
              "id": "conflictedResources",
              "type": "",
              "elements": &#x5B;
                {
                  "id": "Konferenzraum"
                }
              ]
            },
            {
              "id": "conflictedAddresses",
              "type": "",
              "elements": &#x5B;]
            },
            {
              "id": "conflictedEstates",
              "type": "",
              "elements": &#x5B;]
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