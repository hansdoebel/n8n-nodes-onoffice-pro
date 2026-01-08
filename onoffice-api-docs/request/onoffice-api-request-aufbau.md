---
source: https://apidoc.onoffice.de/onoffice-api-request/aufbau/
title: aufbau
scraped: 2026-01-08T20:24:43.879Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API Structure and General Information](https://apidoc.onoffice.de/structure-and-general-information/) &raquo; [onOffice API Request](https://apidoc.onoffice.de/onoffice-api-request/) &raquo; [Structure](https://apidoc.onoffice.de/onoffice-api-request/aufbau/) &raquo; Structure		

	
	
		
# Structure
	

	

		
with new HMAC method (hmac_sha256):

```

{
	"token"		: "<Access-Token>",
	"request"	: {
		"actions" : &#x5B;
			{
				"actionid"		: "<Action identifier>",
				"resourceid"	: "<Resource identifier>",
				"resourcetype"	: "<Resource type>",
				"identifier"	: "<Identifier>",
				"timestamp"		: "<UNIX timestamp>",
				"hmac"			: "<Hash-based message authentication code>",
				"hmac_version"	: "2",
				"parameters"	: {
					"<Parametername>": "<Parameter value>"
					...
					// additional parameters
				}
			}
			...
			// additional actions
		]
	}
}

```

with old HMAC method:

```
 
{
	"token"		: "<Access-Token>",
	"request"	: {
		"actions" : &#x5B;
			{
				"actionid"		: "<Action identifier>",
				"resourceid"	: "<Resource identifier>",
				"resourcetype"	: "<Resource type>",
				"identifier"	: "<Identifier>",
				"timestamp"		: "<UNIX timestamp>",
				"hmac"			: "<Hash-based message authentication code>",
				"parameters"	: {
					"<Parametername>": "<Parameter value>"
					...
					// additional parameters
				}
			}
			...
			// additional actions
		]
	}
}

```

*onOffice API request*

The individual actions are explained in more detail [here](https://apidoc.onoffice.de/onoffice-api-request/request-elemente/action/).

**Note**:

The request URL for the latest API version is https://api.onoffice.de/api/latest/api.php.

The request URL for the stable API version, which is updated monthly, is https://api.onoffice.de/api/stable/api.php.

Note that the request URLs for the stable and latest API always remains the same for all requests. The individual endpoints are addressed via parameters `actionid` and `resourcetype` in the JSON.

Note that `hmac` and `timestamp` are not in the `parameters` array, but on the same level as `parameters`.