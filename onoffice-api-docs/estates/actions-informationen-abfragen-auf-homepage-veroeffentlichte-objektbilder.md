---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/auf-homepage-veroeffentlichte-objektbilder/
title: auf-homepage-veroeffentlichte-objektbilder
scraped: 2026-01-08T20:25:09.131Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Get Estate images published on Homepage](https://apidoc.onoffice.de/actions/informationen-abfragen/auf-homepage-veroeffentlichte-objektbilder/) &raquo; Get Estate images published on Homepage		

	
	
		
# Get Estate images published on Homepage
	

	

		
**Resource type:** `estatepictures`

With this API call, information about the images published on the own website can be read out. These are all files of the file type &#8220;pictures&#8221; in an estate, which have the check mark &#8220;own homepage / API&#8221; set under &#8220;Publication / Veröffentlichung&#8221;. If you use the multi-language module, you can read the file title and the free text field of the file language-dependent.

Further information on the multi-language module is available [here](https://de.enterprisehilfe.onoffice.com/help_entries/multilingual-property/?lang=en).

**Parameters:**

`estateids`

ARRAY. MANDATORY. Estate IDs.

`categories`

ARRAY. MANDATORY. Type of File (&#8220;Titelbild&#8221;, &#8220;Foto&#8221;, &#8220;Foto_gross&#8221;, &#8220;Grundriss&#8221;, &#8220;Lageplan&#8221;, &#8220;Epass_Skala&#8221;, &#8220;Panorama&#8221;, &#8220;Link&#8221;, &#8220;Film-Link&#8221;, &#8220;Ogulo-Link&#8221;, &#8220;Objekt-Link&#8221;, &#8220;Expose&#8221;).

`size`

STRING. OPTIONAL. The image size can be specified in pixels, e.g. `500x500`. The maximum resolution that can be output here is the resolution set under &#8220;Extras >> Settings >> Basic settings >> Image format&#8221;. If you use larger values or omit the parameter, the response will return the image in the saved resolution. If &#8220;Save images in higher quality&#8221; is enabled in the basic settings, this can be queried via &#8220;size&#8221;: &#8220;original&#8221; (note that watermarks are not embedded in the higher quality images).

`language`

STRING. OPTIONAL. Language in three capital letters according to ISO 3166-1 alpha-3. Only relevant when working with multilingual objects. For multilingual objects, file title and free text are output in the specified language. If this parameter is not specified, the file title and free text of the estate are output in the system language. If file titles and/or free text are not available in the specified language, the system language will also be output. For this parameter to work, the `estateids` of a main property must be specified.

[Explanation multilingual estates](https://apidoc.onoffice.de/multilingual-estates/)

`publicationSetting`

STRING. OPTIONAL. `publicationSetting` is used to restrict retrieved images to a specific publication target, namely the exposé releases. It allows the retrieval of images not only released for the homepage/API but also for specific types of exposés. The valid string values for this parameter are: `Homepage`, `Word_kurz`, `Word_lang`, `PDF_kurz`, `PDF_lang`, `HTML_kurz`, `HTML_lang`, `Web_kurz`, `Web_lang`.

**Response:**

`id`

File ID
`estateid`

Estate ID
`type`

Type of file
`url`

URL
`titel`

Title
`text`

Image description
`modified`

Date of last change as unix timestamp
`estateMainId`

Main estate ID.

**Example request with parameter publicationSetting:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "identifier": "",
    "resourcetype": "estatepictures",
    "resourceid": "",
    "parameters": {
        "estateids": &#x5B;
            27
        ],
        "categories": &#x5B;
            "Foto"
        ],
        "size": "original",
        "language": "DEU",
        "publicationSetting": "Word_lang"
    }
}    

```

**Example response with parameter publicationSetting:**

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
                "resourceid": "",
                "resourcetype": "estatepictures",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 1
                    },
                    "records": &#x5B;
                        {
                            "id": 431,
                            "type": "files",
                            "elements": &#x5B;
                                {
                                    "estateid": "27",
                                    "type": "Foto",
                                    "url": "https://image.onoffice.de/smart20/Objekte/Onischuk-beta/27/Titelbild_431.jpg",
                                    "title": "Haus Fassade",
                                    "text": "",
                                    "originalname": "Foto_465.jpg",
                                    "modified": 1749193590,
                                    "estateMainId": "27"
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

**Example with ID of a main property and specifying language:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "identifier": "",
        "resourcetype": "estatepictures",
        "resourceid": "",
        "parameters":
        {
            "estateids": &#x5B;137],
            "categories": &#x5B;"Foto"],
            "size":"original",
            "language":"ENG"
        }
    }

```

**Response example with ID of a main property and specifying language:**

```

...
"records": &#x5B;
	{
		"id": 1461,
		"type": "files",
		"elements": 
		{
			"estateid": "137",
			"type": "Foto",
			"url": "https:\/\/image.onoffice.de\/smart25\/Objekte\/index.php?kunde=Igelmund&datensatz=137&filename=Foto_1461.jpg",
			"title": "Screenshot Englisch ",
			"text": "Freitext Englisch OFF",
			"originalname": "Screenshot Shopping Center.png",
			"modified": 1540301235, 
			"estateMainId": "2591"
		}
	}
]
...

```

**Example with ID of a property in foreign language, without specification of language:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "identifier": "",
        "resourcetype": "estatepictures",
        "resourceid": "",
        "parameters":
        {
            "estateids": &#x5B;143],
            "categories": &#x5B;"Foto"]
        }
    }

```

**Response example with ID of a main property:**

```

...
"records": &#x5B;
	{
		"id": 1461,
		"type": "files",
		"elements":
		{
			"estateid": "137",
			"type": "Foto",
			"url": "https:\/\/image.onoffice.de\/smart25\/Objekte\/index.php?kunde=Igelmund&datensatz=137&filename=Foto_1461.jpg",
			"title": "Screenshot Deutsch",
			"text": "Freitext Deutsch OFF",
			"originalname": "Screenshot Shopping Center.png"
		}, 
		{
			"estateid": "143",
			"type": "Foto",
			"url": "https:\/\/image.onoffice.de\/smart25\/Objekte\/index.php?kunde=Igelmund&datensatz=137&filename=Foto_1461.jpg",
			"title": "Screenshot Englisch",
			"text": "Freitext Englisch OFF",
			"originalname": "Screenshot Shopping Center.png",
			"modified": 1540301235,
			"estateMainId": "143"
		}
	}
]
...

```