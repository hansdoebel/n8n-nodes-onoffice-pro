---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/get-survey/
title: get-survey
scraped: 2026-01-08T20:26:37.124Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Miscellaneous](https://apidoc.onoffice.de/api-calls-sorted-by-module/miscellaneous/) &raquo; [Get Survey](https://apidoc.onoffice.de/actions/informationen-abfragen/get-survey/) &raquo; Get Survey		

	
	
		
# Get Survey
	

	

		
**Resource type:** `appointmentdocument`

Action Type: Get

Retrieves app surveys from an appointment (Bearbeiten->App-Fragebögen). With no resourceid given, all surveys will be returned with title only. With a resourceid given, the requested survey is retrieved with more information. See examples for usage. The call has no request parameters.

**Example with no resourceid:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "appointmentdocument",
    "parameters": &#x5B;]
}

```

**Response with no resourceid:**

**Parameters:**

`title`

STRING. title of the survey

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
                "resourcetype": "appointmentdocument",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 1,
                            "type": "",
                            "elements": {
                                "title": "Test Fragebogen"
                            }
                        },
                        {
                            "id": 3,
                            "type": "",
                            "elements": {
                                "title": "Test Fragebogen2"
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

**Example with resourceid:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "3",
    "identifier": "",
    "resourcetype": "appointmentdocument",
    "parameters": &#x5B;]
}

```

**Response with resourceid:**

**Parameters:**

`"title of survey"`

ARRAY. Content of the survey
`transfered`

BOOLEAN. If survey was sent via email
`pdftype`

STRING. Type of pdf
`needsaddress`

BOOLEAN. Adress context needed? 
`needsproperty`

BOOLEAN. Estate context needed? 
`needsappointment`

BOOLEAN. Appointment context needed? 

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
                "resourceid": "3",
                "resourcetype": "appointmentdocument",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 0,
                            "type": "",
                            "elements": {
                                "Test Fragebogen2": &#x5B;
                                    &#x5B;
                                        &#x5B;
                                            {
                                                "pagetopic": "neue Seite"
                                            }
                                        ],
                                        &#x5B;
                                            {
                                                "topic": "Bewertung Immobilie"
                                            }
                                        ],
                                        &#x5B;
                                            {
                                                "type": "textsingleline"
                                            },
                                            {
                                                "question": "Wie hat Ihnen die Immobilie gefallen?"
                                            }
                                        ]
                                    ]
                                ],
                                "transfered": false,
                                "pdftype": "Fragen",
                                "needsaddress": true,
                                "needsproperty": true,
                                "needsappointment": true
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