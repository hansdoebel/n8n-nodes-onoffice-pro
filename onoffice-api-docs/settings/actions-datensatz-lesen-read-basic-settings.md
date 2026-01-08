---
source: https://apidoc.onoffice.de/actions/datensatz-lesen/read-basic-settings/
title: read-basic-settings
scraped: 2026-01-08T20:26:19.179Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Settings](https://apidoc.onoffice.de/api-calls-sorted-by-module/settings/) &raquo; [Read Basic settings](https://apidoc.onoffice.de/actions/datensatz-lesen/read-basic-settings/) &raquo; Read Basic settings		

	
	
		
# Read Basic settings
	

	

		
**Resource type: **`basicsettings`

Read outs the basic settings in enterprise (Extras->Settings->Basic settings). For now, only the category &#8220;Characteristics/CI&#8221; on the tab &#8220;Basic Data&#8221; is returned and a few other settings.

[](https://apidoc.onoffice.de/wp-content/uploads/2025/06/CI.png)

**Parameter:**

`data`

OBJECT. Data.

`basicData`

OBJECT. Basic data. Name of the tab in the basic settings.

`characteristicsCi`

ARRAY. characteristics and CI. Name of the category on the tab `basicData`. Possible values follow.

`logo`

STRING. Logo as base64-encoded binary data.
`color`

STRING. Main colour as hexidecimal value.
`color2`

STRING. Secondary colour as hexidecimal value.
`textcolorMail`

STRING. Font colour as hexidecimal value.
`claim`

STRING. Claim.
`systemUiColor`

STRING. A hexadecimal value representing the desired main color of the system. (Example: ff0000).
`moduleIconUiColor`

STRING. A hexadecimal value representing the color of the module icons.
`moduleIconShadeUiType`

STRING. Select the shading between the values “hell” (light) or “dunkel” (dark).
`warningNoticeUiColor`

STRING. A hexadecimal value representing the color of the warning notice.
`showLogoInQuickbar`

BOOLEAN. This checkbox allows the user to choose whether to show the logo in the user interface.
`spotColor`

STRING. A calculated color derived from the system color that is automatically darkened for light values.

`team`

OBJECT. Value: `about` (Über uns).
`permissions`

OBJECT. Value: `/onOfficeApp/timetracking/enabled` Time tracking for mobile enabled?

**Request example**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "basicsettings",
    "parameters": {
        "data": {
            "basicData": {
                "characteristicsCi": &#x5B;
                    "logo",
                    "color",
                    "color2",
                    "textcolorMail",
                    "claim",
                    "systemUiColor",
                    "moduleIconUiColor",
                    "moduleIconShadeUiType",
                    "warningNoticeUiColor",
                    "showLogoInQuickbar",
                    "spotColor"
                ],
                "permissions": &#x5B;
                    "/onOfficeApp/timetracking/enabled"
                ],
                "team": &#x5B;
                    "about"
                ]
            }
        }
    }
}

```

**Response example**

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
                "resourcetype": "basicsettings",
                "cacheable": false,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 0,
                            "type": null,
                            "elements": {
                                "basicData": {
                                    "characteristicsCi": {
                                        "logo": "",
                                        "color": "d8bfd8",
                                        "color2": "ffa07a",
                                        "textcolorMail": "ff0000",
                                        "claim": "",
                                        "systemUiColor": "a52a2a",
                                        "moduleIconUiColor": "ffffff",
                                        "moduleIconShadeUiType": "ffffff22",
                                        "warningNoticeUiColor": "ff7f50",
                                        "showLogoInQuickbar": false,
                                        "spotColor": "a52a2a"
                                    },
                                    "permissions": {
                                        "/onOfficeApp/timetracking/enabled": true
                                    },
                                    "team": {
                                        "about": "Test about us Text field in Response"
                                    }
                                }
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