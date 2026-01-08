---
source: https://apidoc.onoffice.de/actions/datensatz-anlegen/working-list/
title: working-list
scraped: 2026-01-08T20:25:13.416Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Create Estate Working list](https://apidoc.onoffice.de/actions/datensatz-anlegen/working-list/) &raquo; Create Working list		

	
	
		
# Create Working list
	

	

		
**Resource type:** `workinglist`

This API call can be used to create [worklists](https://de.enterprisehilfebeta.onoffice.com/help_entries/general-instructions/create-worklists/?lang=en) for estates and addresses in enterprise. Currently there is only the create call for worklists, no modify or delete.

To create public lists (visibility 0), the user right &#8220;Create public filters / work lists&#8221; at &#8220;Extras >> Settings >> User >> Rigths&#8221; is required.

To create shop window TV lists (stv_flag), the user right &#8220;Create storefront TV lists&#8221; at &#8220;Extras >> Settings >> User >> Rigths&#8221; is required.

**Parameters:**

`listName`

STRING. Name of the worklist.
`type`

STRING. Type of the worklist. Possible values: `estate`, `address`
`visibility`

INTEGER. Visibility of the worklist: Possible values: 0 &#8211; public list, 1 &#8211; private list, 2 &#8211; public group list.
`stv_flag`

BOOLEAN. If true, a shop window TV list is created. Parameter visibility is then ignored.
`userId`

INTEGER. Id of the user for whom the worklist should be created. It is specified together with visibility 1. If no userid is specified, the ID of the logged in user is set.
`groupId`

INTEGER. Id of the group for which the worklist should be created. It is specified together with visibility 2.  If no groupid is specified, the ID of the office group of the logged in user is set.
`ids`

ARRAY. The IDs of the records to be included in the worklist.

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:create",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "workinglist",
        "parameters": {
            "userId": 25,
            "listName": "Immobilienliste",
            "visibility": 1,
            "type": "estate",
            "ids": &#x5B;
                1061,
                1065,
                1069
            ]
        }
    }

```