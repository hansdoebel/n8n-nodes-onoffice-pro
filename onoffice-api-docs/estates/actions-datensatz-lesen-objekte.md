---
source: https://apidoc.onoffice.de/actions/datensatz-lesen/objekte/
title: objekte
scraped: 2026-01-08T20:25:03.816Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Read Estates](https://apidoc.onoffice.de/actions/datensatz-lesen/objekte/) &raquo; Read Estates		

	
	
		
# Read Estates
	

	

		
**Resource type:**` estate`


Returns a list of estates.


The parameter `filterid` can be used to restrict the selection of estates. With self-created filters from enterprise you could e.g. retrieve the last modified estates. Or you can use the parameter `filter` to specify the filter expression directly in the API call. Via `resourceid`, the data of exactly one estate can be read out. Parameter `filter` is then ignored.


In addresses, estates and other modules you can set relations like e.g. tenant, buyer, owner, contact person, estate units etc. These relations are not queried and set via estate or address calls, but this information is queried or set via the API calls “Create, Modify, Delete and Get relations”. For more information on the relations of the multi-property module, which manages property complexes, see [here](https://apidoc.onoffice.de/multi-object-module-real-estate-investments/).


To read out estate images on the &#8220;Files&#8221; tab, use the calls for images [Estate images published on Homepage](https://apidoc.onoffice.de/index.php/actions/informationen-abfragen/auf-homepage-veroeffentlichte-objektbilder/) and [Estate files](https://apidoc.onoffice.de/index.php/actions/informationen-abfragen/objektdateien/).


If you want to query all records of a certain period, use the field `geaendert_am` in the parameter `filter`. See example below.


If you work with multilingual estates, you must use the `estatelanguage` parameter if you want to retrieve other language versions of the estates. The main language in your client is the set system language (Extras >> Settings >> Basic settings, on botton left of the page). The parameter `addestatelanguage` is generally useful when working with multilingual real estates. See the example below.


You can find more information about multilingual estates via API [here](https://apidoc.onoffice.de/multilingual-estates/).


A general explanation of multilingual real estate can be found in the [online help](https://de.enterprisehilfebeta.onoffice.com/help_entries/multilingual-property/?lang=en).


**Parameters:**



`data`
ARRAY of fields that you want to read. All fields specified in the enterprise administration are valid here. 


        - If you want to read out the marketing status of an estate, you need you include `verkauft` and `reserviert` in the parameter `data`. In the response `verkauft` = 1 defines the marketing status &#8220;Sold&#8221; or &#8220;Rented&#8221;, depeding on the marketing method. `reserviert` = 1 stands for the marketing status &#8220;Reserved&#8221;.  `verkauft` = 0 and `reserviert` = 0 represent the marketing status &#8220;Open&#8221;.

        - The marketing fields of the category &#8220;Own homepage&#8221; are the boolean fields `veroeffentlichen` (Publish), `exclusive` (Exclusive), `top_angebot` (Top offer), `preisreduktion` (Price reduction), `courtage_frei` (Brokerage free), `showGoogleMap` (Show on map), `referenz` (Reference), `objekt_des_tages` (Property of the day) and `neu` (New).

        - The special field `multiParkingLot` (Stellplätze Multiparking) can now also be queried and is listed as an array in the response. See example below.

    

 
- `filterid`
INTEGER. Filter-ID. This parameter can also be used to restrict the selection of estates via estate filters created in enterprise. The filter IDs of your created filters can be read out via the API call [Filter](http://apidoc.onoffice.de/index.php/actions/informationen-abfragen/filter/). For more information about filters, see our [online help](https://de.enterprisehilfebeta.onoffice.com/help_entries/immobilienfilter/).

`filter`
OBJECT. Ignored if `resourceid` is set. Key: field, value: array of objects with filter expressions in the format `"status": [{"op": "=", "val": 1}]`. With `op` you specify the operator. Possible values for `op` are the following SQL operators:

```
is or =, >, <, >=, <=, != or <>, between, like, not like, in, not in
```


For the operator `like` the value % can be specified as a placeholder.


With `val` you specify the value which should be applied to the filtering. The individual filter expressions are linked with the AND operation. Multiple values or ranges for operators like IN or BETWEEN are specified in comma separated array notation.
`"objektart": [{"op": "IN","val": ["Zimmer","Haus"]}], "letzte_aktion ": [{"op": "BETWEEN","val": ["2020-01-01","2021-04-01"]}]}`
See also the example below.


- `listlimit`
INTEGER. Maximum number of estates in the list. Default value: 20, maximum: 500.

- `listoffset`
INTEGER. Offset of the list, that means from which data record onwards the list should be output.

- `sortby`
OBJECT. Fields to sort by. The field name is used as the key, and the type of sorting as the value. Notation: `{"kaufpreis": "ASC", "warmmiete": "DESC"}`
Possible values for sorting are ASC for ascending, DESC for descending. It is also possible to specify only field names without sort information and use `sortorder` together with parameters, e.g. `"sortby": "kaufpreis"`.

- `sortorder` 
STRING. Possible values: `ASC` or `DESC`. Ascending or descending. Only applicable if `sortby` was specified as a string without sorting information, e.g. `"sortby": "kaufpreis"`.

- `formatoutput`
BOOLEAN. Enable formatted output. If set to true, the contents of the single- and multi-select fields (column content in the enterprise administration on tabs singleselect und multiselect) instead of the field (column field in the administration on tabs singleselect und multiselect) are outputted.
Fields that represent, for example, prices, areas, quantities, are also returned with the corresponding unit (€, qm² etc). Price and area fields then respect the formatting set under &#8220;Extras >> Settings >> Basic settings >> Generel >> Representation of numerical values&#8221;.

- `estatelanguage`
STRING. Language of the object, only relevant for multi-language estates. Specified in ISO format with 3 characters, e.g. `DEU, ENG.` You cannot query properties in a different language without specifying this parameter. Only the ID is not sufficient! You can only query directly via ID if the property is in the main language.

- `outputlanguage`
STRING. Output language. E.g. the contents of the single- and multi-select fields are output in the specified language. Parameter `formatoutput` must be set to true.

- `addestatelanguage`
BOOLEAN. Adds estate language to the response. If set to true, in the result `language` is set to the A3 abbreviation of the language if it is a multilingual estate, or an empty string if the estate is in the default language.

- `addMainLangId`
BOOLEAN. Adds the estate ID of the estate in the main language to the response.

- `georangesearch`
OBJECT. Radius search. Syntax: `"georangesearch": {"country": "DEU", "zip": "52068", "radius": "10" }`. `country` and `radius` are mandatory. Instead of `zip`, also `city` can be used as center of the radius search. `zip` gives more exact results usually.  **Please note:** only 1 postcode can be entered as value for `zip`.

The second variant of the radius search is based on geocoordinates. Syntax: `"georangesearch": {"latitude": "50.123637", "longitude": "6.356564", "radius": "100" }`. See example below for usage. The values must be entered as a string. .

- `addMobileUrl`
BOOLEAN. If true, the `mobileUrl` parameter is output in the response, the link to the mobile version record.




**Example: active property with purchase price