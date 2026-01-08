---
source: https://apidoc.onoffice.de/actions/datensatz-anlegen/relationen/
title: relationen
scraped: 2026-01-08T20:26:03.347Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Relations](https://apidoc.onoffice.de/api-calls-sorted-by-module/relations/) &raquo; [Create Relations](https://apidoc.onoffice.de/actions/datensatz-anlegen/relationen/) &raquo; Create Relations		

	
	
		
# Create Relations
	

	

		
**Resource type:** `relation`

Hereby relations between data sets can be generated. In enterprise, there are many ways to link records together.

It is possible to create 1:n relationships in both directions, but n:n relationships are not possible. I.e. multiple record IDs can be specified as an array.

Each relation type determines which of the records are the &#8220;parent&#8221; records and which are the &#8220;child&#8221; records. The names of the constants always contain first the name of the parent record, then the child record. Last element is a short description of the relation. The type of relation is given according to the following scheme:

`urn:onoffice-de-ns:smart:2.5:relationTypes:<parent-type>:<child-type>:<description>`

As a concrete example, consider the possible relations between an estate and an address.

**Parameters:**

`parentid`

ARRAY. Estate IDs
`childid`

ARRAY. Address IDs
`relationtype`

STRING. Description of the link. The possible links between an estate and an address are:

- Buyer: `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:buyer'`

- Tenant: `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:renter'`

- Owner: `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:owner'`

- Contact person(only brokers): `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:contactPerson'`

- All contact persons: `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:contactPersonAll'`

`relationinfo`

STRING. Further informations about a relation can be set by the parameter `relationinfo`. For now, only the confirmation status of an appointment can be set by relationinfo.

Syntax: `"relationinfo": {"statusTerminbestaetigung": "gecancelt"}`.

Options are: `bestätigt` (confirmed), `gesendet` (sent), `gecancelt` (cancelled), `nicht gesetzt` (not set).

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:create",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "relation",
        "parameters": {
            "relationtype": "urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:address",
            "parentid": &#x5B;
                2909
            ],
            "childid": &#x5B;
                10821,
                10823
            ]
        }
    }

```

A complete list of all relations can be found in the [Relations](https://apidoc.onoffice.de/api-calls-sorted-by-module/relations/) overview.  Not all relations from there also work in the Create and Modify call.

Other important relation types are for example:

`'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:interested'` An estate is assigned to the address of an interested party.

`'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:estateUnit'` A base object is assigned estate units.

`'urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:address'` An appointment is linked to an address.

`'urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:estate'` An appointment is linked to an estate.

`'urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:file:attachment'` An agents log entry is assigned a file attachment.

`'urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:address'` An agents log entry is assigned an address.

`'urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:estate'` An agents log entry is assigned an object.

`'urn:onoffice-de-ns:smart:2.5:relationTypes:address:contact:address'` Sets main and 2nd level contacts on the relations tab for addresses. Parent is main contact, child is 2nd level contact.

`'urn:onoffice-de-ns:smart:2.5:relationTypes:address:user:sync'` address-user (address = parent, user = child). Set the field `onOfficeSync` for the specified addresses for the specified users.

For more information on the relations of the multi-property module, which manages property complexes, see [here](https://apidoc.onoffice.de/multi-object-module-real-estate-investments/).