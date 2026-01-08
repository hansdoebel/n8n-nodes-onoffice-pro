---
source: https://apidoc.onoffice.de/actions/datensatz-bearbeiten/files/
title: files
scraped: 2026-01-08T20:25:10.161Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Modify Estate Files](https://apidoc.onoffice.de/actions/datensatz-bearbeiten/files/) &raquo; Modify Estate Files		

	
	
		
# Modify Estate Files
	

	

		
**Resource type:** `file`

With this API call you can modify the meta data for property files.

By specifying the file ID (`fileId`), file information such as filename, free text, type of file, file title can be changed.

A title image (Titelbild) can only be present once per property.

If the parameter `Art` for a file is set to `Titelbild`, then the old title image gets the file type `Foto`.

**Parameters:**

`relationtype`

MANDATORY. STRING. Module of the file. Possible value: `estate`.
`parentid`

MANDATORY. INTEGER. ID of the property record whose files you want to change.
`fileId`

MANDATORY. INTEGER. File ID of the file to be modified.
`language`

STRING. Language.
`Art`

STRING. Type of file. Possible values: `Foto`, `Grundriss`, `Lageplan`, `Titelbild`, `LOGO`, `Expose`, `Aushang`, `Mietaufstellung`, `Dokument`, `Foto_gross`, `Link`, `Panorama`, `Banner`, `Stadtplan`, `Film-Link`, `QR-Code`, `Energieausweis`, `Epass_Skala`, `Ogulo-Link`, `Objekt-Link`, `Anzeigen`, `Finanzierungsbeispiel`. The type `Dokument` will be located in &#8220;category&#8221;: &#8220;internal&#8221;, the other types in &#8220;category&#8221;: &#8220;external&#8221;.
`title`

STRING. File title.
`freetext`

STRING. Free text
`documentAttribute`

STRING. Document attribute (Dokumentenmerkmal).

**Example: Modify a file**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
        "resourceid": null,
        "resourcetype": "fileRelation",
        "identifier": "x",
        "parameters": {
            "relationtype": "estate",
            "parentid": 1685,
            "fileId": 2983,
            "Art": "Foto",
            "freetext": "Freitext",
            "title": "Titel"
        }
    }

```

If successful, the response will be `success`.