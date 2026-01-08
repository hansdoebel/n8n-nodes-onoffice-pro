---
source: https://apidoc.onoffice.de/actions/aktionen-ausfuehren/adressvervollstaendigung-versenden/
title: adressvervollstaendigung-versenden
scraped: 2026-01-08T20:25:31.097Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Addresses](https://apidoc.onoffice.de/api-calls-sorted-by-module/addresses/) &raquo; [Do Send Address completion](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/adressvervollstaendigung-versenden/) &raquo; Do Send Address completion		

	
	
		
# Do Send Address completion
	

	

		
**Resource type:** `sendaddresscompletion`

Send a link to invoke the address completion via e-mail. The receiver is determined by the address parameter. An email address can be assigned to the API user via the basic settings, tab &#8220;E-Mail&#8221;.

**Parameters:**

`addressId`

		MANDATORY. Target record and receiver of the mail.
`mode`

		MANDATORY. Mode of address completion. Allowed values:

		`modus1` – Address completion of the address data record

		`modus2` – Address completion of the address data record + search criteria
`emailidentity`

		Email identity. If the parameter &#8220;emailidentity&#8221; is omitted, the &#8220;standard sending email address&#8221; must be explicitly set to an email address for the API user in the user settings, tab &#8220;E-Mail&#8221;.

**Example: Send address completion**

```


{
        "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid":"",
        "identifier":"",
        "resourcetype":"sendaddresscompletion",
        "parameters":
        {
           "addressId":160,
           "mode":"modus1",
           "emailidentity":"max.mustermann@onoffice.de"
        }
}

```