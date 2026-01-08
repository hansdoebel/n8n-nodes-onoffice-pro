---
source: https://apidoc.onoffice.de/actions/datensatz-anlegen/adressen/
title: adressen
scraped: 2026-01-08T20:25:24.896Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Addresses](https://apidoc.onoffice.de/api-calls-sorted-by-module/addresses/) &raquo; [Create Addresses](https://apidoc.onoffice.de/actions/datensatz-anlegen/adressen/) &raquo; Create Addresses		

	
	
		
# Create Addresses
	

	

		
**Resource type: **`address`

Creates a new address record if the user has the necessary rights.

The parameters of this action include all fields active in enterprise for address records. You can look up the field names in the administration of onOffice enterprise (Extras->Settings->Administration->Tab Input fields->Column field).

Contact details (telephone, fax, email) are created via fixed parameters.

In addresses, estates and other modules you can set relations like e.g. tenant, buyer, owner, contact person, estate units etc. These relations are not queried and set via estate or address calls, but this information is queried or set via the API calls “Create, Modify, Delete and Get relations”.

Note: Record number (Datensatznummer) and customer number (Kundennummer) are 2 different fields in addresses. The record number is the ID to be specified for the API.

Note: Mobile numbers are automatically set to the type &#8220;mobile&#8221;, even if &#8220;phone&#8221; was specified.

**Parameter:**

- *`(individually)`*

`phone`

Normal phone entry
`phone_private`

Telephone entry with type &#8220;private&#8221;
`phone_business`

Telephone entry with type &#8220;business&#8221;
`mobile`

Telephone entry with type &#8220;mobile&#8221;
`default_phone`

Default phone number. Sets one phone number as the main number. It must be set to the value of one of the phone numbers.
`fax`

Normal fax entry
`fax_private`

Fax entry with type &#8220;private&#8221;
`fax_business`

Fax entry with type &#8220;business&#8221;
`default_fax`

Default fax number. Sets one fax number as the main number. It must be set to the value of one of the fax numbers.
`email`

Normal email entry
`email_business`

Email entry with type &#8220;business&#8221;
`email_private`

Email entry with type &#8220;private&#8221;
`default_email`

Default email address. Sets one email address as the main address. It must be set to the value of one of the email addresses.
`Benutzer`

STRING. Field &#8220;Betreuer&#8221; (&#8220;Support&#8221;). You need to specify the user name to set &#8220;Betreuer&#8221;. The user names can be found by queriying &#8220;Name&#8221; in the &#8220;data&#8221; parameter with the [ Read user](https://apidoc.onoffice.de/index.php/actions/datensatz-lesen/user/) call. In enterprise the user names are found under Extras >> Settings >> User.
`Status`

TINYINT(1). &#8220;Active / Aktiv&#8221; = 1, &#8220;Archive / Archiviert&#8221; = 0.
`newsletter_aktiv`

TINYINT(1). &#8220;No&#8221; = 0, &#8220;Yes&#8221; = 1, &#8220;Cancellation&#8221; = 2, &#8220;Double Opt-In pending&#8221; = 3, &#8220;not specified&#8221; = 4.
`Land`

STRING. The country can be specified by name, e.g. &#8220;Frankreich&#8221;. Or as [ISO 3166-1 alpha-3 value ](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3). The country abbreviations can also be queried via [this call](https://apidoc.onoffice.de/single-and-multiselect-values/).
`checkDuplicate`

BOOLEAN. Default: `false`. If `true`, a duplicate check is performed for the field &#8220;email&#8221;. Without the parameter `noOverrideByDuplicate`, the data of the already existing address is updated or overwritten. If there are several duplicates, the duplicate with the lowest ID will be updated.A duplicate check of the entire address database with further criteria such as name, postal code etc. can be carried out in enterprise. For further information on resolving duplicates visit the online help.

`noOverrideByDuplicate`

BOOLEAN. Default: `false`. If `true`, the duplicate check with parameter `checkDuplicate` does not update or overwrite the data of the already existing address.
`outlookSync`

DEPRECATED. BOOLEAN. Sets `outlookSync`for the logged in user. In order to set `outlookSync`for other users, please use [Create relations](https://apidoc.onoffice.de/actions/datensatz-anlegen/relationen/) with the relation type `urn:onoffice-de-ns:smart:2.5:relationTypes:address:user:sync`. The field is set per user and states whether the address should be synced for the user. To unset use [Delete Relations](https://apidoc.onoffice.de/actions/datensatz-loeschen/relations/).

**Example:**

```

{
	"actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:create",
	"resourcetype":"address",
	"resourceid":"",
	"identifier":"",
	"parameters": {
		"Anrede":"Herr",
		"Vorname":"Max",
		"Name":"Mustermann",
		"email":"m.mustermann@onoffice.de",
		"phone":"0241 12345",
		"phone_business":"0241 56789",
		"default_phone":"0241 12345",
		"Plz":"52074",
		"Ort":"Aachen",
		"Benutzer":"theotest",
		"HerkunftKontakt":&#x5B;"Suchmaschine","Newsletter"]
	}
}

```

**Response:**

```

...
"response":{
    "results":&#x5B;
        {
            "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:create",
            "resourceid":"",
            "resourcetype":"address",
            "identifier":"",
            "data":{
                "meta":{
                    "cntabsolute":null
                },
                "records":&#x5B;
                    {
                        "id":181,
                        "type":"address",
                        "elements":&#x5B;
                        ]
                    }
                ]
            },
            "status":{
                "errorcode":0,
                "message":"OK"
            }
        }
    ]
 }
...

```