---
source: https://apidoc.onoffice.de/actions/datensatz-loeschen/suchkriterien/
title: suchkriterien
scraped: 2026-01-08T20:25:38.314Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Search Criteria](https://apidoc.onoffice.de/api-calls-sorted-by-module/search-criteria/) &raquo; [Delete Search criteria](https://apidoc.onoffice.de/actions/datensatz-loeschen/suchkriterien/) &raquo; Delete Search criteria		

	
	
		
# Delete Search criteria
	

	

		
**Resource type:** `searchcriteria`

Delete search criteria.

To delete a search criterion, enter the search criterion ID as `resourceid` and as the action ID `"urn:onoffice-de-ns:smart:2.5:smartml:action:delete"`.

**Example: Delete search criterion**

```

    {
        "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:delete",
        "resourceid":32,
        "resourcetype":"searchcriteria",
        "identifier":"",
        "parameters": {
        }
    }

```