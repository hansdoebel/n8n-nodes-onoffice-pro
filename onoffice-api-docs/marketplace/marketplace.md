---
source: https://apidoc.onoffice.de/marketplace/
title: marketplace
scraped: 2026-01-08T20:26:40.232Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Marketplace](https://apidoc.onoffice.de/marketplace/) &raquo; Marketplace		

	
	
		
# Marketplace
	

	

		
Main page for the API calls used for the onOffice marketplace. The onOffice Marketplace offers providers of real estate services the opportunity to offer their products within onOffice enterprise.

- [Unlock marketplace provider](https://apidoc.onoffice.de/marketplace/unlock-marketplace-provider/)

- [Get marketplace invoice recipient](https://apidoc.onoffice.de/marketplace/get-marketplace-invoice-recipient/)

- [Cancel subscription](https://apidoc.onoffice.de/marketplace/cancel-subscription/)

- [Generate subsequent payment link](https://apidoc.onoffice.de/marketplace/generate-subsequent-payment-link/)

- [Refund transaction](https://apidoc.onoffice.de/marketplace/refund-transaction/)

## API user / parameter extendedclaim:

In each customer version your API user is present so that you have read and write access to the onOffice enterprise version of your customers. The API user is automatically created when the customer activates your service.

The user rights (e.g. which properties or addresses he is allowed to read) of the customer who orders in your store must be observed by your API user. This means that your API user cannot query more data and perform more actions than the customer's set rights allow.

Therefore, every time the customer calls your service, a parameter "apiClaim" is passed to you. Afterwards you have to return this "apiclaim" as parameter "extendedclaim" for all API calls. This is to ensure that the transfer of the user ID and the customer version is verified. Please use the "apiClaim" from the latest service call of the customer. The validity of the "apiClaim" will be limited in time in the future. It is therefore not sufficient to always work with the "apiClaim" e.g. from the activation.

The "extendedclaim" during unlock is valid only during unlock and not for the service calls after activation.

Do not use any other calls during the activation except "unlockProvider". After activating the service, you can retrieve the required data via API.

This parameter is a mandatory parameter in the context of the marketplace. Set this parameter if you use API calls in the context of the marketplace. The parameter must be set for all API calls listed on apidoc.onoffice.de.

**Explanation extendedclaim:**

STRING. Mandatory for marketplace providers. Not relevant for all other users. To verify the user and customer which uses the marketplace return the “apiClaim” parameter from the service call as “extendedclaim”. The user and other rights of the calling customer are then observed by the marketplace provider API user.

**Example: Read address data with extendedclaim**

```

...
{
    "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:read",
    "resourceid": "",
    "identifier": "",
    "resourcetype": "address",
    "parameters": {
        "data": &#x5B;
            "Briefanrede",
            "Vorname",
            "Name",
            "Land",
            "Ort",
            "Plz",
            "Strasse"
        ],
        "filter": {
            "Vorname": &#x5B;
                {
                    "op": "=",
                    "val": "Max"
                }
            ]
        },
        "sortby": "Strasse",
        "sortorder": "DESC",
        "extendedclaim": "wvuYzNlafLh1KvHspI5D8dY4XO\/Qvi66QfHwIq2pJtHeYaIpLmWzQ+OdP180ZQdoF91QFlbp\/uXWfw+sgWmkV1WXyqy7a566Z6rsdFGYrbgDASf7eI0rTCFsP2+xEXqrzMf2WJ8t8dL+c0ss2eowWVrFOUUzaqQoh9k662oXOCYRwwvnXEy+7A8HzrI5CGcAy"
    }
}
...

```

For detailed information on how to connect your store to the Marketplace, please refer to the technical [marketplace documentation](https://www.marketplacedoc.onoffice.de/).

If errors occur during an order process in the store, error code and error texts are returned to the provider. This list can be found [here](https://www.marketplacedoc.onoffice.de/zahlungsabwicklung/#fehlertexte).