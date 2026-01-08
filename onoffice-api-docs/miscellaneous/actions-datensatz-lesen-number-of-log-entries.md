---
source: https://apidoc.onoffice.de/actions/datensatz-lesen/number-of-log-entries/
title: number-of-log-entries
scraped: 2026-01-08T20:26:36.107Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Miscellaneous](https://apidoc.onoffice.de/api-calls-sorted-by-module/miscellaneous/) &raquo; [Read log entries](https://apidoc.onoffice.de/actions/datensatz-lesen/number-of-log-entries/) &raquo; Read log entries		

	
	
		
# Read log entries
	

	

		
**Resource:** `log`

This API call can be used to read out general information of the log entries. In enterprise this is the view &#8220;Extras >> Log >> Logging detail view >> General information&#8221; (Extras >> Log >> Detailansicht Logging >> Allgemeine Informationen)

Querying for column `field` is not possible. As with other read calls, restrictions can be made via the `filter` parameter.

To execute this API call, the user must have &#8220;Administrator&#8221; rights. This can be found under &#8220;Extras >> Settings >> User >> Rights >> Admin (tick the box)&#8221;.

**Parameters:**

`listlimit`

INTEGER. MANDATORY. Maximum: 500. if listlimit is 0, only the number of entries is returned and not the data records themselves.
`listOffset`

INTEGER. Offset of the list, that means from which data record onwards the list should be output. Note that the query can be very slow if the offset value is large. In this case and if the `id` is known, the filter parameter should be used. See example below.
`module`

STRING. Possible values: `user`, `customer`, `address`, `estate`, `agentslog`, `contact person`, `file`, `interested`, `relation`, `relations`, `region`, `owner`, `matching`, `search criteria`, `offer`, `project`, `task`, `addressAssigment`, `estateAssigment`, `userAssignment`, `news`, `intranet`, `calendar`, `cms`, `smartSite`, `emailAdministration`, `arbeitszeiterfassung`, `accessControl`, `addressCsvExportSettings`, `portal`, `marketingBox`, `portalAutoResponse`, `portalAutoFullTransfer_Modul`, `fakturaArticleAdministration`, `fakturaBookings`, `templateManagement`, `emailPostOfficeBoxEncryption`, `pdfTemplates`, `cancelationBasicSettings`, `cancelationGroupSettings`, `domainAdministration`
`user`

INTEGER. User ID for the user whose log is to be queried. Without `user`, the entries of all users are queried.
`action`

STRING. Action of the queried log entries. Without `action` , the entries of all actions are queried. Possible values: `splitBooking`, `extendBooking`, `cancelBooking`, `deleteBooking`, `edit`, `link`, `unlink`, `export`, `delete`, `add`, `duplicate`, `cancelation`, `massUpdateRights`, `datevSync`
`filter`

OBJECT. For the filter `dateTime` can be specified to limit the time period of the log entries. For the query of time periods use the operator `BETWEEN`. Some operators do not give meaningful results. See example below for usage.You can also filter by the columns of the logging table. The possible values are: `action`, `module`, `userNr:user.Nr` (user), `dateTime`, `resourcePk` (origin data-record), `resourceTable` (origin table), `targetPk` (destination data-record), `targetTable` (destination table).Key: field, value: array of objects with filter expressions in the format `"dateTime": [{"op": "BETWEEN", "val": ["2010-01-01 00:00:00","2022-04-01 15:00:00"]}]`. With `op` you specify the operator. Possible values for `op` are the following SQL operators:

```
is or =, >, <, >=, <=, != or <>, between, like, not like, in, not in
```

For the operator `like` the value % can be specified as a placeholder.

With `val` you specify the value which should be applied to the filtering. The individual filter expressions are linked with the AND operation.

**Example**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "log",
    "parameters": {
        "module": "estate",
        "listlimit":2,
        "filter": {
            "dateTime": &#x5B;
                {
                    "op": "BETWEEN",
                    "val": &#x5B;
                        "2025-08-01 11:30:00",
                        "2025-08-08 11:30:00"
                    ]
                }
            ]
        }
    }
}

```

Response parameters:

`id`

INTEGER. ID of the log entry.
`action`

STRING. Action. The possible values can be looked up under request parameter `action`.
`module`

STRING. Module. The possible values can be looked up under request parameter `module`.
`userId`

INTEGER. ID of the user.
`dateTime`

DATE. Date with time.
`resourceId`

INTEGER. ID of the target record (Zieldatensatz).
`resourceTable`

STRING. Name of the origin table (Quelltabelle).
`resourcePk`

INTEGER. ID of the source record (Quelldatensatz).

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
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid": "",
        "resourcetype": "log",
        "cacheable": false,
        "identifier": "",
        "data": {
          "meta": {
            "cntabsolute": 2
          },
          "records": &#x5B;
            {
              "id": 589725,
              "type": "Log",
              "elements": {
                "id": "589725",
                "action": "add",
                "module": "estate",
                "userId": "19",
                "dateTime": "2025-08-05 15:14:26",
                "resourceId": "19955",
                "resourceTable": null,
                "resourcePk": null
              }
            },
            {
              "id": 589729,
              "type": "Log",
              "elements": {
                "id": "589729",
                "action": "duplicate",
                "module": "estate",
                "userId": "19",
                "dateTime": "2025-08-05 15:14:27",
                "resourceId": "19957",
                "resourceTable": "estate",
                "resourcePk": "19955"
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