---
source: https://apidoc.onoffice.de/onoffice-api-request/request-elemente/action/
title: action
scraped: 2026-01-08T20:24:49.096Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API Structure and General Information](https://apidoc.onoffice.de/structure-and-general-information/) &raquo; [onOffice API Request](https://apidoc.onoffice.de/onoffice-api-request/) &raquo; [Request elements](https://apidoc.onoffice.de/onoffice-api-request/request-elemente/) &raquo; [Action](https://apidoc.onoffice.de/onoffice-api-request/request-elemente/action/) &raquo; Action		

	
	
		
# Action
	

	

		
OBJECT. Describes a single requested action that returns a result from the server. It is an element of the container element `"actions"`.

The specification of the attribute `"actionid"` is mandatory for the correct identification of the action and clear assignment of the results. The general JSON request structure is shown [here](https://apidoc.onoffice.de/onoffice-api-request/aufbau/).

**actionid**

MANDATORY. Identification of the action.

**resourceid**

MANDATORY. CAN BE EMPTY. ID of the record. If empty, a list of records is outputted, if defined for the action.

**resourcetype**

MANDATORY. CAN BE EMPTY. Type of record. Corresponds to a module in enterprise.

**identifier**

CAN BE EMPTY. Identifier for uniquely identifying the action. Useful if multiple actions are sent in a request.

**parameters**

MANDATORY. CAN BE EMPTY. Additional parameters of the action. Can contain any number of key-value pairs. The key-value pairs must be sorted alphabetically by key. The sort is non-recursively, e.g. only the first level of the array must be sorted. Possible parameters can be taken from the actions.

**timestamp**

[Unix time](https://en.wikipedia.org/wiki/Unix_time). The current timestamp may be queried e.g. via the PHP function `time()`.

**hmac**

**New HMAC method (hmac_sha256)**:

A hashed-based Message Authentication Code (HMAC) is used to obtain certainty about the origin of data or messages and to verify their integrity. The HMAC must be specified with each action of a request.

To simplify building the HMAC for the API, especially for programming and scripting languages other than PHP, an alternative and future preferred HMAC variant has been implemented.

To keep the API backward compatible, a new parameter `hmac_version` has been introduced. If this is set to value 2, the HMAC is cross-checked against the new method.

The new HMAC is calculated by concatenating the values of the parameters `timestamp`, `token`, `resourcetype` and `actionid` in this order. A SHA256 hash is formed from this string (with the secret as the key) and the resulting binary string must then be base64 encoded.

Sample code from the onOffice SDK:

```

private function createHmac2($token, $secret, $timestamp, $type, $actionId)
	{
		$fields = &#x5B;
			'timestamp' => $timestamp,
			'token' => $token,
			'resourcetype' => $type,
			'actionid' => $actionId,
		];

		return base64_encode(hash_hmac('sha256', implode('',$fields), $secret, true));
	}

```

**Old hmac method**:

The HMAC contains the hash of all parameters of the request.

All values of the *parameters* array are sorted by key and encoded to JSON (in the example: `$parametersBundled`). The sorting is based on the order in which they appear in the ASCII table. Then the values of all request elements, which are sorted by alphabet, are listed comma separated without spaces (`$fieldsBundled`). These are then placed behind the JSON encoded parameters with a comma (`$allParams`). The sort is non-recursively, e.g. only the first level of the array must be sorted (ksort).

In other programming languages the sorting function may work differently. Possible parameters can be taken from the actions.

The HMAC is then formed as follows: `MD5(secret(MD5(parameter)))`.

Please make sure to work with lowercase hexadecimal representations of the `[MD5](https://en.wikipedia.org/wiki/MD5)` value.

Sample code from the onOffice SDK:

```

function createHmac($id, $token, $secret, $timestamp, $identifier, $type,
$parameters, $actionId) {
	// in alphabetical order
	$fields&#x5B;'accesstoken'] = $token;
	$fields&#x5B;'actionid'] = $actionId;
	$fields&#x5B;'identifier'] = $identifier;
	$fields&#x5B;'resourceid'] = $id;
	$fields&#x5B;'secret'] = $secret;
	$fields&#x5B;'timestamp'] = $timestamp;
	$fields&#x5B;'type'] = $type;

	ksort($parameters);

	$parametersBundled = json_encode($parameters);
	$fieldsBundled = implode(',', $fields);
	$allParams = $parametersBundled.','.$fieldsBundled;
	$hmac = md5($secret.md5($allParams));
	return $hmac;
}

```

If you get a “HMAC invalid” error: Floating point values should be encapsulated in a string, e.g. &#8220;breitengrad&#8221;:&#8221;52.65434&#8243; to avoid rare rounding errors. The API regarding the HMAC calculation expects that in JSON strings the character ‘/’ is always encoded as escape sequence ‘\/’

**hmac_version**

OPTIONAL. To use the new hmac implementation, `hmac_version` with the value &#8220;2&#8221; must be included in the request.