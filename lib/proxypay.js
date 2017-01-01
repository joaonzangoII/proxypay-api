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

/*
* Method name: Generate.
* Description: It generates a new reference.
* params: data - An object containing all information needed to generate a new reference.
*/
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

/*
* Method name: GetAll.
* Description: This method returns all references.
* params: N / A
*/
ProxyPay.prototype.GetAll = function(){
	
	var that = this;

	return new Promise(function(reject, resolve){
		request({
			uri:  that.config.host + "/references",
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"authorization": "Basic " + that.config.apikey
			},
			json: true
		}, function(err, response, body){

			if(err){
				reject(err);
			}

			resolve(body);
			
		});
	});


}

/*
* Method name: GetAll.
* Description: This method returns and object with the specified reference.
* params: id - A string
*/
ProxyPay.prototype.GetOne = function(id){
	
	var that = this;

	return new Promise(function(reject, resolve){
		request({
			uri:  that.config.host + "/references/" + id,
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"authorization": "Basic " + that.config.apikey
			},
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