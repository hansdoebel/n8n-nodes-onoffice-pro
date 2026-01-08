---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/email-pdf-expose-vorlagen/
title: email-pdf-expose-vorlagen
scraped: 2026-01-08T20:26:08.524Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Files and Templates](https://apidoc.onoffice.de/api-calls-sorted-by-module/files/) &raquo; [Get Templates](https://apidoc.onoffice.de/actions/informationen-abfragen/email-pdf-expose-vorlagen/) &raquo; Get Templates		

	
	
		
# Get Templates
	

	

		
**Resource type:** `templates`

This API call can be used to query the templates for emails, PDF exposés, PDF letters, PDF forms and web exposés from enterprise. The transmission of the body of a PDF exposé template is currently not available due to technical reasons.

**Parameters:**

`type`

STRING. MANDATORY. Template type to be queried (`mail`, `pdf`, `pdfletter`, `pdfform`, `webexpose`).
`folderid`

INTEGER. ID of the email template folder. Only templates from this folder are then output. IDs can be retrieved via [&#8220;Get email template folders&#8221;](https://apidoc.onoffice.de/actions/informationen-abfragen/get-email-template-folders/).
`list`

BOOLEAN. Flag, whether a shorter list of all email templates should be returned. This list consists of the ID, the title and the subject. Acts exclusively on email templates.
`mailtemplateids`

ARRAY. Contains specific template IDs to which further information is to be returned.
`category`

STRING. Email category of the template. Without the parameter all categories are returned. Only email templates can be filtered via category, no PDF letters and PDF forms. Possible values: `Vorlage`, `Aktivitaeten_Bericht`, `Interessenten_Nachweis`, `ExposePDFMitInteressent_Vorlage`, `appointmentConfirmation`, `cancelation`, `adressCompletion`, `contactShipping`.

**Example:**

```

    {
        "actionid":"urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid":"",
        "identifier":"",
        "resourcetype":"templates",
        "parameters":{
			"type":"pdf"
        }
    }

```

**Response (`mail`):**

`id`

ID of the email template.
`title`

Title / name of the email template.
`subject`

Subject of the email template (can be empty).
`folder`

Folder of the email template.
`body`

Body of the email template (can be empty). Not returned if parameter `"list:true"` is set.
`ishtml`

Flag, if this is an HTML template. Not returned if parameter `"list:true"` is set.
`language`

Language of the email template.
`subid`

Sub ID of the email template. If templates are available in several languages, the Sub ID specifies the ID of the template in the main language. Otherwise the Sub ID is 0.
`ismainlanguage`

`true` if the template is in the main language.

**Response (`pdf`):**

`identifier`

ID of the PDF exposé template.
`title`

Title / name of the PDF exposé template.

**Response (`pdfletter`, `pdfform`, `webexpose`):**

`identifier`

ID of the PDF letter, PDF form or web exposé.
`title`

Title of the PDF letter, PDF form or web exposé.