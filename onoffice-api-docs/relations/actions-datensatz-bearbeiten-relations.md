---
source: https://apidoc.onoffice.de/actions/datensatz-bearbeiten/relations/
title: relations
scraped: 2026-01-08T20:26:04.378Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Relations](https://apidoc.onoffice.de/api-calls-sorted-by-module/relations/) &raquo; [Modify Relations](https://apidoc.onoffice.de/actions/datensatz-bearbeiten/relations/) &raquo; Modify Relations		

	
	
		
# Modify Relations
	

	

		
**Resource type:** `relation`

This call can be used to modify additional information when a relation between the parent and child id already exists. The call can currently only be used to set the confirmation status of linked addresses for appointments via the `relationinfo` parameter.

In order to add an additional child to the parent, the &#8220;[Create relations](https://apidoc.onoffice.de/actions/datensatz-anlegen/relationen/)&#8221; call can be used. Similarly the &#8220;[Delete relations](https://apidoc.onoffice.de/actions/datensatz-loeschen/relations/)&#8221; call can be used to remove a specific child.

**Parameters:**

`parentid`

ARRAY. MANDATORY. Record IDs
`childid`

ARRAY. MANDATORY. Record IDs
`relationtype`

STRING. MANDATORY. Description of the relation. To change the `relationinfo` for the confirmation status of an appointment, relationtype `'urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:address'`must be set here.
`relationinfo`

STRING. MANDATORY. Further informations about a relation can be modified by the parameter `relationinfo`. For now, only the confirmation and feedback status of an appointment can be modified by relationinfo.

Syntax confirmation status:

`"relationinfo": {"statusTerminbestaetigung": "gecancelt"}`.

Options are: `bestätigt` (confirmed), `gesendet` (sent), `gecancelt` (cancelled), `nicht gesetzt` (not set). See also example below for usage.

Syntax feedback status:

`"relationinfo": {"statusTerminrueckmeldung": "aktiv"}`.

Options are: `aktiv` (active), `inaktiv` (inactive). See also example below for usage.

A complete list of all relations can be found in the [Relations](https://apidoc.onoffice.de/actions/informationen-abfragen/relationen/) overview.

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:create",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "relation",
        "parameters": {
         "relationtype": "urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:address",
         "relationinfo": {
               "statusTerminbestaetigung": "gecancelt",
               <span style="font-weight: 400;" data-mce-style="font-weight: 400;">"statusTerminrueckmeldung"</span><span style="font-weight: 400;" data-mce-style="font-weight: 400;">:</span> <span style="font-weight: 400;" data-mce-style="font-weight: 400;">"inaktiv"</span>
            },
            "parentid": &#x5B;
                359
            ],
            "childid": &#x5B;
                281    
            ]
        }
    }

```