---
source: https://apidoc.onoffice.de/onoffice-api-response/aufbau/
title: aufbau
scraped: 2026-01-08T20:24:51.244Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API Structure and General Information](https://apidoc.onoffice.de/structure-and-general-information/) &raquo; [onOffice API Response](https://apidoc.onoffice.de/onoffice-api-response/) &raquo; [Structure](https://apidoc.onoffice.de/onoffice-api-response/aufbau/) &raquo; Structure		

	
	
		
# Structure
	

	

		
```

{
	"status": {
		"code": "<response status code>"
		"errorcode": "<response error code>"
	},
	"response": {
		"results": &#x5B;
			{
				"actionid": "<action ID>",
				"resourceid": "<resource ID>",
				"resourcetype": "<resource type>",
				"identifier": "<identifier>",
				"status": {
					"code": "<action status code>"
					"message": "<status message>"
				},
				"data": {
					"records": &#x5B;
						{
							"id": "<record ID>",
							"type": "<record type>",
							"elements": &#x5B;
								{
									"<element name>": "<element value>"
									// additional elements
								}
							]
						}
						// additional records
					]
				}
			}
			// additional actions
		]
	}
}

```

*onOffice API response*