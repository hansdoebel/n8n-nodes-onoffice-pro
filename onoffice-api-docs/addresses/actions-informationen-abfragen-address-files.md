---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/address-files/
title: address-files
scraped: 2026-01-08T20:25:28.030Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Addresses](https://apidoc.onoffice.de/api-calls-sorted-by-module/addresses/) &raquo; [Get Address files](https://apidoc.onoffice.de/actions/informationen-abfragen/address-files/) &raquo; Get Address files		

	
	
		
# Get Address files
	

	

		
**Resource type:** `file`

The call can be used to read the metadata and content of address files under &#8220;Address >> Files&#8221;. If only one file is queried via `fileid`, the content of the file is also returned in the response. 

To make the files of an address available via a download link, use this [call](https://apidoc.onoffice.de/actions/informationen-abfragen/download-address-files/).

An address ID must be specified. If the user has read rights to the address, then the address files are also readable.

**Parameters:**

`addressid`

Address ID. INTEGER. MANDATORY
`fileid`

File ID. INTEGER. OPTIONAL. If set, the content of the file is also returned in the response under `content` in addition to the meta data.
`listlimit`

Number of data records to be returned. Default: 20, Maximum: 100. INTEGER. OPTIONAL
`listoffset`

Offset of the list, that means from which data record onwards the list should be returned. INTEGER. OPTIONAL

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "address",
        "identifier": "",
        "resourcetype": "file",
        "parameters": {
            "addressid": "15185"
        }
    }

```

**Response:**

`type`

Type of file
`name`

Name of the file
`originalname`

Original name of the file
`filename`

File name
`fileSize`

File size in bytes
`modified`

Timestamp of last modification (number of seconds that have elapsed since 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970)
`date`

Upload date of the file
`content`

Content of the file as base-64 string. Only in the response if one file is queried via request parameter `fileId`.

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
        "resourcetype": "file",
        "cacheable": true,
        "identifier": "",
        "data": {
          "meta": {
            "cntabsolute": 1
          },
          "records": &#x5B;
            {
              "id": 1757,
              "type": "file",
              "elements": {
                "type": "Foto",
                "name": "Bildschirmfoto 2024-07-31 um 09.36.03 (1).png",
                "originalname": "Bildschirmfoto 2024-07-31 um 09.36.03 (1).png",
                "filename": "2024090212142951a80a78-b312-4dbc-aa6f-b811b7214c0d.png",
                "fileSize": 165236,
                "modified": 1725272069,
                "date": "2024-09-02"
              }
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