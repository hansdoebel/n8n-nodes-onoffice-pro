---
source: https://apidoc.onoffice.de/erste-schritte/
title: erste-schritte
scraped: 2026-01-08T20:24:36.721Z
---

[Home](https://apidoc.onoffice.de) &raquo; [First Steps / API connection](https://apidoc.onoffice.de/erste-schritte/) &raquo; First Steps / API connection		

	
	
		
# First Steps / API connection
	

	

		
The page briefly summarizes the first steps in dealing with the API, i.e. the initial connection and the authentication process and links to the detail pages for further information.

Contents

- [1 Create API user](#Create_API_user)
- [2 Authentification](#Authentification)
- [3 JSON API](#JSON_API)
- [4 JSON Structure](#JSON_Structure)
- [5 Request URLs](#Request_URLs)
- [6 JSON request example and API test tools](#JSON_request_example_and_API_test_tools)
- [7 Using the API with the SDK (Software Development Kit)](#Using_the_API_with_the_SDK_Software_Development_Kit)
- [8 Without SDK / HMAC generation](#Without_SDK_HMAC_generation)
- [9 General hints](#General_hints)
- [10 API support](#API_support)

## Create API user

To use the onOffice API, you need an **API user** in an onOffice customer. Create an [API user](https://apidoc.onoffice.de/api-benutzer-anlegen/) in onOffice enterprise. You can assign access rights for the various modules and make other settings for the API user. Secret and API token for authentification are generated.

The API module is subject to a charge. If your user limit has been used up, please contact your account manager if you would like to create additional API users. 

## Authentification

For authentication, a secret and an API token for the API user is used. If required, e.g. if the secret has been compromised, you can generate a new secret and new API token for the API user as described [here](https://apidoc.onoffice.de/access-token-generieren/). 

The **API token** must be included in every request under `token`, as shown in the [JSON structure](https://apidoc.onoffice.de/erste-schritte/#JSON_Structure).

The **secret** is required when calculating the HMAC parameter for authentication. The calculation of the HMAC is described in detail [here ](https://apidoc.onoffice.de/onoffice-api-request/request-elemente/action/#hmac)and the result is specified in the request for each action, as can be seen under [JSON structure](https://apidoc.onoffice.de/erste-schritte/#JSON_Structure).

It is recommended to use the new, simpler version 2 of the HMAC calculation. The HMAC version is specified in the request as `hmac_version: "2"`, as shown in the [JSON structure](https://apidoc.onoffice.de/erste-schritte/#JSON_Structure).

When using the [onOffice SDK](https://apidoc.onoffice.de/erste-schritte/#Using_the_API_with_the_SDK_Software_Development_Kit), `hmac` and `timestamp` is being generated automatically and does not have to be specified. If you do not use the onOffice SDK for your API requests, you must additionally specify a timestamp and a HMAC for each request. A cURL example of a request including the HMAC calculation can be found [here](https://apidoc.onoffice.de/erste-schritte/#Without_SDK_HMAC_generation).

## JSON API

The onOffice API (API) processes every valid JSON document (JSON). Indentations, spaces and line breaks have no effect on the processing. To ensure the lowest possible transmission data and the avoidance of possible error sources, the response is delivered without any formatting. The response is also valid JSON. To better illustrate the JSONs used in the API documentation, they are indented and wrapped if necessary.

## JSON Structure

Each API request is [structured](https://apidoc.onoffice.de/onoffice-api-request/aufbau/) as follows:

**JSON structure and explanation**

```

{
	"token"		: "<Access-Token>",
	"request"	: {
		"actions" : &#x5B;
			{
				"actionid"		: "<Action identifier>",
				"resourceid"	: "<Resource identifier>",
				"resourcetype"	: "<Resource type>",
				"identifier"	: "<Identifier>",
				"timestamp"		: "<UNIX timestamp>",
				"hmac"			: "<Hash-based message authentication code>",
				"hmac_version"	: "2",
				"parameters"	: {
					"<Parametername>": "<Parameter value>"
					...
					// additional parameters
				}
			}
			...
			// additional actions
		]
	}
}

```

`token`: The [API token](https://apidoc.onoffice.de/wp-content/uploads/2021/09/Screenshot_Token.png) can be found in the user data of the API user in enterprise.

`actionid`: The `actionid` specifies the type of the API call. The [actionid ](https://apidoc.onoffice.de/onoffice-api-request/request-elemente/action/) together with the `resourcetype` uniquely identify the API call. All API calls are listed [here](https://apidoc.onoffice.de/actions/) sorted by `actionid`.

The following actionids exist:

Read record: `urn:onoffice-de-ns:smart:2.5:smartml:action:read`

Create record: `urn:onoffice-de-ns:smart:2.5:smartml:action:create`

Edit record: `urn:onoffice-de-ns:smart:2.5:smartml:action:modify`

Delete record: `urn:onoffice-de-ns:smart:2.5:smartml:action:delete`

Request information: `urn:onoffice-de-ns:smart:2.5:smartml:action:get`

Perform actions: `urn:onoffice-de-ns:smart:2.5:smartml:action:do`

`resourceid`: Mostly the data record number of the data record, if you want to query exactly one data record. Otherwise empty.

`resourcetype`: Specifies the module or the action of the API call, e.g. `address` or `estate`. Is listed on each page with a API call.

`identifier`: Any label to be assigned to the request for identification and post-processing. Can be empty.

`timestamp`: UNIX timestamp.

`hmac`: Hash-based message authentication code. Is calculated automatically when the SDK is used. Without the SDK, the [HMAC](https://apidoc.onoffice.de/onoffice-api-request/request-elemente/action/#hmac) must be calculated correctly. The secret is required when calculating the [hmac](https://github.com/onOfficeGmbH/api-client-cli) parameter for authentication.

`hmac_version`: Version of the HMAC calculation. It is best to use the new version &#8220;2&#8221; for easier calculation.

`parameters`: [Parameters](https://apidoc.onoffice.de/onoffice-api-request/request-elemente/action/#parameters) of the API call. Are listed on the page of each API call.

## Request URLs

The request URL for the stable API version, which is updated monthly, is [https://api.onoffice.de/api/stable/api.php](https://api.onoffice.de/api/stable/api.php). The request URL for the latest API version is [https://api.onoffice.de/api/latest/api.php](https://api.onoffice.de/api/latest/api.php).

Note that the request URLs for the stable and latest API always remains the same for all requests. The individual endpoints are addressed via the `actionid` and the `resourcetype` in the JSON.

If you are using a live customer (https://smart.onoffice.de/), it will automatically redirect to the stable API version, no matter what API version you set. If you are using a beta customer (https://beta.smart.onoffice.de/), it will automatically redirect to the latest API version, no matter what API version you set.

## JSON request example and API test tools

Now you are ready to make your first test API call. You can try out the first steps with our API test tools. We have two separate PHP tools that can be used to easily test our API and take the first steps. These can be downloaded from Github as a [command line tool](https://github.com/onOfficeGmbH/api-client-cli) or with a [graphical interface](https://github.com/onOfficeGmbH/api-client-gui).

We also have an [API client](https://github.com/onOfficeGmbH/onoffice-api-client) for testing purposes that was programmed in Vue.js. **The tool is also available [here](https://tools.onofficeweb.com/api-client/) online.**

The following JSON request queries the fields &#8220;Id, purchase price and location&#8221; of all active properties of your customer with a purchase price 
**[Read estate](https://apidoc.onoffice.de/actions/datensatz-lesen/objekte/)**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "estate",
    "parameters": {
        "data": &#x5B;
            "Id",
            "kaufpreis",
            "lage"
        ],
        "filter": {
            "status": &#x5B;
                {
                    "op": "=",
                    "val": 1
                }
            ],
            "kaufpreis": &#x5B;
                {
                    "op": "<",
                    "val": 300000
                }
            ]
        },
        "listlimit": 10,
        "sortby": {
            "kaufpreis": "ASC",
            "warmmiete": "ASC"
        }
    }
}

```

## Using the API with the SDK (Software Development Kit)

To use the onOffice API, you can use the onOffice SDK (Software Development Kit) written in PHP. It contains code to generate API requests. For serious and permanent use, we recommend using our SDK in PHP or using your own implementention in other languages.

The onOffice SDK is available on [GitHub](https://github.com/onOfficeGmbH/sdk) and can be downloaded there.

Please read and follow the license conditions and the readme file. The SDK is under the MIT license and is a generous open source license. It allows reuse of the SDK for both open-source and closed-source software.

As a template for your API requests the [PHP files](https://github.com/onOfficeGmbH/sdk/tree/master/examples) [`02-call.php`](https://github.com/onOfficeGmbH/sdk/blob/master/examples/02-call.php) and [`01-call-generic.php`](https://github.com/onOfficeGmbH/sdk/blob/master/examples/01-call-generic.php) is contained in the SDK, which you can customize for your own queries.

If you use the SDK, you can use the method `getErrors()` from the class [`onOfficeSDK.php`](https://github.com/onOfficeGmbH/sdk/blob/master/src/onOfficeSDK.php) to get the error messages.

As authentication of the client, OAuth is used. If the client is still unknown, the authentication is done using the normal enterprise login data (user credentials). In the following, the authentication is only done by OAuth access tokens, which are added to each request. TLS 1.2 is used to connect to the API server.

In the SDK, you specify an API request in PHP array notation, as shown in the example for reading estate data below.

**PHP request example: read estate**

```

<php

include 'Psr4AutoloaderClass.php';
use onOffice\SDK\Psr4AutoloaderClass;
use onOffice\SDK\onOfficeSDK;

$pAutoloader = new Psr4AutoloaderClass();

// register path to our files (namespace onOffice)
$pAutoloader->addNamespace('onOffice', __DIR__);
$pAutoloader->register();

$pSDK = new onOfficeSDK();

// Which API version is used, can be set by setApiVersion
// with the values 'latest', which is the latest
// API version in beta stadium or 'stable', the stable
// version, which is updated monthly.

$pSDK->setApiVersion('latest');

$parametersReadEstate = &#x5B;
	'data' => &#x5B;
		'Id',
		'kaufpreis',
		'lage',
	],
	'listlimit' => 10,
	'sortby' => &#x5B;
		'kaufpreis' => 'ASC',
		'warmmiete' => 'ASC',
	],
	'filter' => &#x5B;
		'kaufpreis' => &#x5B;
			&#x5B;'op' => '<', 'val' => 300000],
		],
		'status' => &#x5B;
			&#x5B;'op' => '=', 'val' => 1],
		],
	],
];

$handleReadEstate = $pSDK->callGeneric
(onOfficeSDK::ACTION_ID_READ, 'estate', $parametersReadEstate);

// Sometimes however, you will have to set the
// `resourceId` parameter. In this case, you have to
// use the call()-method instead the callGeneric()-method.
// ResourceId is the 2nd parameter for the call()-method
// and has the value 'estate' here.
// $handleSearchEstate = $pSDK->call
//		(onOfficeSDK::ACTION_ID_GET, 'estate',
//		'', 'search', $parametersSearchEstate);

$pSDK->sendRequests('put the token here', 'and secret here');

var_export($pSDK->getResponseArray($handleReadEstate));

```

Example.php
-->

This code is converted to regular JSON and executed. The general structure of the JSON request can be found [here](https://apidoc.onoffice.de/onoffice-api-request/aufbau/).

That means if you use our SDK, the JSON API requests must be rewritten to PHP.

**JSON request example: read estate**

```

{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "estate",
    "parameters": {
        "data": &#x5B;
            "Id",
            "kaufpreis",
            "lage"
        ],
        "filter": {
            "status": &#x5B;
                {
                    "op": "=",
                    "val": 1
                }
            ],
            "kaufpreis": &#x5B;
                {
                    "op": "<",
                    "val": 300000
                }
            ]
        },
        "listlimit": 10,
        "sortby": {
            "kaufpreis": "ASC",
            "warmmiete": "ASC"
        }
    }
}

```

JSON notation
-->

## Without SDK / HMAC generation

If you do not use the onOffice SDK for your API requests, you must additionally specify a timestamp and an HMAC code for each request. This information are described in more detail in [ in the action elements overview](https://apidoc.onoffice.de/onoffice-api-request/request-elemente/action/). When using the onOffice SDK, this information is being generated automatically and does not have to be specified.

Without the SDK, the API can be accessed e.g. via cURL, as shown in the following PHP example below.

**cURl request: read estate**

```

<?php

// bitte token und secret ausfüllen
$token = '';
$secret = '';

$apiServer = 'https://api.onoffice.de/api/';
$apiVersion = 'stable';
$apiUri = $apiServer.$apiVersion.'/api.php';

$resourceType = 'estate';
$actionId = 'urn:onoffice-de-ns:smart:2.5:smartml:action:read';
$timestamp = time();
$hmac2 = base64_encode(
    hash_hmac(
        'sha256',
        implode(
            '',
            &#x5B;
                'timestamp' => $timestamp,
                'token' => $token,
                'resourcetype' => $resourceType,
                'actionid' => $actionId,
            ]
        ),
        $secret,
        true
    )
);

$actionParameterData =
    &#x5B;
        "timestamp" => $timestamp,
        "hmac_version" => 2,
        "hmac" => $hmac2,
        "actionid" => $actionId,
        "resourceid" => "",
        "identifier" => "",
        "resourcetype" => $resourceType,
        "parameters" =>
            &#x5B;
                "data" => &#x5B;"Id", "objektnr_extern"], // hier können weitere Felder ausgegeben werden
                "listlimit" => 50, // hier die maximale Anzahl an Immobilien eintragen, die ausgegeben werden sollen
            ],
    ];

$request = &#x5B;
    'token' => $token,
    'request' => &#x5B;'actions' => &#x5B;$actionParameterData]],
];

$curlVersionInfo = curl_version();
$curlVersionNumber = $curlVersionInfo&#x5B;'version_number'];

$curlResource = curl_init($apiUri);
curl_setopt($curlResource, CURLOPT_POST, true);

if (version_compare(PHP_VERSION, '5.5.0', '>=') &&
    $curlVersionNumber >= 0x072106) {
    // empty string = all supported compressions
    curl_setopt($curlResource, CURLOPT_ACCEPT_ENCODING, '');
} elseif (version_compare(PHP_VERSION, '5.5.0', '>=') &&
    $curlVersionNumber >= 0x071506) // 7.15.06
{
    curl_setopt($curlResource, CURLOPT_ENCODING, '');
}

curl_setopt($curlResource, CURLOPT_POSTFIELDS, json_encode($request));
curl_setopt($curlResource, CURLOPT_RETURNTRANSFER, true);

echo curl_exec($curlResource);

```

## General hints

**Please be sure not to share your generated secret** used for the requests of the API user. If this happens accidentally be sure to generate a new secret immediately and adapt your code accordingly. See the section [Generate access token](https://apidoc.onoffice.de/access-token-generieren/) about how to generate a new secret.

If you get a successful response of type 200 but cannot read out any records, then probably the read rights for the API user are not sufficient or there are no matching records for your request in your onOffice version.

The user rights can be set in onOffice enterprise under “Extras >> Settings >> User >> Tab API user >> Select API user >> Tab rights”.

Rights set to “only own” are usually not enough for the API user.

Another tip: In this example request, remove all parameters except for &#8220;data&#8221;, then you will receive all real estate records from onOffice.

## API support

If you have any questions or problems with the API, please contact our [support team. ](https://apidoc.onoffice.de/help-technical-support/)Feel free to contact us at [apisupport@onoffice.de](mailto:apisupport@onoffice.de) or use our [support form](https://apidoc.onoffice.de/support-form/). Also check the [FAQ ](https://apidoc.onoffice.de/allgemeine-hinweise/) to see if your problem is covered there.