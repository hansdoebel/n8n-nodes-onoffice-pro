---
source: https://apidoc.onoffice.de/actions/datensatz-bearbeiten/appointments/
title: appointments
scraped: 2026-01-08T20:25:49.845Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Appointments](https://apidoc.onoffice.de/api-calls-sorted-by-module/appointments/) &raquo; [Modify Appointments](https://apidoc.onoffice.de/actions/datensatz-bearbeiten/appointments/) &raquo; Modify Appointments		

	
	
		
# Modify Appointments
	

	

		
**Resource type:** `calendar`

With this API call an appointment can be edited. The ID of the appointment to be edited has to be specified as `resourceid`. The default values for the appointment follow-up on the tab &#8220;Tools >> Settings >> Basic settings >> Automatization&#8221; for the appointment type are taken into account.

**Parameters:**

`data`

OBJECT. The following information can be set when editing an appointment:

- `description:` STRING. Appointment description

- `start_dt:` STRING. Start of the appointment

- `end_dt:` STRING. End of the appointment

- `art:` STRING. Type of appointment

- `ganztags:` BOOL. All-day appointment?

- `allowTransitTime:` Enter transit time?

- `transitTime:` STRING. Transit time. Time format: e.g. 00:30:00

- `transitTimePre:` STRING. Transit time before the appointment. Time format: e.g. 00:30:00

- `transitTimePost:` STRNG. Transit time after the appointment. Time format: e.g. 00:30:00

- `note:` STRING. Notes on the appointment

- `abgesagt:` BOOL. Sets appointment status on active or cancelled

- `status:` STRING. Appointment status (Terminstatus). Possible values: `active`, `completed`, `canceled`, `participantsAvailable`. Overwrites the value `abgesagt` if both are specified in the same call.

- `private:` BOOL. Private appointment?

- `erinnerung:` STRING. Time of the appointment reminder before the appointment. Possible values are: `0 minutes, 5 minutes, 15 minutes, 30 minutes, 1 hours, 2 hours, 3 hours, 12 hours, 15 hours, 1 days, 2 days, 3 days, 1 weeks, 3 weeks`

- `origin:` STRING. Appointment imported via ICS?

- `ressources:` ARRAY. Ressources of the appointment. All existing ressources are replaced with the given array. The values can be read out under &#8220;Extras >> Settings >> Administration >> Singleselect >> Modul: Calendar management, Field: ressources&#8221;

- `von:` STRING. The user to be entered as the appointment creator at field &#8220;von&#8221; (creator). The username can be queried via [Get users](https://apidoc.onoffice.de/actions/informationen-abfragen/get-users/).

- `rp_flag:` BOOLEAN. Set to TRUE, if the appointment is recurring.

- `rp_type:` STRING. Repetition pattern: `t` for daily, `w` for weekly, `m` for monthly, `j` for yearly.

- `rp_tage:` INTEGER. Repetition value: Between 1 and 999.

- `rp_beginn_datum:` STRING. Start date with format `YYYY-MM-DD`.

- `rp_ende_datum:` STRING. End date with format `YYYY-MM-DD`.

- `rp_ende_status:` INTEGER. End status of series. Set to 1, if end date is set. Set to 2, if series is open ended.

- `rp_exception:` STRING. Exception date for series with a preceded #. One exception `#2024-05-28`. Multiple exceptions: `#2024-05-26#2024-05-28#2024-05-30`

`relatedAddressIds`

ARRAY. Address IDs to be linked with the appointment. IDs that are already linked before and are not in the array remain linked. To remove the old address links, set parameter `replaceAddressIds` to `true`.
`replaceAddressIds`

BOOLEAN. This parameter specifies whether the transferred IDs should replace the existing ones. There are two cases: 1. add: The transferred address IDs in parameter `relatedAddressIds` are not yet linked, then the transferred address ID will be linked to the appointment. 2. remove: If the ID already linked to the appointment is not present in the passed address IDs in parameter `relatedAddressIds`, then the linked address ID will be removed from the appointment. That is, if no address IDs are passed at all, then all address IDs will be removed from the appointment.
`relatedEstateId`

INTEGER. Estate ID to be linked with the appointment. The linked property is unlinked if the value 0 or null is specified for the parameter.
`location`

OBJECT. Place of appointment (see below)
`subscribers`

OBJECT. Participants. Can be users (`users`) or groups (`groups`).
`reminderTypes`

ARRAY. Type of appointment reminder. Can accept the values `email`, `popup` or `sms`. For this purpose, the field `erinnerung` must also be set to a time with the parameter `data`.

**Example:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
    "resourceid": "383",
    "identifier": "",
    "resourcetype": "calendar",
    "parameters": {
        "data": {
			"description":"Besichtigung beim Kunden",
            "start_dt": "2016-12-11 17:00:00",
            "end_dt" : "2016-12-11 18:00:00",
            "art" : "Besichtigung",
            "ganztags" : false,
            "note" : "das ist eine Notiz",
            "private" : false,
            "ressources": &#x5B;"Konferenzraum", "Firmenfahrzeug"]
		},
        "relatedAddressIds" : &#x5B;1935, 1931],
        "relatedEstateId" :608,
        "location" : {"estate" : 608},
        "subscribers": {"users" : &#x5B;14], "groups" : &#x5B;172]}
    }
}

```

and the options for the appointment location are

- `address:` STRING

- `estate:` STRING

- `user:` STRING

- `group:` STRING

- `mandant:` BOOL. Customer / company

- `sonstiges:` STRING. Other

- `customVideoUrl:` STRING. Video conference

- `userMeetingUrl:` INTEGER. Video conference from user / meeting link from user basic data. Value: user id

- `keine Angaben:` STRING. Not specified

If you set the location of an user, group, address or estate that is not linked to the appointment, the location will be entered under `sonstiges` (other).

```

{
  "location" : { "address" : "5431"}
}


{
  "location" : { "estate" : "39"}
}

{
  "location" : { "user" : "21"}
}

{
  "location" : { "group" : "39"}
}

{
  "location" : { "mandant" : true}
}

{
  "location" : { "sonstiges" : "Testr.1, 52062 Aachen"}
}

{
  "location" : { "customVideoUrl" : "www.onoffice.de"}
}

{
  "location" : { "userMeetingUrl" : 17}
}

{
  "location" : {"keine Angaben": ""}
}

```