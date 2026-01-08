---
source: https://apidoc.onoffice.de/actions/datensatz-lesen/user-photo/
title: user-photo
scraped: 2026-01-08T20:26:24.454Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Settings](https://apidoc.onoffice.de/api-calls-sorted-by-module/settings/) &raquo; [Read User photo](https://apidoc.onoffice.de/actions/datensatz-lesen/user-photo/) &raquo; Read User photo		

	
	
		
# Read User photo
	

	

		
**Resource:** `userphoto`

This API call reads user photos. The photos are delivered as base64 strings or as links, depending on the parameter `photosAsLinks`.

Without parameters the photos of the first 20 users are delivered. Use parameter `listlimit` to retrieve more. If you specify a user ID as `resourceid`, the photo of this user will be delivered. 

With the parameter `filter` you can specify an array of user IDs whose photos you want to read. If there is no picture at all existing for the user, the parameter `photo` returns null.

If no user photo is available under &#8220;Extras >> Settings >> User >> Tab basic data &#8220;, the photo of the linked address record is delivered. 

You need read permission to query user data via API. This can be set under &#8220;Extras->Einstellungen->Benutzer&#8221; / &#8220;Extras->Settings->User&#8221;. Choose the tab &#8220;API user&#8221;, then the tab &#8220;Rights&#8221; with the setting &#8220;Benutzerdaten über API auslesen&#8221; / &#8220;Read out user data by API&#8221;. Only API users can see this setting.

**Parameters:**

`photosAsLinks`

BOOLEAN. If true, the photos are delivered as links, not as base64 strings. Default: `false`.
`filter`

OBJECT. Key: field, value: array of objects with filter expressions in the format `"Nr": [{"op": "=", "val": 1}]`. With `op` you specify the operator. Possible values for `op` are the following SQL operators:

```
is or =, >, <, >=, <=, != or <>, between, like, not like, in, not in
```

For the operator `like` the value % can be specified as a placeholder. See  [here ](https://apidoc.onoffice.de/actions/datensatz-lesen/user/) for a list of user fields that can be used in the filter parameter.

With `val` you specify the value which should be applied to the filtering. The individual filter expressions are linked with the AND operation. See also the example below.
`sortby`

OBJECT. Fields to sort by. The field name is used as the key, and the type of sorting as the value. Notation: `{"Nr": "ASC"}`

Possible values for sorting are ASC for ascending, DESC for descending.
`listlimit`

INTEGER. Maximum number of records in the list. Default value: 20.
`messengerUIds`

ARRAY. Array of messenger user IDs. Another way to retrieve user pictures is via the parameter `messengerUIDs`. For the messenger, it is easier to retrieve user pictures using the users&#8217; messenger ID. 

The messenger UIDs correspond to users. The messenger UIDs can be read with the calls [messenger chatroom participants]( https://apidoc.onoffice.de/actions/datensatz-lesen/messenger-chatroom-participants/) and [messenger user list](https://apidoc.onoffice.de/internal-api-calls/read-messenger-userlist/). The pictures requested with the `messengerUIds` parameter ignore the `filter` parameter. 

When queried via messengerUIds, the response also contains the parameter messengerUIds to establish the mapping between user IDs and messengerUIds. If the messengerUIds array is empty, the messengerUIds for all users will still be output in the response.

**Example: Read user photo as link**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid": "21",
        "identifier": "",
        "resourcetype": "userphoto",
        "parameters": {
            "photosAsLinks": true
        }
    }

```

**Response:**

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
                "resourceid": "21",
                "resourcetype": "userphoto",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 21,
                            "type": "user",
                            "elements": {
                                "photo": "https:\/\/beta.smart.onoffice.de\/smart20\/Dateien\/CustomerName\/users\/Userphoto_21.jpg"
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

**Example: Read user photos from users 17, 19 and 21**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "userphoto",
    "parameters": {
        "filter": {
            "Nr": &#x5B;
                {
                    "op": "in",
                    "val": &#x5B;
                        17,
                        19,
                        21
                    ]
                }
            ]
        },
        "sortby": {
            "Nr": "DESC"
        }
    }
}

```

**Response:**

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
                "resourceid": "",
                "resourcetype": "userphoto",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 21,
                            "type": "user",
                            "elements": {
                                "photo": null
                            }
                        },
                        {
                            "id": 19,
                            "type": "user",
                            "elements": {
                                "photo": null
                            }
                        },
                        {
                            "id": 17,
                            "type": "user",
                            "elements": {
                                "photo": "\/9j\/4AAQSkZJRgABAQEAYABgAAD\/\/gA8Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gMTAwCv\/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf\/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf\/AABEIAZAA6wMBIgACEQEDEQH\/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv\/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8\/T19vf4+fr\/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv\/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8\/T19vf4+fr\/2gAMAwEAAhEDEQA\/AP0r0XTJNb1jSdGhmgtpdX1Ow0yK4uW2W0El\/dRWqTXDgEpBE0oeVsHbGrHHFe\/eLPhx8Oo9C8Tf8IqPHllrXhHR5Nb\/ALR8UHTTpPiey0zxVaeDdfRNPtdNtLjw7d2us3qraRXGo6kPPgfR2F481trM3hWjDw2RcjxBJrkT7rf7HJo0NhOFXM32o3MV7PbF2x9nFuIpowCZjIeEB9X174kab4m0z+x9Z8U\/EG6sJZBNqOdI8Ix3uuXFjAV0m41\/UrOay1LX54bgu6z6\/eavNYxzE2sks0Zkn\/sDHRxcsThpYedanSoyUqyipqM4qVOcrKF2Q=="
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

**Example: Read user photos via messenger UIDs**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "userphoto",
        "parameters": {
            "messengerUIds": &#x5B;
                167089,
                174777
            ]
        }
    }

```

**Response:**

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
                "resourceid": "",
                "resourcetype": "userphoto",
                "cacheable": true,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 25,
                            "type": "user",
                            "elements": {
                                "photo": "\/9j\/4AA9RbTrvS\/AF1BHHp\/lvP4cvHmUy27XLHeNaCt86qAHRlCBQFykZXok\/bA+Id49mtz4S+F8xGn2t2HfwresyytpiuwTOulUVgzo2xVaRJJDIzu28FFaOMVGSUYpJqySSt8L\/PUqCTkrq93Z31uvZ3s++up5f8AGD9pXxhqFh8JdWi8J\/DTTL1fi74MN0+m+EFRNRtLi5lFxpl5Hd394n9n3C2luk0VqLWWRIkBnyqkdjq37YfjqW\/1bS7r4f8AwbvrLTrqbyIb3wRc3CllsrRRI6PruzzCLlyzRJFucJKQZQXYorKulG7iuVuUU2tG1zU1Ztb6Nr5vuzqjCDpQTjFrkqOzimr8zV7W7aHgp\/4KJ\/HDT9cu9D0jw38JtF0+2gW3totK8H6hai2t43ihjgtoz4jkgto0V2I8iGNiThmZAFHVeHv+Chf7QOtzWyyp4DsVWeSNl07wxNCsqwJ5q+Ys2rXC7mKKrPGI2CZEZRiWooru5IOCbhFv2cdXFX1gm9bX1er7nAm1NpNpc9rLRW00ttY9aH7XXxu1W3W4m17S4C8UaRx2uhaciQJ5FixWJpYpp3XfK0gW4mnCv9wKpKmt4N\/aO+N3i3xB4q0268e3GmQaTJDFC2k+HvByTT\/8SrR75JLltQ8O6ipkimv7gRmBIFEZUMrMC7FFY4enTcKrdODajBpuMW07U9U7XT80KrKSULSavFXs2r6y3t6L7keweJ9P8ZXuiax41vPi\/wDFGTX7WDU7S1urXVvD+jfZ7RbjTZDbI2g+GdKnkidyHzPPNJG4d4Hhe4umn+W\/Ft54l0PxR8PoG8e\/EXWovEXiPWNJ1SLWvHfia4inRNBa+juzDaajYwvdxzWUYAnjms2jeRJLN8RGIorz6LftMbq9K2HS1eicKaaXZNNppaNN92Ki23UTbatT0bv1pv8APX11PTtQvRrVvr+v3+n6LJrTzXUv9oLoekpIlxZ6XL5VzHCLP7JHIUhWN0S3EG1pWjhjlkeQ1LvUrjU7C9srraIl0qQhrYzWUvm28bzRz+ZaSwMJxcWNrdLIuDDcwRTWwheKIxlFXVSlzyklKUqla8pat6x3bu38zpskpRSSjGFFRjb3YrlTslsldvbuebaB8V\/E6aFoepXEemX1+UvIJbq4guoZJ302+k06O6lXT72yi+0zwW6tcNHHHEZHlMEMEbCMVvEX7TfxJi8c6D4PhTw9FY6l4PstYnv20+9u9VWaabULV7aK4v8AVLu3WzMMQTY9o8xDOGnKttBRWFeEI0a0oxjGSpNpqKTTSVmmldNdGjFzmsM2pyT54aqTvq431vfW7v6nbxeBbbTNPl1G01zXIf8AhMri91XUrKBPD9lYWd+1qlzcT6NBp+g2b6WL2c+dewQS\/Z7i5Ml48P2ye4uJuC8QaXaaZ4cvPFFt58mo6Hps2oxw39zPq2m6ggtZ5\/7P1LTtVkvbWWz3Rqqy20dpqUS7zDqEbyyu5RXbgm5YSm5Nt81rt3duVaanLNLkTtqlKz67nofh\/QvD\/iDwhoNzqOg6SU1uw0i+ktYLYwQ6de3tos8l5pFwkn9o6fdxPJKLe7ivjdRJNcRiYpdXKzfOHxb1S88A6zqPhDSpBf6fDd6fa2l1rKi81K1ttY1rVbGeBbiD7JDdpDaWVvDA2pW19I2zzLt7qULIpRRQjH67SjyrlnGfPGytP3ZfGtpfO5WI+BvrZa9dUr6+fUl0Pw7aRqryXeq3MlrDf\/Ymn1G4WPTY5h508OkWls1vY6LDM8YMiaRa2PDSBSvmPu6i58Za3YadqVg0sV\/Hp8dsLaW+SQzLBqE\/2aa1f7JLaRSQJE22MvC05KqZppiDkorCvGNPEYWNNKEZykpxglGMkkklJKykkkkk72SsYybUdG\/ifXzf+S+5HXWHw48KnTpoLm0ur2K4sYJYoLi\/u1stPaRJ3zpmlW0tvpFi8Zt4zHcQ2Aull3XXnm8b7TWNI7+HfFem+GoG\/tDSb6y1DUI4dUSO4msGszHepb2l3AltcyQSXLySyvqMt\/dl3d47qN23UUV25f70Fze9ZNrm1s\/dV1frY1aSUGkk3CLbSSbfLF3bW+rb9WznE1G+8U+GNO8Q6jdT28kut3OnT6dpMsmk2NxbmW4ULPNYtDrEihY0Vrc6r9jlVQs9tKABXu+nabZ+H9MsLTSIIbCzikt7hLS2t7aG2D397CbomGKFEZpSXLzMGuJDIwkmddoUorplrUs9VCtaCeqgnKSaito3WjtbTQmk3ySd3dqCbvq1aOje5\/\/Z",
                                "messengerUId": 167089
                            }
                        },
                        {
                            "id": 163,
                            "type": "user",
                            "elements": {
                                "photo": null,
                                "messengerUId": 174777
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