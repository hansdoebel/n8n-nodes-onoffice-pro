---
source: https://apidoc.onoffice.de/actions/aktionen-ausfuehren/terminbestaetigung-versenden/
title: terminbestaetigung-versenden
scraped: 2026-01-08T20:25:51.926Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Appointments](https://apidoc.onoffice.de/api-calls-sorted-by-module/appointments/) &raquo; [Do Send Appointment confirmation](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/terminbestaetigung-versenden/) &raquo; Do Send Appointment confirmation		

	
	
		
# Do Send Appointment confirmation
	

	

		
**Resource type:** `appointmentAffirmation`

With this API call you can send an appointment confirmation. You pass the appointment ID as a parameter.

You can find more information about appointment confirmation [here](https://de.enterprisehilfe.onoffice.com/help_entries/termine-kalender/termin-aktionenleiste/).

The user setting &#8220;No appointment confirmation to creator&#8221; at &#8220;Extras >> Settings >> User >> Settings&#8221; is respected by the API.

The API uses the currently &#8220;active&#8221; or selected mailbox of the logged-in user as the sender mail address if parameter `useDefaultMailAccount` is `false`.

**Parameters:**

`calendarId`

MANDATORY. INTEGER. Appointment ID.
`useDefaultMailAccount`

BOOLEAN. Default: false. If `true`, the mailbox selected in the user settings under &#8220;Extras >> Settings >> User >> Email >> Default sender email address&#8221; (Extras >> Einstellungen >> Benutzer >> E-Mail >> Standard Sender-E-Mail-Adresse) is used for sending. In addition to the active mailbox, all other mailboxes available to the user can be selected. If `false`, the API uses the currently &#8220;active&#8221; or selected mailbox of the logged-in user.

```

{
	"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
	"resourceid": "",
	"identifier": "",
	"resourcetype": "appointmentAffirmation",
	"parameters": {
		"calendarId": 354
	}
}

```