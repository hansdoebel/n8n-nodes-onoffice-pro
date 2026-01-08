---
source: https://apidoc.onoffice.de/actions/datensatz-bearbeiten/
title: datensatz-bearbeiten
scraped: 2026-01-08T20:26:54.738Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by action and action IDs](https://apidoc.onoffice.de/actions/) &raquo; [Modify record](https://apidoc.onoffice.de/actions/datensatz-bearbeiten/) &raquo; Modify record		

	
	
		
# Modify record
	

	

		
**Action ID:** `urn:onoffice-de-ns:smart:2.5:smartml:action:modify`

Modifying a record. The record must be specified by the resource ID.

Note for multiselect fields: Multiselect keys receive a pipe (“|”) as opener and closer. In the read calls, the keys are then returned as a string with opener and closer in the response. In the requests for create and modify, the keys are listed in an array without opener and closer. Please note that to add keys, you must always include the already set keys in the modify request in addition to the new key.

**Read request**

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

**Modify request**

```

{
    "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:modify",
    "resourcetype":"address",
    "resourceid":"6313",
    "identifier":"",
    "parameters": {
        "Anrede":"Herr",
        "Vorname":"Max",
        "Name":"Mustermann",
        "Plz":"52074",
        "Ort":"Aachen",
        "HerkunftKontakt":&#x5B;"Suchmaschine","Newsletter"]
    }
}

```

**Modify response**

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
        "resourceid": "6313",
        "resourcetype": "address",
        "cacheable": false,
        "identifier": "",
        "data": {
          "meta": {
            "cntabsolute": null
          },
          "records": &#x5B;
            {
              "id": 0,
              "type": "address",
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