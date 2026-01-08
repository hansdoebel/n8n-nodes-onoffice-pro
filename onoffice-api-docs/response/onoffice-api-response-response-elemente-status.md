---
source: https://apidoc.onoffice.de/onoffice-api-response/response-elemente/status/
title: status
scraped: 2026-01-08T20:24:54.332Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API Structure and General Information](https://apidoc.onoffice.de/structure-and-general-information/) &raquo; [onOffice API Response](https://apidoc.onoffice.de/onoffice-api-response/) &raquo; [Response elements](https://apidoc.onoffice.de/onoffice-api-response/response-elemente/) &raquo; [Status](https://apidoc.onoffice.de/onoffice-api-response/response-elemente/status/) &raquo; Status		

	
	
		
# Status
	

	

		
Further information on the status of the response.

**code**

Status code of the response. Can take one of the following values:

200: „ok“ &#8211; request executed successfully.

400: „not authenticated“ &#8211; missing rights to process the request or the actions specified in the request.

500: „server error“ &#8211; an error occurred while processing the request.

**errorcode**

Error code of the response. If there is an error in the transmitted JSON or the structure of the request, this is specified here. If an error occurs in the processing of an action, the response error code is &#8220;97&#8221; (&#8220;Error in action&#8221;) and further information on the error that has occurred must be taken from the action status.

You can find more information on errors [here](https://apidoc.onoffice.de/fehler/).

**message**

Status message of the response.