---
source: https://apidoc.onoffice.de/marketplace/refund-transaction/
title: refund-transaction
scraped: 2026-01-08T20:26:45.415Z
---

[Home](https://apidoc.onoffice.de) &raquo; [API calls sorted by module](https://apidoc.onoffice.de/api-calls-sorted-by-module/) &raquo; [Marketplace](https://apidoc.onoffice.de/marketplace/) &raquo; [Do Refund transaction](https://apidoc.onoffice.de/marketplace/refund-transaction/) &raquo; Refund transaction		

	
	
		
# Refund transaction
	

	

		
**Action type: **`Do`

**Resource type: **`transactionRefund`

This call refunds a transaction in the marketplace.

Use this call in your provider customer, not in the client customers. The call is executed with an API user, which the provider must manually create in its respective customer. Here, the API user of the customer is not used, since these are, as with subsequent payments via API, cross-customer actions of the provider.

`Note`: Only transfer transactions can be refunded, i.e. normal payments (Zahlungen) or subsequent payments (Nachzahlungen). SEPA transactions in process with status &#8220;inprocess&#8221; (in Bearbeitung) cannot be cancelled before the transaction is successfully completed. Refunds for SEPA transactions are only possible after 7 days.

See [technical marketplace documentation](https://www.marketplacedoc.onoffice.de/api-calls/) for more information.

**Parameter:**

`transactionid`

INTEGER. MANDATORY. Transction ID of the transaction to be refunded.

**Example:**

```

    {
        "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
        "resourceid": "",
        "identifier": "",
        "resourcetype": "transactionRefund",
        "parameters": {
            "transactionid": 1100009909
        }
    }

```

**Response:**

```

...
{
    "status": {
        "code": 200,
        "errorcode": 0,
        "message": "OK"
    },
    "response": {
        "results": &#x5B;
            {
                "actionid": "urn:onoffice-de-ns:smart:2.5:smartml:action:do",
                "resourceid": "",
                "resourcetype": "transactionRefund",
                "cacheable": false,
                "identifier": "",
                "data": {
                    "meta": {
                        "cntabsolute": null
                    },
                    "records": &#x5B;
                        {
                            "id": 0,
                            "type": "",
                            "elements": {
                                "result": "success"
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
...

```

**Possible errors:**

`210: "Transaction can't be refunded: state not correct."` -> If an attempt is made to cancel a transaction that cannot be cancelled, e.g. a transaction has status inprocess or is a cancellation itself.

`210: "Transaction can't be refunded: Transaktion wurde bereits erfolgreich zurückerstattet. Fehler in MangoPayApiTransfers."` -> If the transaction was already successfully refunded.