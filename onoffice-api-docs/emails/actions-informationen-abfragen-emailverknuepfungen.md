---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/emailverknuepfungen/
title: emailverknuepfungen
scraped: 2026-01-08T20:26:12.730Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Emails](https://apidoc.onoffice.de/api-calls-sorted-by-module/emails/) &raquo; [Get Email Links (deprecated)](https://apidoc.onoffice.de/actions/informationen-abfragen/emailverknuepfungen/) &raquo; Get Email links (deprecated)		

	
	
		
# Get Email links (deprecated)
	

	

		
DEPRECATED. Use [&#8220;Get email info&#8221;](https://apidoc.onoffice.de/actions/informationen-abfragen/email-info/) instead.

**Resource type: **`emailassignments`

This can be used to retrieve address and property links with an email. Can read only one adress linked with the mail.

**Parameters:**

`messageid`

Unique message ID of the email
`uid`

Unique identifier of the email
`folder`

Folder in which the email is located
`emailidentity`

Email identity. Can only accept identities associated with the user in enterprise

**Example:**

```

{
	"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
	"resourceid": "",
	"identifier": "",
	"resourcetype": "emailassignments",
	"parameters": {
		"messageid": "xxx",
		"uid": "123",
		"folder": "Posteingang",
		"emailidentity": "xxx@my-onoffice.de"
	}
}

```

**Response:**

`addressid`

Address ID
`addresscustomerno`

Customer number (address)
`addressfirstname`

First name (address)
`addresssurname`

Surname (address)
`addresscompany`

Company (address)
`estateid`

Estate ID
`estateexternalno`

External property number (estate)
`estateowner`

Owner (estate)
`estatestreet`

Street (estate)
`estatecity`

City (estate)