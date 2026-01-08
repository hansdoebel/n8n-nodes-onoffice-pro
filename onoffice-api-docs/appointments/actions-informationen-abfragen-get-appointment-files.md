---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/get-appointment-files/
title: get-appointment-files
scraped: 2026-01-08T20:25:53.991Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Appointments](https://apidoc.onoffice.de/api-calls-sorted-by-module/appointments/) &raquo; [Get Appointment files](https://apidoc.onoffice.de/actions/informationen-abfragen/get-appointment-files/) &raquo; Get Appointment files		

	
	
		
# Get Appointment files
	

	

		
**Resource type:** `file`

This call can be used to query information about files from an appointment (Tab files). The files are provided via download link. An appointment ID must be specified. `resourceid` is always `appointment`.

**Parameters:**

`appointmentid`

INTEGER. Appointment ID.

`listlimit`

INTEGER. Maximum number of files in the list. Default value: 20, Maximum: 100.

`listoffset`

INTEGER. Offset of the list, that means from which data record onwards the list should be output.

**Example:**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "appointment",
    "identifier": "",
    "resourcetype": "file",
    "parameters": {
        "appointmentid": "247"
    }
}

```

**Response:**

`username`

STRING. User name who uploaded the file
`filename`

STRING. File name.
`fileSize`

INTEGER. File size in bytes.
`url`

STRING. URL for the file download. The validity of the link is limited to 1 hour.

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
        "resourceid": "appointment",
        "resourcetype": "file",
        "cacheable": true,
        "identifier": "",
        "data": {
          "meta": {
            "cntabsolute": 1
          },
          "records": &#x5B;
            {
              "id": 3247,
              "type": "file",
              "elements": {
                "username": "mustermann",
                "filename": "Bild1.png",
                "fileSize": "168477",
                "url": "https://smart.onoffice.de/smart/app/smart/AppAnonymousFileDownload.php?params=w4RzOBEP4hQSSHgM6Rxm2j41lJM%2BSBfVd7eSbHuPPgJ6Xo5fgwBkK14n0j3aiZPOysrf2aTxxMRQ8ub9vJ3EJ3qOPqLU9vMtM%2Bkv74x3SQTqJ%2BJooUJznmQBzF1qrF%2ByysqaDGHpq21R9tXuiFNdKw%3D%3D"
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