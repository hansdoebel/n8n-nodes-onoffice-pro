---
source: https://apidoc.onoffice.de/actions/datensatz-anlegen/suchkriterien/
title: suchkriterien
scraped: 2026-01-08T20:25:36.243Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Search Criteria](https://apidoc.onoffice.de/api-calls-sorted-by-module/search-criteria/) &raquo; [Create Search criteria](https://apidoc.onoffice.de/actions/datensatz-anlegen/suchkriterien/) &raquo; Create Search criteria		

	
	
		
# Create Search criteria
	

	

		





**Resource type: **`searchcriteria`


Creates a new search criteria record if the user has the necessary rights. To create, the record ID of an address is required to which the search criterion is to be linked. The user must have at least read access to this address record.


All keys and values of a new record are passed in parameter `"data"`. All fields that can be queried via the administration in enterprise, which are active as a search criteria field, are valid. If the individual search criterion can assume &#8220;from &#8211; to&#8221; values, the field names must be supplemented with the suffixes `"__von"` or `"__bis"`. This is the case for number fields like prices and areas.


For the radius search, the field &#8220;Umkreis&#8221; must be active for search criteria. The following keys can be used: `range_plz, range_ort, range_strasse, range_hausnummer, range, range_land`. Note: Please enter all range values as a string, as e.g. zip codes can also contain a leading 0 (and letters in other countries).


The internal and public comment can be set by `"krit_bemerkung":"xyz"` und `"krit_bemerkung_oeffentlich":"xyz"`.


**Parameter:**



- `adressid`
Record ID of the linked address

`data`
OBJECT. All fields that can be queried via the administration in enterprise, which are active as a search criteria field, are valid. Only the fields specified are set in the search criterion.

The `advisor` field sets the advisor of the search criterion. The ID of the user must be specified, which can be retrieved via [Get users](https://apidoc.onoffice.de/actions/informationen-abfragen/get-users/). If omitted, the currently logged in user will be set as the advisor.





**Example:**


```


{
	"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:create",
	"resourceid": "",
	"identifier": "",
	"resourcetype": "searchcriteria",
        "parameters": {
            "addressid":"153",
            "data": {
                "advisor":21,
                "objektart":"haus",
                "vermarktungsart":"kauf",
                "range_plz":"52068",
                "range_ort":"Aachen",
                "range_strasse":"Charlottenburger Allee",
                "range_hausnummer":"5",
                "range":"100",
                "kaufpreis__von":"50000",
                "kaufpreis__bis":"100000"
            }
        }
}

```