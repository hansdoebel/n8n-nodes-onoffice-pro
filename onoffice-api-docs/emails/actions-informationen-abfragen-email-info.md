---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/email-info/
title: email-info
scraped: 2026-01-08T20:26:13.805Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Emails](https://apidoc.onoffice.de/api-calls-sorted-by-module/emails/) &raquo; [Get Email Info](https://apidoc.onoffice.de/actions/informationen-abfragen/email-info/) &raquo; Get Email info		

	
	
		
# Get Email info
	

	

		
**Resource type: **`emailInfo`

This can be used to retrieve address and property links with an email.

**Parameters:**

`emailIdentity`

STRING. MANDATORY. Email identity. Can only accept identities associated with the user in enterprise.
`messageId`

STRING. MANDATORY. Unique message ID of the email.
`uid`

STRING. MANDATORY. Unique identifier of the email.
`folder`

STRING. MANDATORY. Folder in which the email is located.

**Example:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "emailInfo",
    "parameters": {
        "messageId": "<20240428000241.A9821239589@cron001.onoffice.de>",
        "uid": "243",
        "folder":"Posteingang",
        "emailIdentity": "tester567@my-onoffice.de"
    }
}

```

**Response:**

The `id` is the `messageid` from the request.

`isPortalRequest`

BOOLEAN. True, if email is a portal request

`addresses`-Array:

`addressId`

Address ID
`addressCustomerNo`

Customer number (address)
`addressFirstname`

First name (address)
`addressSurname`

Surname (address)
`addressCompany`

Company (address)
`addressEmail`

Email of the address

`estates`-Array:

`estateId`

Estate ID
`estateExternalNo`

External property number (estate)
`estateOwner`

Owner (estate)
`estateStreet`

Street (estate)
`estateCity`

City (estate)

`actions`-Array:

`type`

Type of the email, e.g. &#8220;replied&#8221;.
`description`

Description of the email, e.g. &#8220;Am 19.4.24 um 09:54 Uhr beantwortet&#8221;.

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
                "resourcetype": "emailInfo",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": "<20240428000241.A9821239589@cron001.onoffice.de>",
                            "type": "",
                            "elements": {
                                "isPortalRequest": false,
                                "addresses": &#x5B;
                                    {
                                        "addressId": 293,
                                        "addressCustomerNo": 186,
                                        "addressFirstname": "Theo",
                                        "addressSurname": "Test",
                                        "addressCompany": "",
                                        "addressEmail": "tester887@my-onoffice.com"
                                    },
                                    {
                                        "addressId": 375,
                                        "addressCustomerNo": 227,
                                        "addressFirstname": "Tina",
                                        "addressSurname": "Test",
                                        "addressCompany": "",
                                        "addressEmail": "tester679@onoffice.de"
                                    }
                                ],
                                "estates": &#x5B;
                                    {
                                        "estateId": 117,
                                        "estateExternalNo": "13",
                                        "estateStreet": "Musterstra\u00dfe",
                                        "estateCity": "Traumstadt",
                                        "estateOwner": "Heinrich Flei\u00dfig"
                                    }
                                ],
                                "actions": &#x5B;
                                    {
                                        "type": "replied",
                                        "description": "Am 19.4.24 um 09:54 Uhr beantwortet"
                                    }
                                ]
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