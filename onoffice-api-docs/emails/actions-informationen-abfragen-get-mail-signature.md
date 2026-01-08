---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/get-mail-signature/
title: get-mail-signature
scraped: 2026-01-08T20:26:15.887Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Emails](https://apidoc.onoffice.de/api-calls-sorted-by-module/emails/) &raquo; [Get Mail signature](https://apidoc.onoffice.de/actions/informationen-abfragen/get-mail-signature/) &raquo; Get Mail signature		

	
	
		
# Get Mail signature
	

	

		
**Resource type:** `emailsignature`

Action Type: Get

Returns signature, ID and title of email signatures of the logged in user. If a resource id is specified, the signature content in `signature` will be returned. Else a list of signatures with `id` and `title` only will be returned. To read out the customer signature under &#8220;Extras >> Settings >> Basic settings >> Email settings&#8221;, enter -1 as the resource id.

**Parameters:**

`ishtml`

BOOLEAN. Is html?
`getdefaultsignature`

BOOLEAN. If true, the content of the default signature will be returned. If false, a list of all signatures with id and title will be returned. Default: FALSE / 0

**Example:**

```

{
	"actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
	"resourceid": "",
	"identifier": "",
	"resourcetype": "emailsignature",
	"parameters": {
               "getdefaultsignature":true
	}
}

```

**Response parameters:**

- `id`. Signature ID

- `title`. Signature title

- `signature`. Signature content

- `isdefault`. True, if signature is the standard signature

**Response example: **

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
                "resourcetype": "emailsignature",
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
                                "signature": "i.A. Robert Igelmund \n<!--&#x5B;if gte vml 1]>\n<v:shapetype id=\"_x0000_t75\" coordsize=\"21600,21600\"\n o:spt=\"75\" o:preferrelative=\"t\" path=\"m@4@5l@4@11@9@11@9@5xe\" filled=\"f\" stroked=\"f\">\n<v:stroke joinstyle=\"miter\"\/>\n<v:formulas>\n <v:f eqn=\"if lineDrawn pixelLineWidth 0\"\/>\n <v:f eqn=\"sum @0 1 0\"\/>\n <v:f eqn=\"sum 0 0 @1\"\/>\n <v:f eqn=\"prod @2 1 2\"\/>\n <v:f eqn=\"prod @3 21600 pixelWidth\"\/>\n <v:f eqn=\"prod @3 21600 pixelHeight\"\/>\n <v:f eqn=\"sum @0 0 1\"\/>\n <v:f eqn=\"prod @6 1 2\"\/>\n <v:f eqn=\"prod @7 21600 pixelWidth\"\/>\n <v:f eqn=\"sum @8 21600 0\"\/>\n <v:f eqn=\"prod @7 21600 pixelHeight\"\/>\n <v:f eqn=\"sum @10 21600 0\"\/>\n<\/v:formulas>\n<v:path o:extrusionok=\"f\" gradientshapeok=\"t\" o:connecttype=\"rect\"\/>\n<o:lock v:ext=\"edit\" aspectratio=\"t\"\/>\n<\/v:shapetype>\n<v:shape id=\"_x0000_i1025\" type=\"#_x0000_t75\" style=\"width: 151px; height: 113px;\">\n<v:imagedata src=\"https:\/\/beta.smart.onoffice.de\/smart20\/Dateien\/Igelmund\/users\/Userphoto_17.jpg\" o:title=\"Passfoto\"\/>\n<\/v:shape>\n<!&#x5B;endif]-->\n<!&#x5B;if !vml]><img width=151 height=113 src=\"https:\/\/beta.smart.onoffice.de\/smart20\/Dateien\/Igelmund\/users\/Userphoto_17.jpg\" v:shapes=\"_x0000_i1025\"><!&#x5B;endif]> Robert Igelmund  <img alt=\"\" width=\"\" border=\"0\" style=\"display:block;\" src=\"https:\/\/beta.smart.onoffice.de\/smart20\/Dateien\/Igelmund\/Logos\/Logo_Igelmund.png\" \/>  Nordhoffstr. 2 | 52074 Aachen TESTPREMAKRO: test2 Tel. 017817909031111 | Fax.  E-Mail: r.igelmund_test@my-onoffice.de | Web:  Diese Mail wurde mit onOffice enterprise versendet &middot; www.onOffice.com &middot;"
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