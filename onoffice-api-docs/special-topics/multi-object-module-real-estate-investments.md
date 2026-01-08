---
source: https://apidoc.onoffice.de/multi-object-module-real-estate-investments/
title: multi-object-module-real-estate-investments
scraped: 2026-01-08T20:26:48.539Z
---

[Home](https://apidoc.onoffice.de) &raquo; [Various special topics](https://apidoc.onoffice.de/various-special-topics/) &raquo; [Multi-property module / property complexes](https://apidoc.onoffice.de/multi-object-module-real-estate-investments/) &raquo; Multi-property module / property complexes		

	
	
		
# Multi-property module / property complexes
	

	

		
If you work with property complexes that consist of a base property and assigned units, several calls are involved on the API side.

Property investments, office complexes, shopping centers, etc. – or parts of them – can be easily managed with the multi-property module.

A base property is created for the property investment and then the corresponding units are created in it.

Please note that the onOffice multi-property module is a paid add-on module. Please contact your sales contact person for more information.

For general information on the multi-property module, see the [ online help](https://de.enterprisehilfebeta.onoffice.com/category/additional-modules/multi-object-modul/?lang=en).

All involved API calls and the workflow for property complexes are described below:

The checkbox field &#8220;stammobjekt&#8221; (base property) in a property determines whether a property is a base object. 

1.) Example request to set base property:

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:create",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "estate",
        "parameters": {
            "data": {
                "stammobjekt": true
            }
        }
    }

```

2.) Example request to assign units to the base property. Use the [create relation](https://apidoc.onoffice.de/actions/datensatz-anlegen/relationen/) call for this relationship.

The base property is specified as the parent ID, the unit as the child ID. 

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:create",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "relation",
        "parameters": {
            "parentid": 4629,
            "childid": 4469,
            "relationtype": "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:estateUnit"
        }
    }

```

3.) Get IDs of all units of the base property with the [read relation](https://apidoc.onoffice.de/actions/informationen-abfragen/relationen/) call. You can then use the IDs from the response to continue working in the property calls. Vice versa you can also specify the child IDs to get the parent IDs in the relation calls.

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "idsfromrelation",
        "parameters": {
            "relationtype": "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:estateUnit",
            "parentids": &#x5B;
                4629
            ]
        }
    }

```

The relation `urn:onoffice-de-ns:smart:2.5:relationTypes:complex:estate:units` does the same as `urn:onoffice-de-ns:smart:2.5:relationTypes:estate:estateUnit`.

4.) Note that there is no &#8220;Modify&#8221; call for the base property / units relation, but you can do the same with &#8220;Delete&#8221; and then &#8220;Create&#8221;.

5.) Example request for [deleting](https://apidoc.onoffice.de/actions/datensatz-loeschen/relations/) the relation:

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:delete",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "relation",
        "parameters": {
            "relationtype": "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:estateUnit",
            "parentid": 2533,
            "childid": 2715
        }
    }

```