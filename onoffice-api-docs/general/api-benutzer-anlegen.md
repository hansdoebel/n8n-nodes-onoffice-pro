---
source: https://apidoc.onoffice.de/api-benutzer-anlegen/
title: api-benutzer-anlegen
scraped: 2026-01-08T20:24:38.763Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API Structure and General Information](https://apidoc.onoffice.de/structure-and-general-information/) &raquo; [Create API User](https://apidoc.onoffice.de/api-benutzer-anlegen/) &raquo; Create API User		

	
	
		
# Create API User
	

	

		
A new API user can be created via the user settings (Extras-> Settings-> User -> Create user via + icon -> Save as: &#8220;API user&#8221;).

[](https://apidoc.onoffice.de/wp-content/uploads/2025/01/API_Create_user_EN.png)

In addition to the basic data, settings and rights can be set on the corresponding tabs for the API user as you do for every normal user. The API user can only read out the data and perform the actions to which he is authorized. Think about for what you want to use the API user and assign the rights accordingly. Write and delete rights should be awarded only if necessary, and not too generously.

If the right “Can only see addresses/properties published on the website” is set, properties and/or addresses must be published under “Properties >> Marketing >> Own website: Publish” for the API user to read them.

### Assign mailboxes:

[](https://apidoc.onoffice.de/wp-content/uploads/2025/01/oo-api-adressverwaltung.png)

To send emails with your API user, assign the API user to an e-mail inbox. This can be done under Extras-> Settings -> Basic Settings -> Email.

[](https://apidoc.onoffice.de/wp-content/uploads/2024/07/Screenshot_Email.png)

On the tab &#8220;E-Mail&#8221; in the user settings you can now make advanced e-mail settings for your API user.

See the section [Generate access token](https://apidoc.onoffice.de/access-token-generieren/) about how to generate a new secret and token.

For more information about the API user, refer to the [enterprise online help.](https://de.enterprisehilfe.onoffice.com/category/additional-modules/api-modul-en/?lang=en)

### API user log:

In onOffice enterprise under &#8220;Extras >> Log&#8221; you can also select API users in the &#8220;User&#8221; field and view their logging.

**NOTE FOR MARKETPLACE PROVIDERS:**

You do not need to create your own API users for your service. The API users for your service in the customer versions are created automatically when the customers activate your service. The necessary information is transferred in the process. You can find detailed information in the [Marketplace documentation](https://www.marketplacedoc.onoffice.de/freischaltung/#Freischaltung1).