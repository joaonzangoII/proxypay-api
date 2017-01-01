# ProxyPay API Wrapper

An API wrapper for ProxyPay written in Nodejs. ProxyPay is a service that allow payments in ATM by generating custom references used by small, medium and big companies in Angola 🇦🇴.

For more information about ProxyPay visit their beautiful site: [https://proxypay.co.ao](https://proxypay.co.ao).

OBS: Existe uma versão da [documentação](./README-PT.md) em Português 🇦🇴.

# Usage

1 - Install it

	sudo npm install proxypay-api --save

2 - Import and configure it
	
	const ProxyPay = require("proxypay-api");

	var P = new ProxyPay({
		apikey: "your_api_key_provided_by_proxypay"
	});

## Methods

### Generate(data)

It Generate a new reference. This method has one parameter, `data`, is an object. Example:

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

Read more about [generating references](https://developer.proxypay.co.ao/#generate-a-new-reference).

### GetAllReferences()

This method return all references generated in your account. Example:

	P.GetAllReferences()
	.then(
		(success)=>{
			console.log(success);
		},
		(error)=>{
			console.log(error);
		}
	);

Read more about [getting all references](https://developer.proxypay.co.ao/#get-all-references).

### GetOneReference(id)

This method return on reference specified by its id. Has one parameter which is the `id`. Example:

	P.GetOneReference("reference_id")
	.then(
		(success)=>{
			console.log(success);
		},
		(error)=>{
			console.log(error);
		}
	);

Read more about [getting one reference](https://developer.proxypay.co.ao/#get-a-specific-reference).

# License

This project is under MIT license. Read more about that [here](LICENSE.md)

Copyright 2017 - [Firmino Changani](http://github.com/flowck)