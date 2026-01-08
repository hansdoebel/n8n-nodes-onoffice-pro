---
source: https://apidoc.onoffice.de/onoffice-api-response/response-elemente/result/
title: result
scraped: 2026-01-08T20:24:57.449Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API Structure and General Information](https://apidoc.onoffice.de/structure-and-general-information/) &raquo; [onOffice API Response](https://apidoc.onoffice.de/onoffice-api-response/) &raquo; [Response elements](https://apidoc.onoffice.de/onoffice-api-response/response-elemente/) &raquo; [Result](https://apidoc.onoffice.de/onoffice-api-response/response-elemente/result/) &raquo; Result		

	
	
		
# Result
	

	

		
Result of an action.

**actionid**

ID of the action.

**resourceid**

ID of the record. If empty, a list of records is outputted, if defined for the action.

**resourcetype**

Type of record. Corresponds to a module in enterprise.

**cacheable**

Cacheable-Flag. Can be true or false, and indicates if the API-Call is cachable. All API calls from the type &#8220;read&#8221; or &#8220;get&#8221; are cacheable. The SDK caches all &#8220;Read&#8221; and &#8220;Get&#8221; type responses when a cache object is passed from the outside. You can use the interface [onOfficeSDKCache ](https://github.com/onOfficeGmbH/sdk/blob/master/SDK/Cache/onOfficeSDKCache.php)from the SDK to implement your own cache. One example implementation of a database cache can be found in the [onOffice WordPress-Plugin](https://github.com/onOfficeGmbH/oo-wp-plugin/blob/master/plugin/Cache/DBCache.php).

**identifier**

Identifier. A label for the request, can be left empty.

**status**

Further information on the status of the action.

**code**

Status code of the response. Can take one of the following values:

200: „ok“ – request executed successfully

400: „not authenticated“ – Missing rights to process the request or the actions specified in the request

500: „server error“ – An error occurred while processing the request

**errorcode**

Error code of the response. If there is an error in the transmitted JSON or the structure of the request, this is specified here. If an error occurs in the processing of an action, the response error code is „97“ („Error in action“) and further information on the error that has occurred must be taken from the action status.

**[data](https://apidoc.onoffice.de/index.php/onoffice-api-response/response-elemente/data/)**