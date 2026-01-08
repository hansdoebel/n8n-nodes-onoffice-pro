---
source: https://apidoc.onoffice.de/actions/datensatz-loeschen/files/
title: files
scraped: 2026-01-08T20:25:11.191Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Delete Estate Files](https://apidoc.onoffice.de/actions/datensatz-loeschen/files/) &raquo; Delete Files		

	
	
		
# Delete Files
	

	

		
**Resource type:** `file`

With this API call you can delete files from the modules properties, addresses, agents log and tasks.

**Parameters:**

`relationtype`. MANDATORY. STRING. Module of the file. Possible values: `estate`, `address`, `agentsLog`, `task`.
`parentid`. MANDTORY. INTEGER. ID of the property record whose files you want to delete.
`fileId`. MANDATORY. INTERGER. File ID of the file to be deleted.

**Example: Delete a file**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:delete",
        "resourceid": null,
        "resourcetype": "fileRelation",
        "identifier": "",
        "parameters": {
            "fileId": 3185,
            "parentid": 6227,
            "relationtype": "estate"
        }
    }

```

If successful, the response is `success`.