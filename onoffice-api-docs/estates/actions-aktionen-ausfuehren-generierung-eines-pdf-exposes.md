---
source: https://apidoc.onoffice.de/actions/aktionen-ausfuehren/generierung-eines-pdf-exposes/
title: generierung-eines-pdf-exposes
scraped: 2026-01-08T20:25:06.935Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Do Generation of  PDF exposés](https://apidoc.onoffice.de/actions/aktionen-ausfuehren/generierung-eines-pdf-exposes/) &raquo; Do Generation of  PDF exposés		

	
	
		
# Do Generation of  PDF exposés
	

	

		
**Resource type: **`pdf`

Herewith PDF-Exposés can be generated.

**Parameters:**

`estateid`

		Record ID of the linked estate
`addressids`

		Record IDs of the linked addresses
`language`

		Language
`template`

		Name of the template
`gzcompress`

		Compresses the returned data (possible values: `true` or `false`, default value: `true`).
`forceEstateLocation`

		Forces the output of street and house number in the Exposé (possible values: `true` or `false`, default value: `false`). If this parameter is set to `false` or is not specified, then the street and house number in the exposé will be based on the &#8220;Portale / Website / API&#8221; setting on the &#8220;Marketing&#8221; tab of an estate. For individual exposés from the PDFdesigner the PDFDesigner also has the setting &#8220;Straße/Hausnr. anzeigen&#8221; for the title page of an exposé with the options `nie`, `wenn im Objekt freigegeben` and `immer`.

See the onOffice online help for more information about the [PDFdesigner](https://de.enterprisehilfebeta.onoffice.com/help_entries/pdfdesigner/). With the PDFdesigner you can individually create and edit your own PDF exposés.

**Example: Generation of a PDF-Exposé**

```

    {
        "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid":"",
        "identifier":"",
        "resourcetype":"pdf",
        "parameters":{
			"estateid":6,
			"template":"urn:onoffice-de-ns:smart:2.5:pdf:expose:kurz:design02Expose",
			"forceEstateLocation":"true"
        }
    }

```

**Response:**

- `type`
Type

- `document`
base64-encoded binary data

The generated PDF document is compressed and delivered base64-encoded. The delivered data must still be processed as follows: 

```
$binary = gzuncompress(base64_decode($data)); 
```

 Is `gzcompress` set to `false`, i.e. the PDF document was not compressed, 

```
$binary = base64_decode($data)
```

 `$data` is the parameter `document` from the response.