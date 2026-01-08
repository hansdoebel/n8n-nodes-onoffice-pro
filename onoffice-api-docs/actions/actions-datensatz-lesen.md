---
source: https://apidoc.onoffice.de/actions/datensatz-lesen/
title: datensatz-lesen
scraped: 2026-01-08T20:26:52.679Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by action and action IDs](https://apidoc.onoffice.de/actions/) &raquo; [Read record](https://apidoc.onoffice.de/actions/datensatz-lesen/) &raquo; Read record		

	
	
		
# Read record
	

	

		
**Action ID:** `urn:onoffice-de-ns:smart:2.5:smartml:action:read`

Retrieve a data record. The requested record can be identified by the resource ID. If this information is not given, a limited list of all data records with the requested fields will be returned for addresses, objects and agents log entries. The limit only applies in this case and is set with the parameter `"listlimit"`. Default is 20 if no listlimit is specified. The maximum is 500 entries.