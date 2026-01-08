---
source: https://apidoc.onoffice.de/actions/aktionen-ausfuehren/newsletter-registration/
title: newsletter-registration
scraped: 2026-01-08T20:25:32.118Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Addresses](https://apidoc.onoffice.de/api-calls-sorted-by-module/addresses/) &raquo; [Do Newsletter registration](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/newsletter-registration/) &raquo; Do Newsletter registration		

	
	
		
# Do Newsletter registration
	

	

		
**Resource type:** `registerNewsletter`

Carries out a newsletter registration and sets the field &#8220;Newsletter&#8221; in an address. You need to specify an address ID as `resourceid`. 

**Parameters:**

`register`

		MANDATORY. Boolean.

`true` sets the field &#8220;Newsletter&#8221; in an adress to &#8220;Yes&#8221; or &#8220;Double Opt-In pending&#8221;. 

In case the option &#8220;activate Double Opt-In&#8221; is active, `true` will set the field &#8220;Newsletter&#8221; to &#8220;Double Opt-In pending&#8221;.

The receipient gets an email, where he can confirm the newsletter registration by clicking a link. For that, an email template containing the macro `_Newsletterlink(doilink)` must be set. You can adjust these settings in the &#8220;Basic Settings&#8221; menu on the tab &#8220;General&#8221; in the category &#8220;Newsletter&#8221;.

`false` sets the field &#8220;Newsletter&#8221; to &#8220;Cancellation&#8221;.

Corresponding activities with the action type &#8220;Newsletter->ordered&#8221;, &#8220;Newsletter->not ordered&#8221; or &#8220;Newsletter->sent Double Opt-In&#8221; are written into the adress activities. 

You can find more information about [newsletters](https://de.enterprisehilfe.onoffice.com/help_entries/newsletter/?lang=en) in our online help.

**Example: Newsletter registration**

```

{
	"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
	"resourceid": "149",
	"identifier": "",
	"resourcetype": "registerNewsletter",
	"parameters": {
            "register": true
	}
}

```