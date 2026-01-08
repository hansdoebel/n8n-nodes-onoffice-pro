---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/aktionsart-und-typ/
title: aktionsart-und-typ
scraped: 2026-01-08T20:26:28.661Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Settings](https://apidoc.onoffice.de/api-calls-sorted-by-module/settings/) &raquo; [Get Kind of action and Type of action](https://apidoc.onoffice.de/actions/informationen-abfragen/aktionsart-und-typ/) &raquo; Get Kind of action and Type of action		

	
	
		
# Get Kind of action and Type of action
	

	

		
**Resource type:** `actionkindtypes`

For reading the kind of action and type of action. Each kind of action only includes specific types of action.

**Parameters:**

`lang`

Language for translation of the label
`allowAutomaticTypesForActionKind`

ARRAY. An array of action kinds. Adds the automatic system types to the results for the specified action kinds. These entries are normally filtered out by default.

**Example:**

```

 {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "actionkindtypes",
        "parameters": {
            "lang": "ENG"
        }
 }

```

**Response**

Example of a record with parameter `lang` = `ENG`:

```

...
{
    id: "0",
    type: "actionkind",
    elements: {
        key: "Newsletter",
        label: "Newsletter",
        types: {
            bestellt: "ordered",
            nicht bestellt: "not ordered"
        },
        default: ""
    }
},
...

```