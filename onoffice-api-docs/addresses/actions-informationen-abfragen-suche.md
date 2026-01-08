---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/suche/
title: suche
scraped: 2026-01-08T20:25:27.001Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Addresses](https://apidoc.onoffice.de/api-calls-sorted-by-module/addresses/) &raquo; [Get Search Addresses](https://apidoc.onoffice.de/actions/informationen-abfragen/suche/) &raquo; Get Search		

	
	
		
# Get Search
	

	

		
**Resource type:** `search`

This can be used to search for data records based on defined criteria, similar to the search in enterprise. The type of record searched for is specified in the resource identifier (`address`, `estate`, `searchcriteria`).

**Resource ID: **`address, estate, searchcriteria`

**Parameters (general):**

See [Search estate](https://apidoc.onoffice.de/index.php/actions/informationen-abfragen/suche-nach-objekten-quicksearch-nach-objektadresse-eigentuemer-und-ext-objektnummer/) for more information on searching for estates.

See [Search search criteria](https://apidoc.onoffice.de/index.php/actions/informationen-abfragen/suche-nach-passenden-suchkriterien/) for more information on searching for search criteria.

`input`

STRING. MANDATORY. Contains the search term to search for. This must not be empty. The address fields `firstname`, `surname`, `company`, default `emailaddress` and `customerno` (KdNr.) of all addresses will be searched through. If the search term appears in one of the searched fields of an address, this address is displayed in the response.

The search terms can be combined and are then used in an AND operation. Example: &#8220;Max Mustermann Musterfirma&#8221; finds the address with first name &#8220;Max&#8221;, surname &#8220;Mustermann&#8221; and company &#8220;Musterfirma&#8221;.``

**Parameters `(address):`**

`includecontactdata`

BOOLEAN. OPTIONAL. If true, then all email addresses are searched, not just the default email address. In addition, all telephone numbers are also searched.
`casesensitive`

BOOLEAN. OPTIONAL. Search is case-sensitive.
`searchparameter`

ARRAY. OPTIONAL. Array of fields to include in the search. If you want to search fields other than the standard fields, enter an array of field names here. Only these fields will then be searched for the input string. Example: `["Vorname", "Name"]`
`listlimit`

INTEGER. OPTIONAL. Maximum number of records returned.
`sortby`

STRING. OPTIONAL. Field to sort by. The field names from the administration must be used. Here `KdNr` for `customerno`, `Vorname` for `firstname`, `Name` for `surname`, `Zusatz1` for `company`, `contactCategory` for `addressDescription`, `Email` for `emailaddress`
`sortorder`

STRING. OPTIONAL. Possible values: `ASC` or `DESC`. Ascending or descending.

**Parameters `(estate):`**

`filterId`

INTEGER. Filter ID. This parameter can also be used to restrict the search of estates via estate filters created in enterprise. The filter IDs of your created filters can be read out via the API call [Filter](http://apidoc.onoffice.de/index.php/actions/informationen-abfragen/filter/). For more information about filters, see our [online help](https://de.enterprisehilfebeta.onoffice.com/help_entries/immobilienfilter/).
`filter`

OBJECT. Key: field, value: array of objects with filter expressions in the format `"status": [{"op": "=", "val": 1}]`. With `op` you specify the operator. Possible values for `op` are the following SQL operators:

```
is or =, >, <, >=, <=, != or <>, between, like, not like, in, not in
```

For the operator `like` the value % can be specified as a placeholder.

With `val` you specify the value which should be applied to the filtering. The individual filter expressions are linked with the AND operation. Multiple values or ranges for operators like IN or BETWEEN are specified in comma separated array notation.

`"objektart": [{"op": "IN","val": ["Zimmer","Haus"]}], "letzte_aktion ": [{"op": "BETWEEN","val": ["2020-01-01","2021-04-01"]}]}`

**Request example**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "address",
    "identifier": "",
    "resourcetype": "search",
    "parameters": {
        "input": "Max Mustermann"
    }
}

```

**Response (`address`):**

`customerno`

Customer number
`firstname`

First name in the address record
`surname`

Last name in the address record
`company`

Company in the address record
`addressDescription`

Contact category in the address record
`emailaddress`

Email addresses in the address record
`primaryEmail`

Primary email address in the address record

**Response example**

```

...
            {
              "id": 307,
              "type": "address",
              "elements": {
                "customerno": 132,
                "surname": "Mustermann",
                "firstname": "Max",
                "company": "",
                "addressDescription": "Max Mustermann",
                "emailaddress": &#x5B;
                  "p.muster@123.ok"
                ],
                "primaryEmail": "p.muster@123.ok"
              }
            }
...

```