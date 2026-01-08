---
source: https://apidoc.onoffice.de/actions/datensatz-bearbeiten/suchkriterien/
title: suchkriterien
scraped: 2026-01-08T20:25:37.263Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Search Criteria](https://apidoc.onoffice.de/api-calls-sorted-by-module/search-criteria/) &raquo; [Modify Search criteria](https://apidoc.onoffice.de/actions/datensatz-bearbeiten/suchkriterien/) &raquo; Modify Search criteria		

	
	
		
# Modify Search criteria
	

	

		
**Resource type:** `searchcriteria`

Search criteria can be edited with this API call.

**Parameters:**

`data`

 	OBJECT

`*„field name“* (individually)`. Name of the target field (key) and value to set (value). Which fields are available as search criteria can be viewed in the administration on the &#8220;search criteria&#8221; tab. On the &#8220;input fields&#8221; tab, you will find the corresponding field names for the fields that you must use for the API call. Only the fields specified are set in the search criterion.

- `advisor` sets the advisor of the search criterion. The ID of the user must be specified, which can be retrieved via [Get users](https://apidoc.onoffice.de/actions/informationen-abfragen/get-users/). If omitted, the currently logged in user will be set as the advisor.

In addition, even more properties of a search criterion can be set.

You can specify the status (active/inactive) of a search criterion with `"sys_status":"1"` or `"sys_status":"0"`.

Until when the search criterion should be valid is set with `"sysExpiryDate":"yyyy-mm-dd"`.

The internal and public comment can be set by `"krit_bemerkung":"xyz"` und `"krit_bemerkung_oeffentlich":"xyz"`. 

Which fields are to be considered KO criteria, is specified as an array of fields in the notation `"sys_ko":["kaufpreis","plz","objektart"]`.

For most number fields, you can specify a range (from &#8211; to). You can specify this range in two ways. Either notated as `"kaufpreis__von":"250000"` and

`"kaufpreis__bis":"500000"` or as a range`"kaufpreis":["250000", "500000"]`. 

If the &#8220;radius&#8221; field is active in the search criteria administration, you can define a radius search. Via `"range":"50"` you can enter the radius in kilometers. The destination of the radius search is defined via `range_plz, range_ort, range_strasse, range_hausnummer, range_land`. From this information, longitude and latitude are generated, on which the radius search is based. Note: Please enter all range values as a string, as e.g. zip codes can also contain a leading 0 (and letters in other countries).

**Example: Edit search criterion**

```

 {
        "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
        "resourceid":210,
        "resourcetype":"searchcriteria",
        "identifier":"",
        "parameters": {
                   "data": {
                        "advisor":21,
                        "objektart":"haus",
                        "objekttyp":&#x5B;"villa","schloss"],
                        "ort":"Aachen",
                        "vermarktungsart":"kauf",
                        "kaufpreis__von":"2500000",
                        "kaufpreis__bis":"5000000",
                        "sys_ko":&#x5B;"kaufpreis","ort","objektart"], 
                        "sysExpiryDate":"2017-11-27",
                        "range":"50",
                        "range_plz":"52074"       
                   }
        }
}

```