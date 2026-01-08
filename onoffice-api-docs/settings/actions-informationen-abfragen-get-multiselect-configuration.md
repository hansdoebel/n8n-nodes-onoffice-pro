---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/get-multiselect-configuration/
title: get-multiselect-configuration
scraped: 2026-01-08T20:26:27.610Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Settings](https://apidoc.onoffice.de/api-calls-sorted-by-module/settings/) &raquo; [Get Multiselect Configuration](https://apidoc.onoffice.de/actions/informationen-abfragen/get-multiselect-configuration/) &raquo; Get Multiselect Configuration		

	
	
		
# Get Multiselect Configuration
	

	

		
**Resource type:** `multiselectconfiguration`

This API call can be used to read out the multiselect configuration for a module / field combination of all available modules. The output is sorted by position in ascending order.

**Request parameters:**

`module`

STRING. MANDATORY. Module name. Possible values: `estate`, `address`, `calendar`, `task`, `agentsLog`, `project`, `fakturaArticleAdministration`, `fakturaBookings`.
`fields`

ARRAY. MANDATORY. Array of field names. All multiselect fields specified in the enterprise administration are valid here. The field list can be read out via [Get Field Configuration](https://apidoc.onoffice.de/actions/informationen-abfragen/feldkonfiguration/).
`language`

STRING. Language in which the field labels under &#8220;fieldcontent&#8221; are to be displayed. Format: 3-digit ISO code, e.g. `"ENG"`.

**Request example**

```

{
    "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid":"",
    "identifier":"",
    "resourcetype":"multiselectconfiguration",
    "parameters": {
            "module":"address",
            "fields":&#x5B;"HerkunftKontakt", "Kontaktart"]
    }
}

```

 

**Response parameters: **

`id`

INTEGER. ID of the value.
`type`

STRING. Is always empty.
`field`

STRING. Name of the multiselect value in the database.
`fieldcontent`

STRING. Label of the multiselect value in the GUI.
`multiselectfield`

STRING. Name of the multiselect field.
`active`

BOOLEAN. Is the multiselect value active?
`fieldfilter`

BOOLEAN. Is a field filter set for the multiselect value?
`default`

Is the multiselect value the default for the multiselect field?
`position`

INTEGER. Position of the multiselect value in the order of the multiselect values.
`level`

INTEGER. Level of the multiselect value in the hierarchy of values.
`parent`

STRING. Name of the multiselect value of the parent level. Returns `field` of the parent level. `null`, if there is no parent.

**Response example**

```

...
            {
              "id": 67,
              "type": "",
              "elements": {
                "field": "Newsletter",
                "fieldcontent": "Newsletter",
                "multiselectfield": "HerkunftKontakt",
                "active": 1,
                "fieldfilter": 0,
                "default": 0,
                "position": 31,
                "level": 1,
                "parent": null
              }
            },
            {
              "id": 101,
              "type": "",
              "elements": {
                "field": "immobilienscout24_system",
                "fieldcontent": "Immobilienscout 24",
                "multiselectfield": "HerkunftKontakt",
                "active": 1,
                "fieldfilter": 0,
                "default": 0,
                "position": 32,
                "level": 2,
                "parent": "portal_system"
              }
            },
            {
              "id": 102,
              "type": "",
              "elements": {
                "field": "immonet_system",
                "fieldcontent": "Immonet",
                "multiselectfield": "HerkunftKontakt",
                "active": 1,
                "fieldfilter": 0,
                "default": 0,
                "position": 33,
                "level": 2,
                "parent": "portal_system"
              }
            },
...

```