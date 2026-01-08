---
source: https://apidoc.onoffice.de/actions/aktionen-ausfuehren/email-versenden/
title: email-versenden
scraped: 2026-01-08T20:26:11.672Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Emails](https://apidoc.onoffice.de/api-calls-sorted-by-module/emails/) &raquo; [Do Send Email](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/email-versenden/) &raquo; Do Send Email		

	
	
		
# Do Send Email
	

	

		
**Resource type:** `sendmail`

With this API call an email can be sent analogously to the mail composer in onOffice enterprise. If the email contains macros, they will be replaced by address data (`receiver`) and estate data (`estateids`). All types of file attachments can also be sent.

The mailbox through which the email is sent must be assigned to the API user. You can define the assignment in the [e-mail administration](https://apidoc.onoffice.de/api-benutzer-anlegen/#mailboxes) under &#8220;Extras -> Settings -> Basic Settings -> Email&#8221;.

**Parameters:**

`emailidentity`

STRING. MANDATORY. Identity under whose name the emails should be sent. Can only accept identities associated with the user in enterprise.
`receiver`

ARRAY. MANDATORY. Receiver of the email. Both valid email addresses and database IDs of enterprise addresses can be applied here. Must contain at least one valid element. When sending web exposés, it is mandatory to enter an address ID. Note: If you specify an address ID for receiver and not a mail address, only one address ID can be specified.
`cc`

ARRAY. Copy receiver of the email. Both valid email addresses and database IDs of enterprise addresses can be applied here.
`bcc`

ARRAY. Blind copy receiver of the email. Both valid email addresses and database IDs of enterprise addresses can be transferred here.
`displayName`

STRING. Display name. The display name is an addition to a sender mail address that is displayed to the recipient of an e-mail instead of the sender mail address.
`subject`

STRING. Email subject.
`body`

STRING. Email content. Ignored if `templateid` has a valid value.
`templateid`

INTEGER. ID of an email template stored in enterprise. It is prioritized over the email content. The possible identifiers can be queried via [Email & PDF exposé templates](https://apidoc.onoffice.de/actions/informationen-abfragen/email-pdf-expose-vorlagen/).
`replyto`

STRING. Email address for email reply.
`estateids`

ARRAY. Database IDs of estates in enterprise.
`useHtml`

BOOLEAN. Mail is sent as html if true, otherwise as text.
`pdfexposeidentifiers`

ARRAY. Identifiers for PDF exposés. The possible identifiers can be queried via [Get templates](https://apidoc.onoffice.de/actions/informationen-abfragen/email-pdf-expose-vorlagen/).
`pdfletterids`

ARRAY. IDs of the PDF letters sent as attachments. The possible IDs can be queried via [Get templates](https://apidoc.onoffice.de/actions/informationen-abfragen/email-pdf-expose-vorlagen/). The IDs of mail template attachments can be queried via the API call [Default attachments](https://apidoc.onoffice.de/actions/informationen-abfragen/default-attachments/).Note: Exposes can be attached to PDF letters in enterprise. These attachments of PDF letters are not sent via API. If required, these can be added explicitly in the API call via the `pdfexposeids` parameter. If an exposé is attached to the e-mail and mergeexposeintopdfletter is set to true, a maximum of one PDF letter can be attached.
`pdfformids`

ARRAY. IDs of the PDF forms sent as attachments. The possible IDs can be queried via [Get templates](https://apidoc.onoffice.de/actions/informationen-abfragen/email-pdf-expose-vorlagen/). The IDs of mail template attachments can be queried via the API call [Default attachments](https://apidoc.onoffice.de/actions/informationen-abfragen/default-attachments/).
`webexposeids`

ARRAY. IDs of the web exposés. The possible IDs can be queried via [Get templates](https://apidoc.onoffice.de/actions/informationen-abfragen/email-pdf-expose-vorlagen/). Web exposés be sent with the [macros](https://de.enterprisehilfebeta.onoffice.com/help_entries/makros/makroliste/) _WebExpose, _downloadLink or _agreementLink. If several web exposés are specified, _WebExpose will send the first specified web exposé, but _downloadLink and _agreementLink will provide links to all web exposés. See also 3rd example below.
`documentattributes`

ARRAY. Field names of the document attributes. The possible identifiers can be queried via [Field Configuration](https://apidoc.onoffice.de/actions/informationen-abfragen/feldkonfiguration/) with module `file`.
`onlineattachmentids`

ARRAY. The IDs of the estate files from the files tab. The IDs can be queried via [Estate files.](https://apidoc.onoffice.de/actions/informationen-abfragen/objektdateien/) Files of the file type link can also be sent.
`mergeexposeintopdfletter `

BOOLEAN. Exposé and PDF letter attachments are merged into one document and sent as one attachment file. If an exposé is attached to the email and mergeexposeintopdfletter is set to true, a maximum of one PDF letter can be attached. Default: `false`.
`attachmentsDirectData`

OBJECT. Sends a base 64-encoded string as a file attachment.An object can be specified for this in the parameter &#8220;attachmentsDirectData&#8221;. The keys from the objects represent the file names and point to the respective files, which are specified as a character string encoded in base64. See the [fourth example](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/email-versenden/#4th).
`messageid`

STRING. Message ID. Message ID of an existing email. Used together with parameters `forwarded` or `replied` to forward or reply to this email. See [5th example](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/email-versenden#5th) for usage.
`forwarded`

BOOLEAN. Used together with parameter `messageid`. Specifies that the email with the specified message ID is to be forwarded. See [5th example](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/email-versenden#5th) for usage.
`replied`

BOOLEAN. Used together with parameter `messageid`. Specifies that the email with the specified message ID is to be replied to.
`addoriginalmailattachments`

BOOLEAN . Used together with parameters `messageid` and `forwarded` or `replied`. With this parameter you can specify whether the attachments of the linked email must be attached to the mail to be sent. See [5th example](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/email-versenden#5th) for usage.
`attachLinkedMailToHtmlMessage`

BOOLEAN. Used together with parameters `messageid` and `forwarded` or `replied`. With this parameter you can control whether the content of the original mail is to be attached to the content of the mail to be sent. See [5th example](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/email-versenden#5th) for usage.
`signatureid`

INTEGER. Specifies which email signature is to be used. The IDs can be read out via [&#8220;Get mail signature&#8221;](https://apidoc.onoffice.de/actions/informationen-abfragen/get-mail-signature/). If ID 0 is specified, no signature is sent. If the parameter is not specified, the default signature is sent.

**1st example: Send mail from mail template**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "sendmail",
    "parameters": {
        "emailidentity": "max.mustermann@my-onoffice.de",
        "templateid": 1211,
        "useHtml": true,
        "receiver": &#x5B;
            "marie.musterfrau@onoffice.de"
        ]
    }
}

```

**2nd example: Send mail with attachments (here exposes)**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "sendmail",
        "parameters": {
            "emailidentity": "sender@myonoffice.de",
            "body": "message of the mail",
            "subject": "subject of the mail",
            "pdfexposeidentifiers": &#x5B;
                "urn:onoffice-de-ns:smart:2.5:pdf:expose:lang:Expos\u00e9 Electra",
                "urn:onoffice-de-ns:smart:2.5:pdf:expose:lang:Expos\u00e9 Gable"
            ],
            "estateids": &#x5B;
                12,
                23
            ],
            "receiver": &#x5B;
                "receicer@onoffice.de"
            ]
        }
    }

```

**3nd example: Send mail with webexpose**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "sendmail",
        "parameters": {
            "emailidentity": "r.igelmund_test@my-onoffice.de",
            "subject": "subject of the mail",
            "body": "_WebExpose(message of the mail)",
            "webexposeids": &#x5B;
                53
            ],
            "estateids": &#x5B;
                1685
            ],
            "receiver": &#x5B;
                237
            ]
        }
    }

```

**4th example: Send a base 64-encoded string as a file attachment.**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "sendmail",
    "parameters": {
        "emailidentity": "t.test@my-onoffice.de",
        "templateid": 4189,
        "useHtml": true,
        "receiver": &#x5B;
            "121"
        ],
        "estateids": &#x5B;57], 
        "attachmentsDirectData": {"filename" : "iVBORw0KGgoAAAANSUhEUgAAAMgAAAApCAYAAABwQGa5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA5LTAzVDE1OjI4OjA0KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNy0wNVQxMjoyMzo1MiswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNy0wNVQxMjoyMzo1MiswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkZDlhMGM0Yi00YjY4LWNlNGYtYTEwZS0yOGRjYzUxNDQxNzAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphY2IyMTg5Zi02NTI1LTNkNDYtYjJhMy1mMTcyZGM0OWFhNmUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MjYyMTQwYy0xYzYyLTQwNDEtYWQ0Zi0yZmI2YjczNTM0NTgiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyNjIxNDBjLTFjNjItNDA0MS1hZDRmLTJmYjZiNzM1MzQ1OCIgc3RFdnQ6d2hlbj0iMjAxOS0wOS0wM1QxNToyODowNCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkZDlhMGM0Yi00YjY4LWNlNGYtYTEwZS0yOGRjYzUxNDQxNzAiIHN0RXZ0OndoZW49IjIwMjEtMDctMDVUMTI6MjM6NTIrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6O3RKUAAATaklEQVR4nO2deZwV1ZXHv/3oplm6ARFEEMPiEtGohOgoE6NR4zIu0XEcFxJN4jjjKGaicYlONE7ivkcTM/pxMjqDS0BMVNwACbgmoiigNioqyC7a2tAs3fby8sevru++W6deVUPT3TH+Pp/+9Ktbt+rVcs895/zOOfeVnTl5EW3EfsC/AGOBPkCr0acMqI7+VgO3AFe19Ysi/AT4aXSuVUBLib5l0f86YCpwOfBJUufyyl5Qlue+sw6gdslbm3h5nzucBPwzsCew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"}
    }
}

```

**5th example: Attach the content of the original mail to the content of the mail to be sent**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "sendmail",
    "parameters": {
        "emailidentity": "sender@myonoffice.de",
        "body": "message of the mail",
        "subject": "Fwd: subject of the mail",
        "messageid": "<linked message id>",
        "forwarded": true,
        "addoriginalmailattachments": true,
        "attachLinkedMailToHtmlMessage": true,
        "receiver": &#x5B;
            "receicer@onoffice.de"
        ]
    }
}

```