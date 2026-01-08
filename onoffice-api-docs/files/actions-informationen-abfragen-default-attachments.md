---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/default-attachments/
title: default-attachments
scraped: 2026-01-08T20:26:09.556Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Files and Templates](https://apidoc.onoffice.de/api-calls-sorted-by-module/files/) &raquo; [Get Default attachments](https://apidoc.onoffice.de/actions/informationen-abfragen/default-attachments/) &raquo; Get Default attachments		

	
	
		
# Get Default attachments
	

	

		
**Resource type:** `defaultAttachments`

This API call can be used to read the attachments of a mail template from the template management (Edit >> Templates / files) and the default mail attachments of the querying user (Mailcomposer >> Attachments). Attachments of PDF letter templates can also be read.

As resourceid the ID of a mail template or PDF letter template can be specified. Without specifying a resourceid, only the users default attachments are returned. The users default attachments are always in the response. 

The response contains subrecords that reflect the users default mail attachments (`userDefaultAttachments`), the attachments of the mail template (`templateDefaultAttachments`) and the attachments of the PDF letter template (`pdfLetterDefaultAttachments`). 

The ids of mail templates and PDF letter templates can be retrieved via [Templates](https://apidoc.onoffice.de/actions/informationen-abfragen/email-pdf-expose-vorlagen/).

**Parameters: None**

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "<TEMPLATE-ID>",
        "identifier": "",
        "resourcetype": "defaultAttachments",
        "parameters": &#x5B;]
    }

```

**Response:**

- `id`
ID of the template.

- `filename`
File name. File name is null if the file does not exist physically yet. E.g. if the file name is generated using parameters (e.g. address, object) as in exposes.

- `filesize`
Physical file size in bytes if the file has a fixed size else zero. Exposes, document attributes and PDF letters have no file size. E.g. the size of the file is not yet fixed before the expose is generated.

- `filetitle`
File title.

- `filetype`
File type. Possible file types: `attachmentType-expose`, `attachmentType-pdfLetter`, `attachmentType-pdfForm`, `attachmentType-file`, `attachmentType-documentAttribute`.

- `identifier`
Identifier of the attachment. Only the attachment types expose and document attribute have an identifier. The identifier of an expose is required, for example, for the API call [Generation of PDF exposés](https://apidoc.onoffice.de/actions/informationen-abfragen/generierung-eines-pdf-exposes/).

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
                "resourceid": "3635",
                "resourcetype": "defaultAttachments",
                "cacheable": false,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 3
                    },
                    "records": &#x5B;
                        {
                            "id": "userDefaultAttachments",
                            "type": "attachmentCollection",
                            "elements": &#x5B;
                                {
                                    "id": "119",
                                    "filename": null,
                                    "filesize": 0,
                                    "filetitle": "Design01Expose (kurz)",
                                    "filetype": "attachmentType-expose",
                                    "identifier": "urn:onoffice-de-ns:smart:2.5:pdf:expose:kurz:design01Expose"
                                }
                            ]
                        },
                        {
                            "id": "templateDefaultAttachments",
                            "type": "attachmentCollection",
                            "elements": &#x5B;
                                {
                                    "id": "122",
                                    "filename": null,
                                    "filesize": 0,
                                    "filetitle": "Design01Aushang",
                                    "filetype": "attachmentType-expose",
                                    "identifier": "urn:onoffice-de-ns:smart:2.5:pdf:expose:kurz:design01Aushang"
                                },
                                {
                                    "id": "18697",
                                    "filename": "Rechnungen_06.2020-06.2020.csv",
                                    "filesize": 3443,
                                    "filetitle": "Rechnungen_06.2020-06.2020.csv",
                                    "filetype": "attachmentType-file",
                                    "identifier": null
                                }
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