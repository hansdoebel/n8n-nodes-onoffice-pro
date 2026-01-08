---
source: https://apidoc.onoffice.de/actions/datensatz-bearbeiten/objekte/
title: objekte
scraped: 2026-01-08T20:25:05.912Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Modify Estates](https://apidoc.onoffice.de/actions/datensatz-bearbeiten/objekte/) &raquo; Modify Estates		

	
	
		
# Modify Estates
	

	

		

**Resource type:** `estate`





With this API call estates can be modified. If you use the multi-language module, you can write the estate language-dependent via the parameter `estatelanguage`.


Further information on the multi-language module is available [here](https://de.enterprisehilfe.onoffice.com/help_entries/multilingual-property/?lang=en).


You can find more information about multilingual estates via API [here](https://apidoc.onoffice.de/multilingual-estates/).


In addresses, estates and other modules you can set relations like e.g. tenant, buyer, owner, contact person, estate units etc. These relations are not queried and set via estate or address calls, but this information is queried or set via the API calls “Create, Modify, Delete and Get relations”.







**Parameters:**








`data`
ARRAY


- `*„field name“* (individually)`
Name of the target field (key) and value to set (value). The possible field names can be read out via [&#8220;Get field configuration&#8221;](https://apidoc.onoffice.de/actions/informationen-abfragen/feldkonfiguration/). The following fields are system fields whose values are set automatically: `Id` (data record number), `erstellt_am` (created on), `erstellt_von` (created by), `provisionsbetrag` (commission amount (internal)), `summe_innenprovision` (Total listing agent&#8217;s brokerage (internal)), `summe_aussenprovision` (Total buyer&#8217;s agent brokerage (internal)).




- `benutzer`
INTEGER. Field &#8220;Betreuer&#8221; (&#8220;Support&#8221;). You need to specify the user ID to set &#8220;Betreuer&#8221;. The user id can be retrieved with the [ Read user](https://apidoc.onoffice.de/index.php/actions/datensatz-lesen/user/) call.




- `verkauft`
TINYINT(1) . Value `1` sets the field `marketing status` on value `sold` or `rented`, depending on the value of the field `marketing method`.




- `reserviert`
TINYINT(1) . Value `1` sets the field `marketing status` on value `reserved`.




- `Land`
country as [ISO 3166-1 alpha-3 value ](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)




- `status`
TINYINT(1). &#8220;Active / Aktiv&#8221; = 1, &#8220;Pending / Inaktiv&#8221; = 2, &#8220;Archive / Archiviert&#8221; = 0.












**Beispiel: Modify estate**







```


            {
                "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
                "resourceid":"116",
                "identifier":"",
                "resourcetype":"estate",
                "parameters":{
                    "data":{
                        "objektart":"haus",
                        "nutzungsart":"wohnen",
                        "vermarktungsart":"kauf",
                        "objekttyp":"einfamilienhaus",
                        "plz":52068,
                        "ort":"Aachen",
                        "land":"DEU",
                        "heizungsart":&#x5B;"ofen","fussboden"],
                        "kaufpreis":200000
                    }
                }
            }

```