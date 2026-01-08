---
source: https://apidoc.onoffice.de/actions/datensatz-lesen/user/
title: user
scraped: 2026-01-08T20:26:22.265Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Settings](https://apidoc.onoffice.de/api-calls-sorted-by-module/settings/) &raquo; [Read User](https://apidoc.onoffice.de/actions/datensatz-lesen/user/) &raquo; Read User		

	
	
		
# Read User
	

	

		
**Resource:** `user`

Reads all specified fields from user records. Most user fields are valid here and are passed as elements of an array in the parameter `data`. You cannot read the user passwort via API.

If you specify a user ID as resourceid, only data for this user will be read. If you need to retrieve the user IDs, then query all users first with parameter `data` and without a filter. In the response are the user IDs included.

Each parameter is returned with the appropriate value of the record.

In enterprise these user data are found under &#8220;Extras->Settings->User&#8221; / &#8220;Extras->Einstellungen->Benutzer&#8221;.

You need read permission to query user data via API. This can be set under &#8220;Extras->Einstellungen->Benutzer&#8221; / &#8220;Extras->Settings->User&#8221;. Choose the tab &#8220;API user&#8221;, then the tab &#8220;Rights&#8221; with the setting &#8220;Benutzerdaten über API auslesen&#8221; / &#8220;Read out user data via API&#8221;. Only API users can see this setting.

The own user can be queried via `resourceid` even without the right &#8220;Benutzerdaten über API auslesen / Read out user data via API&#8221;.

**Parameters:**

`data`

ARRAY. Following fields can be queried: `Anrede`, `Titel`, `Kuerzel`, `Vorname`, `Nachname`, `Firma`, `PLZ`, `Ort`, `Strasse`, `Hausnummer`, `Land`, `province`, `Mobil`, `Telefon`, `Fax`, `Url`, `UstID`, `taxNumber`, `Gerichtsstand`, `imprintFurthermore` (Weiteres), `Firmazusatz1`, `PositionUnternehmen`, `Namezusatz1`, `Namezusatz2`, `Bank`, `IBAN`, `BIC`, `Finanzamt`, `Hinweis`, `Sonstiges`, `Nr`, `Name` (user name), `email`, `Emailname`, `adrId:adressen.ID` (linked user address), `anbieter`, `Prefix`, `usesAccount:account.id` (Account approved or blocked), `Sprache`, `meetingUrl` (user link for video conference), `online` (status of a user: active, permanently deactivated, locked, etc.), `userCreationDate`
`filter`

OBJECT. Key: field, value: array of objects with filter expressions in the format `"Nr": [{"op": "=", "val": 1}]`. With `op` you specify the operator. Possible values for `op` are the following SQL operators:

```
is or =, >, <, >=, <=, != or <>, between, like, not like, in, not in
```

For the operator `like` the value % can be specified as a placeholder.

With `val` you specify the value which should be applied to the filtering. The individual filter expressions are linked with the AND operation. All values of parameter `data` can be specified for the filter. See also the example below.
`sortby`

OBJECT. Fields to sort by. The field name is used as the key, and the type of sorting as the value. Notation: `{"Nachname": "ASC", "Vorname": "ASC"}`

Possible values for sorting are ASC for ascending, DESC for descending.
`listlimit`

INTEGER. Maximum number of estates in the list. Default value: 20, maximum: 500.
`listoffset`

INTEGER. Offset of the list, that means from which data record onwards the list should be output.

**Example: Read first name, last name and email name from users 17, 19 and 21**

```

{
	"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
	"resourceid": "",
	"identifier": "",
	"resourcetype": "user",
	"parameters": {
           "data": &#x5B;"Vorname", "Nachname", "Emailname"],
		   "filter": {"Nr": &#x5B;{"op": "in", "val": &#x5B;17, 19, 21]}]},
		   "sortby": {"Nr": "DESC"},
	           "listlimit": 10
	}
}

```

Response:

```

...
{
	"id": 19,
	"type": "user",
	"elements": {
		"Vorname": "Theo",
		"Nachname": "Test",
		"Emailname": "theo test"
	}
},
...

```