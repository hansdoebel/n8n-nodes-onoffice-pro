---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/objektdateien/
title: objektdateien
scraped: 2026-01-08T20:25:08.050Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Get Estate files](https://apidoc.onoffice.de/actions/informationen-abfragen/objektdateien/) &raquo; Get Estate files		

	
	
		
# Get Estate files
	

	

		
**Resource type:** `file`

This call can be used to query information about internal and external files from estates. An estate ID must be specified.

If you enter only an estate ID, information about all files of this estate will be returned (except the actual contents of the files).

Since you can assign a document attribute only once in each estate, you can uniquely identify a file using the parameter `documentAttribute` as well as the parameter `fileid`. Document attributes of a file can be maintained in the administration on the tab Singleselect, Module: Files, Key field: Document attribute.

If you ask for information about exactly one file using `documentAttribute` or `fileid`, the file content in `content` will also be returned in the response as base64-encoded string.

If the user has read rights to the property, then the property files are also readable.

**Parameters:**

`estateid`

Estate ID. INTEGER

`fileid`

File ID. INTEGER. OPTIONAL

`documentAttribute`

Document attribute. STRING. OPTIONAL

`showispublishedonhomepage`

If true, then in the response the parameter `ispublishedonhomepage` is added which indicates which files are activated for publication on your own homepage under &#8220;Properties >> Files >> Publication >> Own homepage / API&#8221;. If the property is published via &#8220;Properties >> Marketing >> Own homepage >> Publish&#8221;, only the activated files are transferred to the homepage. BOOLEAN. OPTIONAL

`showpublicationstatus`

If true, then in the response the parameter `publicationstatus` is added, which indicates which files are activated for publication in the portals. During portal upload, only the activated files are transferred to the portal. BOOLEAN. OPTIONAL

`includeImageUrl`

Flag, if the image URL should be output. The parameter `imageUrl` then also appears in the response. Possible values: `small` (thumbnail 120 px wide), `medium` (thumbnail 200 px wide) or `original` (original size). STRING. OPTIONAL

`listlimit`

Number of data records to be output. Default: 20, Maximum: 100. INTEGER. OPTIONAL

`listoffset`

Offset of the list, that means from which data record onwards the list should be output. INTEGER. OPTIONAL

**Example:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "estate",
    "identifier": "",
    "resourcetype": "file",
    "parameters": {
      "estateid":"97",
      "includeImageUrl":"original",
      "fileid":4217
    }
}

```

**Response:**

`type`

Type of file
`url`

URL, if file is of file type link
`documentAttribute`

Document attribute
`position`

Position
`title`

File title
`name`

Name
`originalname`

Original name
`freetext`

Free text
`filename`

File name
`fileSize`

File size in bytes
`content`

File content as a string
`modified`

Timestamp of last modification (number of seconds that have elapsed since 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970)
`category`

Category of the file / is it a file from the internal or external area?
`ispublishedonhomepage`

Indicates which files are activated for publication on your own homepage if the parameter `showispublishedonhomepage` is set in the request. This setting can be found in enterprise under &#8220;Properties >> Files >> Publication >> Own homepage / API&#8221;.
`imageUrl`

Returns the image URL if request parameter `includeImageUrl` is set
`publicationstatus`

Indicates which files are activated for publication in the portals. During portal upload, only the activated files are transferred to the portal. These settings can be found in enterprise under &#8220;Properties >> Files >> Publication&#8221;.Portal ID, portal name and the publishing status (1 = published, 0 = not published) are given as an object of arrays for each file and portal if the parameter `showpublicationstatus` is set in the request. The response lists all active portals for the customer or office group. 

Internal files are not transferred to portals. Therefore, an empty array under `publicationstatus` is returned as the status for files on the tab &#8220;internal&#8221;, i.e. files of the type &#8220;internal document&#8221; in the response.

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
        "resourceid": "estate",
        "resourcetype": "file",
        "cacheable": true,
        "identifier": "",
        "data": {
          "meta": {
            "cntabsolute": 1
          },
          "records": &#x5B;
            {
              "id": 4217,
              "type": "file",
              "elements": {
                "type": "Titelbild",
                "position": 15,
                "documentAttribute": null,
                "name": "a4f9c227-2f28-4b44-94c3-593a49e36162",
                "originalname": "Briefpapier_3.jpg",
                "filename": "a4f9c227-2f28-4b44-94c3-593a49e36162.jpg",
                "fileSize": 508468,
                "title": "Briefpapier_3",
                "freetext": "",
                "modified": 1742985711,
                "category": "external",
                "content": "/9j/4AAQSkZJRgABAQA7D4BNPEP8A1h0SB2HwCaeIf+sOn19fWEgdh8AmniH/AKw6JA7D4BNPEP8A1h0SB2HwCaeIf+sOiQOw+ATTxD/1h0SB2HwCaeIf+sOsZg9+nn8/dukDsPgE08Q/9YdZSB2HwCaeIf8ArDokDsPgE08Q/wDWHRIHYfAJp4h/6w6JA7D4BNPEP/WHT8/rKQOw+ATTxD/1h0SB2HwCa4E5hDgTCIfYdYidwD2wkDsPgmuum318gPYOnwWU01lE00RNNETTTv5/WETTWM5mN8fXl9AImmsjYdMImmiJpp9QiaaImmsT+MDr7z5foiaaz9fD2d/rqiaaImmiJpoiaaImmiJpoiaaxmfKMfz+uvVE01lE00RNNPPO2311RNNETTWJicfDr5Qiaaz9dp8+4+P5ImmiJpp9f4ommiJpoiaadx5b/H8ETTRE01gD67+Z2yiaayiaaImmiJpp3+XmiaaImmnX6/X8veiaaxA8/if1RNNZRNNYnBPbrv5bb46ommsommiJpoiaaImmiJprHTPvz5Z7Y9qJppnGw7jf9PwRNNZRNNPr6909fcUTTWM9vZ57+2B5/RJprP1+v5ommiJppICJpoNgiaaImmmD2M/NE00RNNETTT6+f+H4e0mmsDyjyzMj5R8x8UTTWUTTRE01j6n6n3zHkiaaSO48vb0RNNZRNNYnfy3/AB/AommgjcfWTOPbuiaayiaafX6/NE00xt8AiaaImmn19fX8iaax8Bkx19vbO8ommsommn1+P8vgiaax8fbj+fzEImmsziTHxwiaaImmk5j6zP6Immn1tCJpoiaaImmiJpoiaaImmsd9vb57Z29m6JprP8vrr9dUTTWD9fHPylE0093vH6TP4omms+1E00RNNJ6fXT9UTTTv+kf4/giaaImmiJpoiaaImmn19fX8yaax3iPbuZ6T7vP8ZRNNMgdz+P4omms/X1uiaaxtGPhiB/h2+SJprP15/DCJpp7x9e/t+vkiaaImmsAgk+Xl8c+7p2RNNZRNNJHcbT7u/sRNNPP69/wRNNETTT6/Dy7fXYmmsdfxz7Y92T9BE01lE00RNNPn9df5fBE00+vP6/RE01jPQjf8xP5/yhE01nf4fiiaaxmfLP5fz+tiaayfh8Pz+vdKJprG5nIjpjt5b7990TTWUTTRE00+Hx6d0TTT2fWf8YRNNPx7ommmyJr/2Q==",
                "imageUrl": "https://smart.onoffice.de/smart20/Objekte/TestOnOffice35623/97/a4f9c227-2f28-4b44-94c3-593a49f36188.jpg"
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