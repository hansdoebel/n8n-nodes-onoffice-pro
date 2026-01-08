---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/download-address-files/
title: download-address-files
scraped: 2026-01-08T20:25:29.050Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Addresses](https://apidoc.onoffice.de/api-calls-sorted-by-module/addresses/) &raquo; [Get Download Address files](https://apidoc.onoffice.de/actions/informationen-abfragen/download-address-files/) &raquo; Get Download Address files		

	
	
		
# Get Download Address files
	

	

		
**Resource type: **`downloadFiles`

Provides the files of an address via a download link (&#8220;Address >> Files&#8221;). If the link is opened, all linked files are displayed in a list so that each file can be downloaded individually or all at once. `resourceid`, `resourcetype` and `addressid` are mandatory fields. `address` must be entered as `resourceid`. The download link is valid for 14 days.

To read the metadata of address files, you can use [this](https://apidoc.onoffice.de/actions/informationen-abfragen/address-files/) call.

**Parameter:**

`addressid`

INTEGER. MANDANTORY. Address ID.
`language`

STRING. Language in which the download page should be displayed. The language must be specified in the 3-digit ISO 639, e.g. `ENG`. The system language of the user is the default.

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "address",
        "identifier": "",
        "resourcetype": "downloadFiles",
        "parameters": {
            "addressid": "1237",
            "language": "FRA"
        }
    }

```

**Response:**

```

{
    "status": {
        "code": 200,
        "errorcode": 0,
        "message": "OK"
    },
    "response": {
        "results": &#x5B;
            {
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
                "resourceid": "address",
                "resourcetype": "downloadFiles",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 0
                    },
                    "records": &#x5B;
                        {
                            "id": "downloadUrl",
                            "type": "file",
                            "elements": &#x5B;
                                "https:\/\/beta.smart.onoffice.de\/smart\/gui-handler.php?params=mrq3%2B8IwshEZhgEI6wbc0PVsMxqUteyXmqvV5TimSnYXzPQ30bcqujKE54%2B7CT5x%2BQf6O5hCof7cvleSDZlvqtw%2BKxl8likKsFaHlZTfExypBW8AeM2kwbUMuWrgrVnIn7%2FjJOBHtMTdwVJzcsp3qw%3D%3D"
                            ]
                        }
                    ]
                },
                "status": {
                    "errorcode": 0,
                    "message": "OK"
                }
            }
        ]
    }
}

```