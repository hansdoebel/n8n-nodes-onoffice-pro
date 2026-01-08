---
source: https://apidoc.onoffice.de/multilingual-estates/
title: multilingual-estates
scraped: 2026-01-08T20:26:49.561Z
---

[Home](https://apidoc.onoffice.de) &raquo; [Various special topics](https://apidoc.onoffice.de/various-special-topics/) &raquo; [Multilingual estates](https://apidoc.onoffice.de/multilingual-estates/) &raquo; Multilingual estates		

	
	
		
# Multilingual estates
	

	

		
If you want to address international prospective buyers, you can manage your estates in different languages.

If you have your own multilingual website or work with multilingual portals, the right contents of the estate will then be displayed in the chosen language.

Please note that the multilingual module is a paid add-on module. Please contact your sales contact person for more information.

For general information on the multilingual module, see the [ online help](https://de.enterprisehilfebeta.onoffice.com/help_entries/multilingual-property/?lang=en).

[Here](https://apidoc.onoffice.de/actions/informationen-abfragen/auf-homepage-veroeffentlichte-objektbilder/) are information about multilingualism in the api call &#8220;Estate images published on Homepage&#8221;. The free text and file title of estate images can be set in different languages.

In case of multi language estates all language dependent fields, e.g. the free texts like location, description, equipment etc. are maintained in the required languages, all other estate fields are synchronous between the different language versions of an estate.

onOffice offers also the translation function of DeepL to automatically translate free texts of estates.

Each free text field, where texts can be entered in several languages, shows a globe icon in the upper right corner. Use this icon to activate the automatic translation function.

Estates created in different languages have sub-ids that are linked to the estate in the primary language. The sub-ids cannot be queried via API. Therefore, if you want to read or write multilingual estate, you have to specify the ID of the estate in the main language and the desired language via the parameter `estatelanguage`.

Note that you cannot create real estate in secondary languages using the API. This is only possible via the GUI, at the bottom right of the action bar at &#8220;Multi language&#8221;. The estate is always created in the system language when you use the &#8220;Create estate&#8221; call.

The relevant language parameters are called `estatelanguage` and `addestatelanguage`.

`estatelanguage`: STRING. Language of the object, only relevant for multi-language estates. Specified in ISO format with 3 characters, e.g. DEU, ENG. Used in the read and modify estate call.

`addestatelanguage`: BOOLEAN. Adds estate language to the response. If set to true, in the result language is set to the A3 abbreviation of the language if it is a multilingual estate, or an empty string if the estate is in the default language. Used in the read estate call.

`addMainLangId`: BOOLEAN. Adds the estate ID of the estate in the main language to the response.

There are also the parameters `outputlanguage` and `formatouput` in the read estate call. With these parameters single and multiselect values are read in the desired language.

The workflow for multilingual estates is described below with examples:

1.) Create a multilingual estate in the desired languages in enterprise.

2.) Example request and response to modify a multilingual estate:

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
        "resourceid": "4497",
        "identifier": "",
        "resourcetype": "estate",
        "parameters": {
            "data": {
                "objektbeschreibung": "This is an english description text",
                "lage": "This is an english location text",
                "ausstatt_beschr": "This is an english equipment text"
            },
            "estatelanguage": "ENG"
        }
    }

```

Response:

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
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
                "resourceid": "4497",
                "resourcetype": "estate",
                "cacheable": false,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 0,
                            "type": "estate",
                            "elements": {
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

```

3.) Example request and response to read a multilingual estate:

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid": "4497",
        "identifier": "",
        "resourcetype": "estate",
        "parameters": {
            "data": &#x5B;
                "Id",
                "objektbeschreibung",
                "lage",
                "ausstatt_beschr"
            ],
            "estatelanguage": "ENG",
            "addestatelanguage": true,
            "addMainLangId": true
        }
    }

```

Response:

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
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
                "resourceid": "4497",
                "resourcetype": "estate",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": 1
                    },
                    "records": &#x5B;
                        {
                            "id": 4499,
                            "type": "estate",
                            "elements": {
                                "Id": "4499",
                                "objektbeschreibung": "This is an english description text",
                                "lage": "This is an english location text",
                                "ausstatt_beschr": "This is an english equipment text",
                                "mainLangId": "4497",
                                "language": "ENG"
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

**Note:** to query the uuid of the foreign-language object in the filter parameter, you must enter the uuids of the main language (depends on the country of the customer, usually German), together with the desired language in “estatelanguage”. You will then receive the uuids of the foreign-language objects in the response as well as the data record number/ID of the object in the main language in ‘mainLangId’ and the ID of the object in the secondary language under “id”. Filtering for a foreign-language ID returns no results.