/*
* ProxyPay API Wrapper
* https://flowck.github.io/proxypay-api
*
* Licensed MIT @ Firmino Changani
*/

// Enable strict mode
"use strict";

// Import dependencies
const request = require("request");
const hasha = require("hasha");

// ProxyPay constructor
function ProxyPay(config){
	this.config = {
		host: "https://api.proxypay.co.ao",
		apikey: new Buffer("api:" + config.apikey).toString("base64")
	}
}

// Example method
ProxyPay.prototype.Generate = function(data){
	
	var that = this;

	return new Promise(function(resolve, reject){
		request({
			uri:  that.config.host + "/references",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"authorization": "Basic " + that.config.apikey
			},
			body: data,
			json: true
		}, function(err, response, body){

			if(err){
				reject(err);
			}

			resolve(body);
			
		});
	});

}

// Export the constructor
module.exports = ProxyPay;