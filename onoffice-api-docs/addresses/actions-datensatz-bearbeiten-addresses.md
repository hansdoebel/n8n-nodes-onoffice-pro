---
source: https://apidoc.onoffice.de/actions/datensatz-bearbeiten/addresses/
title: addresses
scraped: 2026-01-08T20:25:25.976Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Addresses](https://apidoc.onoffice.de/api-calls-sorted-by-module/addresses/) &raquo; [Modify Addresses](https://apidoc.onoffice.de/actions/datensatz-bearbeiten/addresses/) &raquo; Modify Addresses		

	
	
		
# Modify Addresses
	

	

		
**Resource type:** `address`

When editing an address, the same parameters are valid, which are valid when reading an address.

To change the contact data of an address record (`telephone, fax, email`) additional parameters are necessary (see examples below).

In addresses, estates and other modules you can set relations like e.g. tenant, buyer, owner, contact person, estate units etc. These relations are not queried and set via estate or address calls, but this information is queried or set via the API calls “Create, Modify, Delete and Get relations”.

The parameters of this action include all fields active in enterprise for address records. You can look up the field names in the administration of onOffice enterprise (Extras->Settings->Administration->Tab Input fields->Column field).

Note: Record number (Datensatznummer) and customer number (Kundennummer) are 2 different fields in addresses. The record number is the ID to be specified for the API.

**Parameters:**

- `*„field name“* (individually)`

Name of the target field (key) and value to set (value).

`Benutzer`

STRING. Field &#8220;Betreuer&#8221; (&#8220;Support&#8221;). You need to specify the user name to set &#8220;Betreuer&#8221;. The user names can be found by queriying &#8220;Name&#8221; in the &#8220;data&#8221; parameter with the [ Read user](https://apidoc.onoffice.de/index.php/actions/datensatz-lesen/user/) call. In enterprise the user names are found under Extras >> Settings >> User.
`Status`

TINYINT(1). &#8220;Active / Aktiv&#8221; = 1, &#8220;Archive / Archiviert&#8221; = 0.
`newsletter_aktiv`

TINYINT(1). &#8220;No&#8221; = 0, &#8220;Yes&#8221; = 1, &#8220;Cancellation&#8221; = 2, &#8220;Double Opt-In pending&#8221; = 3, &#8220;not specified&#8221; = 4.

**Parameters (contact data):**

- `*„Type of contact data“*`

`'phone'` for normal telephone numbers,

`'phone_business'` for business phone numbers,

`'phone_private'` for private phone numbers,

`'mobile'` for mobile phone numbers,

`'email'`, `'email_private'`, `'email_business '` for email addresses,

`'fax'`, `'fax_private'`, `'fax_business'` for fax numbers

`action`

Type of change of contact data record. See examples of use below.

`add`

Add a contact data record.
`modify`

Modify a contact data record. Identification based on the old value. It must be ensured that the value is unique, otherwise the action is aborted with an error.
`delete`

Delete a contact data record. Identification based on the old value. It must be ensured that the value is unique, otherwise the action will be aborted with an error.

`oldvalue`

Old value of contact data record for identification.
`newvalue`

New value of the contact record.
`default`

Sets the entry as the default entry. Values `true` or `false`.
`Land`

STRING. Country. The country must be specified by name, e.g. &#8220;Frankreich&#8221;, &#8220;Deutschland&#8221; etc. The country names can also be queried via this [call](https://apidoc.onoffice.de/actions/informationen-abfragen/single-and-multiselect-values/).

**Example: Modify address data**

```

	{
		"actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
		"resourceid":32,
		"resourcetype":"address",
		"identifier":"",
		"parameters":{
			"Vorname":"Peter",
			"Name":"Lustig",
			"Strasse":"Hauptstr. 2",
			"Land":"Deutschland",
			"Geburtsdatum":"2017-01-31 12:00:00",
			"newsletter_aktiv":"0",
			"HerkunftKontakt":&#x5B;"Suchmaschine","Newsletter"]
		}
	}

```

**Example: Modify phone number**

ResourceID is the ID of the address record, oldvalue is the number to change. Default sets the number as main number.

```

    {
        "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
        "resourceid":32,
        "resourcetype":"address",
        "identifier":"",
        "parameters":{
			"phone":{"action":"modify", "oldvalue":"0049 641 43681-272", "newvalue":"0049 244 48453-311", "default":true}
        }
    }

```

**Example: Add an email address**

```

    {
        "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
        "resourceid":6,
        "resourcetype":"address",
        "identifier":"",
        "parameters":{
			"email":{"action":"add", "newvalue":"max.mustermann982@beispiel.de"}
        }
    }

```

**Example: Delete fax number**

```

    {
        "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
        "resourceid":6,
        "resourcetype":"address",
        "identifier":"",
        "parameters":{
			"fax":{"action":"delete", "oldvalue":"02419461785"}
        }
    }

```