# ProxyPay API Wrapper

An API wrapper for ProxyPay written in Nodejs. ProxyPay is a service that allow payments in ATM by generating custom references used by small, medium and big companies in Angola 🇦🇴.

For more information about ProxyPay visit their beautiful site: [https://proxypay.co.ao](https://proxypay.co.ao).

OBS: Existe uma versão da [documentação](./README-PT.md) em Português 🇦🇴.

# Usage

1 - Install it

	sudo npm install proxypay-api --save

2 - Import and configure it

```javascript	
const ProxyPay = require("proxypay-api");

var P = new ProxyPay({
	apikey: "your_api_key_provided_by_proxypay"
});
```

## Methods

### Generate(data)

It Generate a new reference. This method has one parameter, `data`, is an object. Example:

```javascript
var data = {
	reference: {
		amount: "5000.00",
		expiry_date: "2017-01-01",
		custom_fields: {
			invoice: "2017/002",
			name: "Firmino Changani",
			email: "flowck96@gmail.com",
			cellphone: "915044355"
		}
	}
}

// Call the method with and object as a parameter
P.GenerateReference(data)
.then(
	(success)=>{
		console.log(success);
	},
	(error)=>{
		console.log(error);
	}
);
```

Read more about [generating references](https://developer.proxypay.co.ao/#generate-a-new-reference).

### GetAllReferences(options)

This method return all references generated in your account. Has one parameter which is an optional object with theses properties:

| Property | Default | Description                                                                                                                                                   |
|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| limit    | 100     | Max. number of references to return.                                                                                                                          |
| offset   | 0       | Skip offset records. Usefull for pagination.                                                                                                                  |
| status   | -       | Filter parameter. If set to either active, deleted, expired or paidwill return only references with that status value.                                        |
| q        | -       | Filter parameter. will return any reference for which the value of the q parameter matches the beginning of the reference number or any of the custom_fields. |

	
Example:

```javascript

P.GetAllReferences()
.then(
	(success)=>{
		console.log(success);
	},
	(error)=>{
		console.log(error);
	}
);
```

Read more about: [get all references](https://developer.proxypay.co.ao/#get-all-references).

### GetOneReference(id)

This method return on reference specified by its id. Has one parameter which is the `id`. Example:

```javascript
P.GetOneReference("reference_id")
.then(
	(success)=>{
		console.log(success);
	},
	(error)=>{
		console.log(error);
	}
);
```

Read more about: [get one reference](https://developer.proxypay.co.ao/#get-a-specific-reference).

### GetPayments(options)

This method fetch all Payment events that have not been acknowledged. Has one parameter which is an optional object with theses properties:

| Property | Default | Description                                                            |
|----------|---------|------------------------------------------------------------------------|
| n        | 100     | Max. number of payment events to return. This must be between 1 and100 |
| offset   | 0       | Skip offset records. Usefull for pagination.                           |

Example:

```javascript
P.GetPayments()
.then(
	function(success){
		console.log(success);
	},
	function(err){
		console.log(err);
	}
);
```

Read more about: [fetch all payments](https://developer.proxypay.co.ao/#fetch-new-payments).

### AcknowledgePayments(paymentid)

This method acknowledges that a specific payment has been processed. Has one parameter which is the `paymentid` that can be a `string` for a single payment or an `array` for multiple payments. 

```javascript
P.AcknowledgePayments(["449500352608"])
.then(
	function(success){
		console.log(success);
	},
	function(err){
		console.log(err);
	}
);
```

Read more about: Acknowledge a [single Payment](https://developer.proxypay.co.ao/#acknowledge-a-payment) or [multiple Payments](https://developer.proxypay.co.ao/#acknowledge-multiple-payments).


# License

This project is under MIT license. Read more about that [here](LICENSE.md)

Copyright 2017 - [Firmino Changani](http://github.com/flowck)