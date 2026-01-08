---
source: https://apidoc.onoffice.de/fehler/
title: fehler
scraped: 2026-01-08T20:24:41.827Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API Structure and General Information](https://apidoc.onoffice.de/structure-and-general-information/) &raquo; [Errors](https://apidoc.onoffice.de/fehler/) &raquo; Errors		

	
	
		
# Errors
	

	

		
If you use the SDK, you can use the method `getErrors()` from the class `onOfficeSDK.php` to get the error messages.

If an error occurs while processing an onOffice API request, the onOffice API response changes as follows:

Status code has value …

- 200: The request was successful.

400 „not authenticated“:

- Request was made without a valid token.

- User authentication is not valid.

500 „server error“:

- General error when preparing or processing the request.

You can find more information on the status code [here](https://apidoc.onoffice.de/onoffice-api-response/response-elemente/status/).

Attribute `„errorcode“` contains the numerical error code.

- Error &#8220;97&#8221; indicates an error in the processing of the action.

- Other errors indicate invalid JSON, an invalid request structure or other error states.

- Attribute `„message“` contains an error message with the specific cause of the error.