---
source: https://apidoc.onoffice.de/actions/datensatz-loeschen/appointments/
title: appointments
scraped: 2026-01-08T20:25:50.903Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Appointments](https://apidoc.onoffice.de/api-calls-sorted-by-module/appointments/) &raquo; [Delete Appointments](https://apidoc.onoffice.de/actions/datensatz-loeschen/appointments/) &raquo; Delete Appointments		

	
	
		
# Delete Appointments
	

	

		
**Resource type:** `appointments`

With this API call you can delete an appointment. The appointment ID of the appointment to be deleted has to be specified as `resourceid`.

**Parameters:**

none

**Example: Delete an appointment**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:delete",
    "resourceid": "107",
    "identifier": "",
    "resourcetype": "calendar",
    "parameters": {
    
    }
}

```

If successful, the response is `success`.