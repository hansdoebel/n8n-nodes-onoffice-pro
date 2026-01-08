---
source: https://apidoc.onoffice.de/actions/datensatz-loeschen/relations/
title: relations
scraped: 2026-01-08T20:26:05.419Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Relations](https://apidoc.onoffice.de/api-calls-sorted-by-module/relations/) &raquo; [Delete Relations](https://apidoc.onoffice.de/actions/datensatz-loeschen/relations/) &raquo; Delete Relations		

	
	
		
# Delete Relations
	

	

		
**Resource type:** `relation`

With this API call you can delete a relation. The parent ID and the child ID of the relation to be deleted have to be specified as parameters. See [here](https://apidoc.onoffice.de/api-calls-sorted-by-module/relations/) for more information on relations and which kind of relations exist. Many relations cannot be deleted.

**Parameters:**

`parentid`

INTEGER. parent ID (e.g. address ID, estate ID, appointment ID)
`childid`

INTEGER. child ID e.g. address ID, estate ID, appointment ID)
`relationtype`

STRING. Description of the link. Important relation types in enterprise:

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:interested'` An estate is assigned to the address of an interested party.

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:estateUnit'` A base object is assigned estate units.

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:address'` An appointment is linked to an address.

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:estate'` An appointment is linked to an estate.

- `'urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:file:attachment'` An agents log entry is assigned a file attachment.

- Buyer: `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:buyer'`

- Tenant: `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:renter'`

- Owner: `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:owner'`

- Contact person(only brokers): `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:contactPerson'`

- All contact persons: `'urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:contactPersonAll'`

- onOffice sync: `'urn:onoffice-de-ns:smart:2.5:relationTypes:address:user:sync'`

Removes the checkmark from the field `outlookSync` for this address for the specified user.

 

**Example: Delete a relation / unlink an address from an appointment**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:delete",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "relation",
    "parameters": {
        "relationtype": "urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:address",
        "parentid": 671,
        "childid": 153
    }
}

```

If successful, the response is `success`.