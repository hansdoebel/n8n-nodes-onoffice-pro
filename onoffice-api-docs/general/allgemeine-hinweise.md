---
source: https://apidoc.onoffice.de/allgemeine-hinweise/
title: allgemeine-hinweise
scraped: 2026-01-08T20:24:40.797Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API Structure and General Information](https://apidoc.onoffice.de/structure-and-general-information/) &raquo; [General information / FAQ](https://apidoc.onoffice.de/allgemeine-hinweise/) &raquo; General information / FAQ		

	
	
		
# General information / FAQ
	

	

		

Contents

- [1 Access Tokens](#Access_Tokens)
- [2 Errors](#Errors)
- [3 Retrieving field names](#Retrieving_field_names)
- [4 Singleselect and multiselect fields](#Singleselect_and_multiselect_fields)
- [5 Cache](#Cache)
- [6 Rights for the API user](#Rights_for_the_API_user)
- [7 Redirection of the API version](#Redirection_of_the_API_version)
- [8 Data types](#Data_types)
- [9 HMAC validation](#HMAC_validation)
- [10 onOffice without SDK / PHP](#onOffice_without_SDK_PHP)
- [11 API test tools](#API_test_tools)
- [12 Status in address and estate](#Status_in_address_and_estate)
- [13 User rights for the API user:](#User_rights_for_the_API_user)
- [14 Maximum number of data records](#Maximum_number_of_data_records)
- [15 Request types](#Request_types)
- [16 Query relations](#Query_relations)

### Access Tokens

To use the onOffice API, it is necessary to authenticate with an access token.

An access token is an alphanumeric string that is appended to API requests to authenticate the application to the system and to allow the transaction.

The token can be generated in the user settings of the API user (Extras-> Settings-> User). After a client ID has been generated for the user, a secret and the API token are generated for the user.

Please note the secret immediately, as it will not be displayed later. **Please be sure not to share your generated secret** used for the requests of the API user. If this happens accidentally be sure to generate a new secret immediately and adapt your code accordingly. See the section [Generate access token](https://apidoc.onoffice.de/access-token-generieren/) about how to generate a new secret.

The token has a length of 32 characters, the secret 64 characters.

Check the lenght if you get a &#8220;not authenticated&#8221; error. This way you can rule out that you made a mistake while copying or that you swapped token and secret.

### Errors

If you use the SDK, you can use the method `getErrors()` from the class `onOfficeSDK.php` to get the error messages.

### Retrieving field names

Many API calls have a `data` parameter where you can specify the field names to set or to retrieve. Almost all fields specified in the enterprise administration (Extras >> settings >> administration >> tab input fields) are valid and can be passed as elements of an array in the parameter `data`. The field names for the API are found in the column &#8220;field&#8221;. A list of field names for the modules address and estate can be downloaded there too.

Via API, the field names can be read out via the API call [Field configuration](https://apidoc.onoffice.de/index.php/actions/informationen-abfragen/feldkonfiguration/).

A list of action types and action types can be obtained with the API call [Kind of action and Type of action](https://apidoc.onoffice.de/index.php/actions/informationen-abfragen/aktionsart-und-typ/).

Pay attention to the upper and lower case of the field names.

If you want to query all data records of a certain period, use the field `Aenderung` for addresses and the field `geaendert_am` for estates in the parameter `filter`.

### Singleselect and multiselect fields

In singleselect fields, you can select one value of several from the drop-down menu, e.g. the field &#8220;type of usage&#8221; can take the value residential, business, investment or live on time.

Multiple values can be selected for multiselect fields. Therefore multiselect arrays are to be set in array notation, e.g. ` "parameters":{"HerkunftKontakt":["Suchmaschine","Newsletter"]}`

The values of the single and multi-select fields are listed in onOffice enterprise under Extras-> Settings-> Administration on the &#8220;Singleselect&#8221; and &#8220;Multiselect&#8221; tabs. For many fields, self-created values can also be entered there.

You can set &#8220;no specification&#8221; or an empty value for a singleselect or multiselect field as follows:

Singleselect: `"ind_1842_Feld_adressen13": ""`,

Multiselect: `"HerkunftKontakt": []`

**Note:** The values of some multiselect fields are output separately in the read call with pipes. E.g. &#8220;|indMulti5961Select5961||indMulti5979Select5979|&#8221;. For Create and Modify calls, the values must be specified individually and without pipes.

For more information on single and multi-select fields, see our online Help Center [ here.](https://de.enterprisehilfe.onoffice.com/help_entries/administration/singleselect/)

### Cache

The response parameter &#8220;cacheable&#8221; in every API call indicates if the API-Call is cachable. All API calls from the type &#8220;read&#8221; or &#8220;get&#8221; are cacheable. The SDK caches all &#8220;Read&#8221; and &#8220;Get&#8221; type responses when a cache object is passed from the outside.

You can use the interface [onOfficeSDKCache ](https://github.com/onOfficeGmbH/sdk/blob/master/src/Cache/onOfficeSDKCache.php)from the SDK to implement your own cache. One example implementation of a database cache can be found in the [onOffice WordPress-Plugin](https://github.com/onOfficeGmbH/oo-wp-plugin/blob/master/plugin/Cache/DBCache.php).

### Rights for the API user

Often, if no data can be read, the user rights for the API user are not set properly or missing. The user rights can be set in onOffice enterprise under &#8220;Extras->Settings->User->Tab API user->Select API user->Tab rights&#8221;.

Rights set to &#8220;only own&#8221; are usually not enough for the API user. See also [here.](https://apidoc.onoffice.de/index.php/api-benutzer-anlegen/)

If the right &#8220;Can only see addresses/properties published on the website&#8221; is set, properties and/or addresses must be published under &#8220;Properties >> Marketing >> Own website: Publish&#8221; for the API user to read them. However, if the right is not set, the release of properties and addresses is controlled by the normal user rights (read/write/delete).

API users are also selectable in the data-record authorization popup, i.e. the rights for API users can also be set for each individual data record in the actions bar under &#8220;further actions >> data-record authorization&#8221;.

### Redirection of the API version

If you are using a live client, it will automatically redirect to the stable API version, no matter what API version you set.

If you are using a beta client, it will automatically redirect to the latest API version, no matter what API version you set.

### Data types

JSON knows the following data types:

&#8211; Zero value is represented by the keyword `null`.

&#8211; Boolean value is represented by the keywords `true` and `false`. These are not strings. Like `null`, they are therefore not enclosed in quotation marks.

&#8211; A number is a sequence of the digits `0-9`, which can be preceded by a negative sign `-` and interrupted by a decimal point `.` The number can be completed by specifying an exponent e or E followed by a + or &#8211; sign and a sequence of digits 0-9.

&#8211; A character string begins and ends with double even quotation marks (&#8220;). It can contain Unicode characters and escape sequences.

&#8211; An array starts with `[` and ends with `]`. It contains a comma-separated, ordered list of values of the same or different types. Empty arrays are allowed.

&#8211; An object starts with `{` and ends with `}`. It contains a comma-separated, unordered list of properties. Objects without properties (&#8220;empty objects&#8221;) are allowed.

A property consists of a key and a value, separated by a colon (`key:value`). The keys should be unique, because different parsers handle multiple keys differently. While ECMA-404 does not require uniqueness, RFC 7159 requires that keys should be unique within an object.

The key is a character string.

The value is one of the data types.

### HMAC validation

Requests to our API previously had to include the &#8220;hmac&#8221; parameter, which contained an MD5 hash over all other parameters included in the request.

As of now, POST requests can also be made using a revised HMAC implementation.

To use the new implementation, an additional parameter &#8220;hmac_version&#8221; with the value &#8220;2&#8221; must be included in the request. The new HMAC is calculated by concatenating the values of the parameters &#8220;timestamp&#8221;, &#8220;token&#8221;, &#8220;resourcetype&#8221; and &#8220;actionid&#8221; in that order. From this string a SHA256 hash is formed (with the secret as key) and the resulting binary string must then be Base64 encoded.

This should simplify the integration of our API in external systems.

Examples of the new implementation without using external libraries can be seen by clicking the buttons PHP example or JS example. See also [here](https://apidoc.onoffice.de/onoffice-api-request/request-elemente/action/) for the request structure und more information on HMAC.

**PHP example**

```

<?php

$secret = &#039;dhY8h7FeU9&#039;;

$fields = &#x5B;
	&#039;timestamp&#039; => 123456789,
	&#039;token&#039; => &#039;dX5hkIIU6W&#039;,
	&#039;resourcetype&#039; => &#039;estateCategories&#039;,
	&#039;actionid&#039; => &#039;urn:onoffice-de-ns:smart:2.5:smartml:action:get&#039;,
];

$hmac = base64_encode(hash_hmac(&#039;sha256&#039;, implode(&#039;&#039;,$fields), $secret, true));

```

**JS example**

```

async function signMessage(key, message) {
	const encoder = new TextEncoder();
	return window.crypto.subtle.sign(
		&#039;HMAC&#039;,
		key,
		encoder.encode(message)
	);
}

async function importSecretKey(rawKey) {
	const encoder = new TextEncoder();
	return window.crypto.subtle.importKey(
		&#039;raw&#039;,
		encoder.encode(rawKey), {
			name: &#039;HMAC&#039;,
			hash: &#039;SHA-256&#039;
		},
		false,
		&#x5B;&#039;sign&#039;]
	);
}


let testParameters = {
	timestamp: 123456789,
	token: &#039;dX5hkIIU6W&#039;,
	actionId: &#039;urn:onoffice-de-ns:smart:2.5:smartml:action:get&#039;,
	resourcetype: &#039;estateCategories&#039;,
};

let secretKey = &#039;dhY8h7FeU9&#039;;
let queyEncodedString = testParameters.timestamp+
	testParameters.token+
	testParameters.resourcetype+
	testParameters.actionId;

importSecretKey(secretKey)
	.then((cryptoKey) => signMessage(cryptoKey, queyEncodedString))
	.then((signed) => btoa(String.fromCharCode(...new Uint8Array(signed))))
	.then((signature) => console.log(signature));

```

**Time stamp**

Time stamp in [Unix time](https://en.wikipedia.org/wiki/Unix_time). Number of seconds that have elapsed since 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970. The current timestamp may be queried e.g. via the PHP function `time()`.

The validity of the time stamp is +- 120 seconds.

If the error `timestamp invalid` occurs, please check your server time. Deviations of 1 or 2 hours in the time stamp indicate a different server time than ours. It is often due to the time zone or summer/winter time.

**PHP version / curl **

The recommended PHP version is 5.5 or higher.

curl is a library that lets you make HTTP requests in PHP. curl must be installed on your server.

**Request method POST**

POST is a request method supported by HTTP used by the World Wide Web. Our API servers must be addressed via HTTP POST request.

### onOffice without SDK / PHP

If you do not use the onOffice SDK for your API requests, you must additionally specify a timestamp and an HMAC code for each request. This information and how the HMAC is calculated are described in more detail in [ in the action elements Overview ](https://apidoc.onoffice.de/onoffice-api-request/request-elemente/action/). It is recommended to use the new HMAC procedure (hmac_sha256). When using the onOffice SDK, this information is being generated automatically and does not have to be specified.

If you use another programming language, make sure that you generate the HMAC using the same logic as our SDK.

A test file, where the HMAC generation of the SDK is explained, will be provided soon.

### API test tools

We have two separate PHP tools that can be used to easily test our API and take the first steps.

These can be downloaded from Github as a [command line tool](https://github.com/onOfficeGmbH/api-client-cli) or with a [graphical interface](https://github.com/onOfficeGmbH/api-client-gui).

We also have an online API client for testing purposes that was programmed in Vue.js. The tool is also available [here](https://tools.onofficeweb.com/api-client/) online.

### Status in address and estate

The &#8220;Status&#8221; field for addresses and properties can have the following values and is accessed via API using assigned integer values:

Address: &#8220;Active / Aktiv&#8221; = 1, &#8220;Archive / Archiviert&#8221; = 0

Real estate: &#8220;Active / Aktiv&#8221; = 1, &#8220;Pending / Inaktiv&#8221; = 2, &#8220;Archive / Archiviert&#8221; = 0

**Record number and customer number in addresses**

Note: Record number (Datensatznummer) and customer number (Kundennummer) are two different fields in addresses. The record number is the ID to be specified for the API.

### User rights for the API user:

The API user can only read out the data and perform the actions to which he is authorized. Think about for what you want to use the API user and assign the rights accordingly. Write and delete rights should be granted only if necessary, and not too generously.

The user rights can be set under Extras >> Settings / Einstellungen >> User / Benutzer >> Choose API user >> Tab Rights / Rechte.

If you work with individual record rights (further actions / weitere Aktionen >> data-record authorisation / Datensatzrechte), please note that the API user is not selectable in the record rights popup.

The rights of the API user are controlled by checking the &#8220;All&#8221; box.

### Maximum number of data records

Most reading API calls have a hard limit of 500 records that can be queried per request.

Most reading API calls have the parameters &#8220;listlimit&#8221; and &#8220;listoffset&#8221;.

For &#8220;listlimit&#8221; the default is 20 if you have not set this parameter. The maximum is 500.

&#8220;listoffset&#8221; specifies the offset, i.e. from which record the query should start.

### Request types

In general, we distinguish between read and write API calls. Read API calls can be of the action &#8220;Read&#8221; or &#8220;Get&#8221;. In the API documentation you will find these calls in the categories &#8220;Read record&#8221; for &#8220;Read&#8221; and &#8220;Request information&#8221; for &#8220;Get&#8221;.

Writing API calls have the actions &#8220;Create&#8221;, &#8220;Modify&#8221;, &#8220;Delete&#8221; and &#8220;Do&#8221;. The calls of the type &#8220;Create&#8221; can be found under &#8220;Create record&#8221;, &#8220;Modify&#8221; under &#8220;Edit record&#8221;, &#8220;Delete&#8221; under &#8220;Delete record&#8221; and &#8220;Do&#8221; under &#8220;Perform actions&#8221;.

The actions have the following values and are specified under `actionid`:

```

onOfficeSDK::ACTION_ID_READ = &#039;urn:onoffice-de-ns:smart:2.5:smartml:action:read&#039;;
onOfficeSDK::ACTION_ID_CREATE = &#039;urn:onoffice-de-ns:smart:2.5:smartml:action:create&#039;;
onOfficeSDK::ACTION_ID_MODIFY = &#039;urn:onoffice-de-ns:smart:2.5:smartml:action:modify&#039;;
onOfficeSDK::ACTION_ID_GET = &#039;urn:onoffice-de-ns:smart:2.5:smartml:action:get&#039;;
onOfficeSDK::ACTION_ID_DO = &#039;urn:onoffice-de-ns:smart:2.5:smartml:action:do&#039;;
onOfficeSDK::ACTION_ID_DELETE = &#039;urn:onoffice-de-ns:smart:2.5:smartml:action:delete&#039;;

```

### Query relations

In addresses, estates and other modules you can set relations like e.g. tenant, buyer, owner, contact person, estate units etc. These relations are not queried and set via estate or address calls, but this information is queried or set via the API calls “Create, Modify, Delete and Get relations”. Many relations exist also in other modules like &#8220;task&#8221;, &#8220;calendar&#8221;, &#8220;project&#8221; or &#8220;agentslog&#8221;.

**Multi-property module / property complexes**:

For more information on the multi-property module, which manages property complexes, see [here](https://apidoc.onoffice.de/multi-object-module-real-estate-investments/).