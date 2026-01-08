---
source: https://apidoc.onoffice.de/actions/aktionen-ausfuehren/do-access-control-data-record-rights-stamp/
title: do-access-control-data-record-rights-stamp
scraped: 2026-01-08T20:26:31.924Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Settings](https://apidoc.onoffice.de/api-calls-sorted-by-module/settings/) &raquo; [Do Access Control (data record rights stamp)](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/do-access-control-data-record-rights-stamp/) &raquo; Do Access Control (data record rights stamp)		

	
	
		
# Do Access Control (data record rights stamp)
	

	

		
**Resource type:** `accessControl`

This API call can be used to apply preconfigured data record rights stamps to various modules. The data record authorisation stamps are created in enterprise under &#8220;Action bar of the supported modules: Further actions >> Data record authorisation >> Stamp&#8221;. You can save your configurations for data record rights as a stamp and then use them on selected data records.

As with enterprise, the rights stamp can only be applied if the API user has the rights to set the data record rights (‘Extras >> Settings >>  User >> Rights >> Data record rights: Extend and limit rights&#8221;) and write access to the corresponding data record.

You can find more information on data record authorisation stamps in the [online help](https://de.enterprisehilfebeta.onoffice.com/help_entries/benutzer/benutzer-details/rechte/#Datensatzrechtestempel).

**Parameters:**

`acTemplate`

STRING. MANDATORY. Name of the data record rights stamp template to be used.
`module`

STRING. MANDATORY. Module to which the stamp is to be applied. Possible values: `estate`, `address`, `agentsLog`, `calendar`, `task`.
`recordId`

INTEGER. MANDATORY. ID of the data record to which the stamp is to be applied.
`templateOwner`

INTEGER. MANDATORY. User ID of the user who created the stamp. The rights are applied by the API user (e.g. important for log entries), the `templateOwner` parameter only specifies the user from which the template is loaded.

**Example**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "accessControl",
    "parameters": {
        "acTemplate":"Test1",
        "module": "estate",
        "recordId": 83,
        "templateOwner": 19
    }
}

```

**Response**

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
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": "",
        "resourcetype": "accessControl",
        "cacheable": false,
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
}

```