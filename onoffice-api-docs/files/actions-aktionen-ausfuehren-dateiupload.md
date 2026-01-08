---
source: https://apidoc.onoffice.de/actions/aktionen-ausfuehren/dateiupload/
title: dateiupload
scraped: 2026-01-08T20:26:07.494Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Files and Templates](https://apidoc.onoffice.de/api-calls-sorted-by-module/files/) &raquo; [Do File upload](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/dateiupload/) &raquo; Do File upload		

	
	
		
# Do File upload
	

	

		
**Resource type:** `uploadfile`

Use this API call to upload a file to onOffice. The module and the data record ID specify where the file should be stored. It is possible to upload `estate`, `address` and `agentslog` files as well as files linked to `task`. This has to be specified in the parameter `module`.

You also can set `tmpUpload` as `module`, then you receive the ID of a cached file with which you can continue to work.

It is also possible to upload the file in several blocks if it is too large.

The call can be used in several different ways:

1.) **Upload a file directly into a module:**

Uploading files happens in two steps. In the first step you enter the data, and receive as a response a temporary ID and the file size. In the second step you specify in which module the file is uploaded and with which record it should be linked. The parameter data is needed only in the first step. Do not specify the parameter together with the parameters of the second step, otherwise the second step will not be performed. See [first example](https://apidoc.onoffice.de/index.php/actions/aktionen-ausfuehren/dateiupload/#FirstExample) for usage.

2.) **Specify tmpUpload as module / get cached file:**

If tmpUpload is specified as a module, the response contains a cache UUID that can be used for further processing. See [second example](https://apidoc.onoffice.de/index.php/actions/aktionen-ausfuehren/dateiupload/#SecondExample) for usage.

3.) **Upload file in several blocks:**

It is also possible to upload the file in several blocks if it is too large:

&#8211; Call 1 with the first block of data Base64 encoded in the &#8220;data&#8221; parameter and completely without &#8220;tmpUploadId&#8221;, which you get in the response.

&#8211; Call 2-X with further blocks of data in &#8220;data&#8221; and the received &#8220;tmpUploadId&#8221;, the API then appends the further data to the file on the file system.

&#8211; Call X+1 with received &#8220;tmpUploadId&#8221; and without further specification of &#8220;data&#8221;, but additional information about the file (name, module, etc.).

See [third example](https://apidoc.onoffice.de/index.php/actions/aktionen-ausfuehren/dateiupload/#ThirdExample) for usage.

4.) **Upload a link:**

See [4th example](https://apidoc.onoffice.de/index.php/actions/aktionen-ausfuehren/dateiupload/#FourthExample) for usage.

&#8212;&#8212;

Hints:

Please note that for estate files a document attribute can only be assigned once for every estate. The list of possible document attributes can be edited in the administration.

Some parameters such as &#8220;documentAttribute&#8221; and &#8220;Art&#8221; are only relevant for the `estate` module, these are the additional file information that can be seen on the &#8220;Files&#8221; tab in the properties module.

A temporary id can only be used once.

**Parameters first step:**

`data`

STRING. MANDATORY. File content as base64-encoded binary data

**Parameters second step:**

`tmpUploadId`

STRING. MANDATORY. Temporary upload ID
`relatedRecordId`

INTEGER. MANDATORY. Linked record number
`Art`

STRING. MANDATORY. Needed for module `estate`. Type of file.

Possible picture types: `Titelbild`, `Foto`, `Foto_gross`, `Grundriss`, `Lageplan`,`Stadtplan`, `Anzeigen`, `Epass_Skala`, `Finanzierungsbeispiel`, `QR-Code`, `Logo`, `Banner`, `Panorama`

Possible document types: `Expose`, `Dokument`, `Aushang`, `Mietaufstellung`, `Energieausweis`. The type `Dokument` will be located in &#8220;category&#8221;: &#8220;internal&#8221;, the other types in &#8220;category&#8221;: &#8220;external&#8221;.

Possible link types: `Link`, `Ogulo-Link`, `Film-Link`, `Objekt-Link`
`file`

STRING. MANDATORY. Filename
`title`

STRING. Needed for module `estate`. File title
`url`

STRING. The URL of the link. Only relevant for the file types `Link`, `Ogulo-Link`, `Film-Link`, `Objekt-Link`. See below for an example with link.

Note: The first step (uploading data) is not necessary and &#8220;file&#8221; and &#8220;tmpUploadId&#8221; are not mandatory parameters.
`freetext`

STRING. Needed for module `estate`. Free text
`documentAttribute`

STRING. Needed for module `estate`. Document attribute. The document attributes can be queried by calling [Field configuration](https://apidoc.onoffice.de/actions/informationen-abfragen/feldkonfiguration/) with module `file`. The document attributes defined in enterprise can be read and edited under &#8220;Administration >> Singleselect: Module: Files, Key field: Document features&#8221; under Field. Each document attribute can only be assigned once per estate.
`module`

STRING. MANDATORY. Possible values: `estate`, `address`, `agentsLog`, `task` or `tmpUpload`
`position`

INTEGER. Position of the file on the &#8220;Files&#8221; tab if module `estate` is set. Position 0 is the first image. Without the `position` parameter, the image is always set as the last image.
`setDefaultPublicationRights`

BOOLEAN. Needed for module `estate`. True or false. Default: false. Controls when uploading real estate images or links whether the setting &#8220;Activate newly added files&#8221; under &#8220;Extras >> Settings >> Basic settings >> General&#8221; should be considered by the API.
`applyWaterMark`

BOOLEAN. Default: `false`. If set to true, the configured watermark from enterprise is added to the image (&#8220;Extras >> Settings >> Basic settings >> General >> Watermark (Image uploader)&#8221;). This is only possible when uploading images to the `estate` module.

**Upload a file directly into a module**

**1st example first step: Specify data**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": null,
        "resourcetype": "uploadfile",
        "identifier": "",
        "parameters": {
            "data": "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4\/\/8\/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
        }
    }

```

**Response:**

`tmpUploadId`

STRING. Temporary upload id. It is needed for the second step

```

...
"records": &#x5B;
 	{
 	 	"id": 0,
 	 	"type": "",
 	 	"elements": {
 	 	 	"filesize": 85,
 	 	 	"tmpUploadId": "a17ebec0-48f9-44cc-8629-f49ccc68f2d2"
 	 	}
 	}
]
...

```

**1st example second step: module, file name, data record to be linked and further information**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": null,
        "resourcetype": "uploadfile",
        "identifier": "",
        "parameters": {
            "module": "estate",
            "freetext": "Freitext",
            "tmpUploadId": "a17ebec0-48f9-44cc-8629-f49ccc68f2d2",
            "file": "JPEG_example_JPG.jpg",
            "title": "Titel",
            "Art": "Foto",
            "documentAttribute": "document_reservation_list",
            "setDefaultPublicationRights": true,
            "relatedRecordId": 409
        }
    }

```

&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-

&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-

**2nd example first step with module `tmpUpload`: Specify data**

**Request:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
    "resourceid": null,
    "identifier": "1",
    "resourcetype": "uploadfile",
    "parameters": {
        "data": "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
    }
}

```

**Response:**

`tmpUploadId`

STRING. Temporary upload id. It is needed for the second step

```

...
"records": &#x5B;
 	{
 	 	"id": 0,
 	 	"type": "",
 	 	"elements": {
 	 	 	"filesize": 85,
 	 	 	"tmpUploadId": "b20964be-5c42-4734-a5d4-bcb3a4503125"
 	 	}
 	}
]
...

```

**2nd example second step with module `tmpUpload`: Specify module and further information**

**Request:**

```

{
	"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
	"resourceid": null,
	"identifier": "2",
	"resourcetype": "uploadfile",
	"parameters": {
		"file": "test.png",
		"title": "test.png",
		"tmpUploadId": "b20964be-5c42-4734-a5d4-bcb3a4503125",
		"Art": null,
		"relatedRecordId": null,
		"module": "tmpUpload"
	}
}

```

**Response:**

`tmpUploadId`

STRING. Temporary upload id.
`cacheFileUuid`

STRING. Cache file uuid with which you can continue to work.

```

...
{
    "status": {
        "code": 200,
        "errorcode": 0,
        "message": "OK"
    },
    "response": {
        "results": &#x5B;
            {
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
                "resourceid": "",
                "resourcetype": "uploadfile",
                "cacheable": false,
                "identifier": "2",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 0,
                            "type": "",
                            "elements": {
                                "filesize": 4880,
                                "tmpUploadId": "15fe4d69-241f-42c3-f5ac-6a8c39a3bb69",
                                "cacheFileUuid": "ec74c71e-fea4-47dd-8d84-dac7a83d69fd",
                                "success": "success"
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
...

```

&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-

&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-

**3rd example &#8211; Upload file in several blocks: 1st step &#8211; Specify file name and data**

**Request:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": null,
        "resourcetype": "uploadfile",
        "identifier": "",
        "parameters": {
            "data": "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4\/\/8\/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
        }
    }

```

**Response:**

`tmpUploadId`

STRING. Temporary upload id. It is needed for the second step

```

...
"records": &#x5B;
 	{
 	 	"id": 0,
 	 	"type": "",
 	 	"elements": {
 	 	 	"filesize": 85,
 	 	 	"tmpUploadId": "2dc5d8b7-da2f-41bc-937b-ba44f4bb1b52"
 	 	}
 	}
]
...

```

**3rd example &#8211; Upload file in several blocks: next steps &#8211; Attach additional blocks to the file**

**Request:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": null,
        "resourcetype": "uploadfile",
        "identifier": "",
        "parameters": {
            "data": "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4\/\/8\/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
            "tmpUploadId": "2dc5d8b7-da2f-41bc-937b-ba44f4bb1b52"
        }
    }

```

**Response:**

`tmpUploadId`

STRING. Temporary upload id.
`cacheFileUuid`

STRING. Cache file uuid with which you can continue to work.

```

...
"records": &#x5B;
 	{
 	 	"id": 0,
 	 	"type": "",
 	 	"elements": {
 	 	 	"filesize": 170,
 	 	 	"tmpUploadId": "2dc5d8b7-da2f-41bc-937b-ba44f4bb1b52"
 	 	}
 	}
]
...

```

**3rd example &#8211; Upload file in several blocks: last step &#8211; module, data record to be linked and further information**

**Request:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": null,
        "resourcetype": "uploadfile",
        "identifier": "",
        "parameters": {
            "module": "estate",
            "freetext": "Freitext",
            "tmpUploadId": "2dc5d8b7-da2f-41bc-937b-ba44f4bb1b52",
            "file": "JPEG_example_JPG.jpg",
            "title": "Titel",
            "Art": "Foto",
            "setDefaultPublicationRights": true,
            "relatedRecordId": 417
        }
    }

```

**Response:**

```

...
                    "records": &#x5B;
                        {
                            "id": 0,
                            "type": "",
                            "elements": {
                                "filesize": 170,
                                "tmpUploadId": "2dc5d8b7-da2f-41bc-937b-ba44f4bb1b52",
                                "fileId": "3539",
                                "success": "success"
                            }
                        }
                    ]
...

```

&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-

&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-

**4th example: Upload link**

**Request:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": null,
        "resourcetype": "uploadfile",
        "identifier": "",
        "parameters": {
            "module": "estate",
            "title": "onOffice Webseite",
            "Art": "Link",
            "url": "https:\/\/www.onoffice.de",
            "relatedRecordId": 2651
        }
    }

```