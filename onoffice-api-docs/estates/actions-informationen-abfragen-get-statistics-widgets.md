---
source: https://apidoc.onoffice.de/actions/informationen-abfragen/get-statistics-widgets/
title: get-statistics-widgets
scraped: 2026-01-08T20:25:21.760Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Estates](https://apidoc.onoffice.de/api-calls-sorted-by-module/estates/) &raquo; [Get Statistics Widgets](https://apidoc.onoffice.de/actions/informationen-abfragen/get-statistics-widgets/) &raquo; Get Statistics Widgets		

	
	
		
# Get Statistics Widgets
	

	

		
**Resource type: **`statisticWidgets`

Reads the configuration of the statistics widgets from the statistics tab for properties. User right &#8220;Visible Property statistics&#8221; (Sichtbare Objektstatistiken) must not be set to &#8220;None&#8221; in order to have read access.

**Parameter:**

`module`

STRING. MANDATORY. Module. Only possible value: `estate`.

**Example**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "statisticWidgets",
    "parameters": {
        "module":"estate"
    }
}

```

**Response parameter:**

`id`

INTEGER. ID of the statistic widget.
`title`

STRING. Title of the statistic widget.
`type`

STRING. Type of the statistic widget. Possible values: `statisticDetailReportingActivities` (Widget type &#8220;Activity Statistics&#8221;) or `statisticDetailReportingItemRelatedRecordsList` (Widget type &#8220;Assigned overview&#8221;).
`activeForReporting`

BOOLEAN. Setting &#8220;Active for the owner reporting&#8221;.
`tab`

STRING. Name of the statistic tab.
`configuration`

OBJECT. Information about the configuration of the statistics widget. Please note that widgets of type &#8220;Assigned overview&#8221; have less information in the `configuration` response parameter, as these widgets have fewer settings.

- `widgetType`: STRING. `diagram` or `list`. Setting &#8220;Display as table&#8221;.

- `evaluationTarget`: STRING. Setting &#8220;Which value is counted (y)&#8221;.

- `evaluationType`: STRING. Setting &#8220;What is counted (x)&#8221;.

- `addressFilterId`: INTEGER. Setting &#8220;Contact filter&#8221; or &#8220;Filter&#8221;. Filter ID of the selected filter.

- `addressFilter`: STRING. Setting &#8220;Contact filter&#8221; or &#8220;Filter&#8221;. Outputs the filter expression of the selected filter from `addressFilterId`. For some widgets, fixed filter expressions are set that are not a saved filter from enterprise, these filter expressions dont have a `addressFilterId`.

- `actionTypes`: OBJECT. Action types of the statistics widget with `id`, `type` and `children` array for the kind of types. Setting &#8220;Type and kind of action&#8221;. `id` 0 and `type` &#8220;&#8221; corresponds to the value &#8220;no information&#8221;.

- `actionAttribute`: ARRAY. Setting: &#8220;Activity features&#8221;.

- `origin`: OBJECT. Origin (Source/contact) of the statistics widget with `id` and `value`. Setting: &#8220;Source/contact&#8221;.

- `attribute`: OBJECT. Attribute of the statistics widget with `id` and `value`. Setting &#8220;Characteristic&#8221;.

- `period`: STRING. Setting &#8220;Period&#8221;.

- `chartType`: STRING. Setting &#8220;Diagram&#8221;.

- `showSumRow`: BOOLEAN. Setting &#8220;Display total line (only in table view)&#8221;.

- `description`: STRING. Tab &#8220;Remarks&#8221; of the statistic widget.

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
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:get",
        "resourceid": "",
        "resourcetype": "statisticWidgets",
        "cacheable": true,
        "identifier": "",
        "data": {
          "meta": {
            "cntabsolute": 1
          },
          "records": &#x5B;
            {
              "id": 275,
              "type": "statisticWidgets",
              "elements": {
                "id": "275",
                "title": "Overview activities",
                "type": "statisticDetailReportingActivities",
                "activeForReporting": false,
                "tab": "Allgemein",
                "configuration": {
                  "widgetType": "diagram",
                  "evaluationTarget": "targetAgentsLogCount",
                  "evaluationType": "typeAktionsart",
                  "addressFilterId": 119,
                  "addressFilter": "( ( `addressRelations`.`department` NOT LIKE &#039;%%4%%&#039; OR `addressRelations`.`department` IS NULL  ) AND `adressen`.`AGB_akzeptiert` = &#039;1&#039; )",
                  "actionTypes": &#x5B;
                    {
                      "id": 118,
                      "type": "Termin",
                      "children": &#x5B;
                        {
                          "id": "57",
                          "type": "Beratung"
                        },
                        {
                          "id": "33",
                          "type": "Besichtigung"
                        }
                      ]
                    },
                    {
                      "id": 194,
                      "type": "Immofeedback / Terminnachbereitung",
                      "children": &#x5B;
                        {
                          "id": "224",
                          "type": "Rückmeldung Besichtigung"
                        },
                        {
                          "id": "277",
                          "type": "Rückmeldung Web-Exposé"
                        }
                      ]
                    },
                    {
                      "id": 120,
                      "type": "Email",
                      "children": &#x5B;
                        {
                          "id": "28",
                          "type": "Eingang"
                        },
                        {
                          "id": "29",
                          "type": "Ausgang"
                        },
                        {
                          "id": "169",
                          "type": "MLS Angebot versendet"
                        }
                      ]
                    }
                  ],
                  "actionAttribute": &#x5B;
                    "Download",
                    "Downloadlink",
                    "Download1",
                    "externalMail",
                    "Kontakt zugefuehrt",
                    "agreedToDataStorage",
                    "cancelationConfirmationAgreementLink",
                    "storno",
                    "Exposeversand"
                  ],
                  "origin": &#x5B;],
                  "attribute": &#x5B;],
                  "period": "",
                  "chartType": "bar",
                  "showSumRow": false,
                  "description": "Dieses Widget bietet eine Übersicht über die bisher getätigten Aktivitäten."
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

[](https://apidoc.onoffice.de/wp-content/uploads/2025/02/Statistic_Widgets.png)