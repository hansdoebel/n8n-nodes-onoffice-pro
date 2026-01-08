---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/suchkriterien/
title: suchkriterien
scraped: 2026-01-08T20:25:35.217Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Search Criteria](https://apidoc.onoffice.de/api-calls-sorted-by-module/search-criteria/) &raquo; [Get Search criteria](https://apidoc.onoffice.de/actions/informationen-abfragen/suchkriterien/) &raquo; Get Search criteria		

	
	
		
# Get Search criteria
	

	

		
**Resource type:**` searchcriterias`

Returns search criteria (fields + values) for a list of addresses or search criteria, depending on the `mode` parameter.

**Parameters:**

`mode`

STRING. MANDATORY. Type of transmitted IDs. Possible values: `internal, external, searchcriteria, filter`.

- `internal`: Returns the search criteria of the specified addresses. You specify the address via the internal address ID (field record number/Datensatznummer).

- `external`: Returns all search criteria of the specified addresses. Here the external address numbers are used. (field client no./KdNr. Not recommended, as the external address numbers do not have to be unique.)

- `searchcriteria`: Returns the search criteria for specified search criteria IDs.

`filter`: Filter mode for search criteria. Enter the desired filter expression for parameter `filter`. With filter mode, `ids` is not mandatory, but `filter`, `sortby` and `sortorder` are.

`ids`

ARRAY. MANDATORY. Array of IDs
`listlimit`

INTEGER. Maximum number of records in the list. Default value: 20, maximum: 500.
`listoffset`

INTEGER. Offset of the list, that means from which data record onwards the list should be output.
`sortby`

STRING. Field to be sorted by. The values defined in the `_meta` array should be used as the field name.
`sortorder`

STRING. Possible values: `ASC` or `DESC`. Ascending or descending.
`filter`
OBJECT. Key: field, value: array of objects with filter expressions in the format `"status": [{"op": "=", "val": 1}]`. With `op` you specify the operator. The values defined in the `_meta` array should be used as the field name. Possible values for `op` are the following SQL operators:

```
is or =, >, <, >=, <=, != or <>, between, like, not like, in, not in
```

For the operator `like` the value % can be specified as a placeholder.

With `val` you specify the value which should be applied to the filtering. The individual filter expressions are linked with the AND operation. Multiple values or ranges for operators like IN or BETWEEN are specified in comma separated array notation.
`"internaladdressid": [{"op": ">","val": ["3000"]}], "creationdate": [{"op": "BETWEEN","val": ["2020-01-01","2021-04-01"]}]}`
See also the 2nd example below.

**Example: Reading out search criteria via search criteria ID**

```

{
	"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
	"resourceid": "",
	"identifier": "",
	"resourcetype": "searchcriterias",
	"parameters": 
	{
		"mode":"searchcriteria",
		"ids":&#x5B;29]
	}
}

```

**2nd example: Reading out search criteria via filter**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "searchcriterias",
    "parameters": 
    {
        "mode":"filter",
      "filter":{
            "internaladdressid": &#x5B;{"op": ">", "val": "3000"}],
            "status": &#x5B;{"op": "=", "val": "1"}]
        },
      "sortby":"internaladdressid",
      "sortorder":"ASC"
    }
}

```

**Response parameters:**

`*„field name“*`

Name of the search field (key) with the corresponding values.

Keys and values may differ depending on the search criteria field:

Multiselect/singleselect: *feldname* : [wert_1,…, wert_n]

Range of values (from-to fields): *range_feldname* : [wert_1, wert_2]

Normal search criteria fields: *feldname* : wert
`Range`

OPTIONAL. Special field, contains the following keys with the corresponding values:` range_plz, range_ort, range_strasse, range_hausnummer, range, range_land, range_breitengrad, range_laengengrad`
`_meta`

`internaladdressid`

Internal address ID
`externaladdressid`

External address ID (KdNr/Client no.)
`kocriterias`

Array of field names marked as a knockout criterion of a search criterion.
`advisor`

Advisor ID
`creator`

Creator ID
`creationdate`

Date of creation
`editdate`

Date and time of last edit
`status`

Status of the search criteria. 1, if active. 0, if inactive.
`publicnote`

Public note (öffentliche Bemerkung) of the search criteria.
`characteristic`

Characteristic(s) (Merkmal) of the search criteria. The following characteristics or combinations of them are possible: `manual_saved`, `automatic_created`, `address_completion`, `deactivated_by_interested_person`, `automatic_deactivated`