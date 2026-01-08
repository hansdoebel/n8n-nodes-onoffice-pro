---
source: https://apidoc.onoffice.de/access-token-generieren/
title: access-token-generieren
scraped: 2026-01-08T20:24:39.778Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API Structure and General Information](https://apidoc.onoffice.de/structure-and-general-information/) &raquo; [Generate Access Tokens](https://apidoc.onoffice.de/access-token-generieren/) &raquo; Generate Access Tokens		

	
	
		
# Generate Access Tokens
	

	

		
To use the onOffice API, it is necessary to authenticate with an access token.

An access token is an alphanumeric string that is appended to API requests to authenticate the application to the system and to allow the transaction.

The token can be generated in the user settings of the API user (Extras-> Settings-> User). After a client ID has been generated for the user, a secret and the API token are generated for the user. **Please note the secret immediately, as it will not be displayed later.**

**Please be sure not to share your generated secret** used for the requests of the API user. If this happens accidentally be sure to generate a new secret immediately and adapt your code accordingly. If necessary, you can generate a new secret and token for the API user via the button &#8220;generate new secret and API token&#8221;.

[](https://apidoc.onoffice.de/wp-content/uploads/2025/01/API-User_EN.png)