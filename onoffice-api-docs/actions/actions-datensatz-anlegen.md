---
source: https://apidoc.onoffice.de/actions/datensatz-anlegen/
title: datensatz-anlegen
scraped: 2026-01-08T20:26:53.727Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by action and action IDs](https://apidoc.onoffice.de/actions/) &raquo; [Create record](https://apidoc.onoffice.de/actions/datensatz-anlegen/) &raquo; Create record		

	
	
		
# Create record
	

	

		
**Action ID:** `urn:onoffice-de-ns:smart:2.5:smartml:action:create`

Create a new record in enterprise.

Note for multiselect fields: Multiselect keys receive a pipe (“|”) as opener and closer. In the read calls, the keys are then returned as a string with opener and closer in the response. In the requests for create and modify, the keys are listed in an array without opener and closer.

**Read request **

```

{
    "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:read",
    "resourceid":"6313",
    "identifier":"",
    "resourcetype":"address",
    "parameters":{
        "data":&#x5B;
            "HerkunftKontakt",
            "Vorname",
            "Name",
            "Strasse",
            "Plz",
            "Ort",
            "Land",
            "Email"
        ]
    }
}

```

**Read response**

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
        "resourceid": "6313",
        "resourcetype": "address",
        "cacheable": true,
        "identifier": "",
        "data": {
          "meta": {
            "cntabsolute": 1
          },
          "records": &#x5B;
            {
              "id": 6313,
              "type": "address",
              "elements": {
                "id": 6313,
                "HerkunftKontakt": "|Tippgeber||Werbung|",
                "Vorname": "Max",
                "Name": "Mustermann",
                "Strasse": "",
                "Plz": "",
                "Ort": "",
                "Land": "Deutschland",
                "Email": "noreply43976@onoffice.de"
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

**Create request**

```

{
    "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:create",
    "resourcetype":"address",
    "resourceid":"",
    "identifier":"",
    "parameters": {
        "Anrede":"Herr",
        "Vorname":"Max",
        "Name":"Mustermann",
        "email":"m.mustermann@onoffice.de",
        "phone":"0241 12345",
        "phone_business":"0241 56789",
        "default_phone":"0241 12345",
        "Plz":"52074",
        "Ort":"Aachen",
        "Benutzer":"theotest",
        "HerkunftKontakt":&#x5B;"Suchmaschine","Newsletter"]
    }
}

```

**Create response**

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
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:create",
        "resourceid": "",
        "resourcetype": "address",
        "cacheable": false,
        "identifier": "",
        "data": {
          "meta": {
            "cntabsolute": null
          },
          "records": &#x5B;
            {
              "id": 6325,
              "type": "address",
              "elements": &#x5B;]
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