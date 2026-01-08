---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/get-email-template-folders/
title: get-email-template-folders
scraped: 2026-01-08T20:26:17.010Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Emails](https://apidoc.onoffice.de/api-calls-sorted-by-module/emails/) &raquo; [Get Email template folders](https://apidoc.onoffice.de/actions/informationen-abfragen/get-email-template-folders/) &raquo; Get email template folders		

	
	
		
# Get email template folders
	

	

		
**Resource type:** `emailtemplatefolders`

Action Type: Get

This call reads the IDs and names of the email template folders (Edit >> Templates / Files >> Email templates).

**Parameters: NONE**

**Example:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "emailtemplatefolders",
    "parameters": {

    }
}

```

**Response parameters:**

- `elements`. OBJECT. ID and name of the email template folders as key:value pairs.

**Response example: **

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
        "resourcetype": "emailtemplatefolders",
        "cacheable": false,
        "identifier": "",
        "data": {
          "meta": {
            "cntabsolute": null
          },
          "records": &#x5B;
            {
              "id": 14,
              "type": "",
              "elements": {
                "12": "onOffice Systemvorlagen",
                "25": "Musterprozessvorlagen",
                "53": "Geburtstagsvorlagen",
                "55": "oO - Event-Vorlagen",
                "57": "oO - Vorlagen mit Unternehmensfarbe",
                "63": "oO - Marketplace-Vorlagen",
                "71": "Musterprozessvorlagen",
                "73": "Neuer Ordne",
                "75": "Test Mehrsprachige Vorlagen",
                "77": "Test-Ordner-ZVV-RI/RR",
                "79": "Test-ZVV_Robert",
                "81": "Testverteilen",
                "83": "VonZVVSupport",
                "111": "Faktura"
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