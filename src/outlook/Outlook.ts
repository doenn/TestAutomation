/// <reference path="../steps.d.ts" />
require('dotenv').config();

import * as requestAgent from 'superagent';
let authHelper = require('./auth.js');
let MicrosoftGraph = require('@microsoft/microsoft-graph-client');
//var ClientOAuth2 = require('client-oauth2')
var request = require('request');
var url = require('url');

import {BrowserHelper} from "../helpers/BrowserHelper.js";


export class Outlook {
	client : any;
	accessToken : any;
	authURL : string;
	code : string;
	constructor(){
		



	}
	async authorize(){

/*
	var clientAuth = new ClientOAuth2({
  clientId: '7ef5629d-9bac-4715-be3b-afbbb3a527b8',
  clientSecret: 'fxhULY724[{pczkKRSI03|$',
  accessTokenUri: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  authorizationUri: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
  redirectUri: 'http://localhost:3000/authorize',
  scopes: ['openid', 'profile', 'User.Read', 'Mail.Read']
})
var token = clientAuth.createToken('access token', 'optional refresh token', 'optional token type', { data: 'raw user data' })
console.log("TOKEN: " +clientAuth.credentials.getToken());
console.log("ACCESS TOKEN: " +token.accessToken);
token.expiresIn(1234) // Seconds.
token.expiresIn(new Date('2019-11-08'));
console.log("ACCESS Code: " +token.code);
token.refresh().then(function(user){
console.log("TOKEN4: " +user.accessToken);
}).catch(function(error){
				console.log("Error");
			});	

 console.log("ACCESS TOKEN: " +token.accessToken);
// Sign a standard HTTP request object, updating the URL with the access token
// or adding authorization headers, depending on token type.
var obj = token.sign({
  method: 'get',
  url: 'https://login.microsoftonline.com'
}) 

console.log("Obj: " + obj.headers.Authorization);


console.log("TOKEN: " +clientAuth.credentials.getToken());
	console.log("ACCESS TOKEN: " +token.accessToken);

clientAuth.token.getToken("http://localhost:4444")
    .then(function (user) {
		console.log("TOKEN: " +user.accessToken);
	}).catch(function(error){
				console.log("Error");
			});	
*/

console.log("L: " + authHelper.getAuthUrl());
		var tokenRequest = request({url: authHelper.getAuthUrl(), method: "get", followAllRedirects: true}, function(e, response){
			console.log("L3: " + tokenRequest.uri.href);
			console.log("L4: " + response.request.href);

console.log("L: " + response.request.uri.query);
//var parts = url.parse(response.request.uri.query, true);
 // var query = parts.query;
console.log("L: " + response.request.uri.query.code);

			var redirectRequest = request({url: response.request.uri.href, method: "POST"}, function(error, response, html) {
            //console.log(html);
console.log("L2: " + redirectRequest.uri.href);
			console.log("L22: " + response.request.href);
        });
console.log("L2o: " + redirectRequest.uri.href);

	});


	

//requestAgent
//			.get(authHelper.getAuthUrl())
			/*.then((err, res) =>{
console.log("Val:" + res.header.value);
				console.log("Val:" + res.body.value);*/

			//})*/
/*
.redirects(1)
//  .then((err, res) => {
			.end((err, res) => {
			        if (err) {
				console.log("Error1");
			            //console.error(err)
			            //return;
			        }



			console.log("ValR3:" + res.text);
			console.log("ValR:" + res.header.value);
			console.log("ValR2:" + res.header.url);
				//console.log("Val:" + res.body.code);
			 //   }).catch(function(error){
			//	console.log("Error");
			//	console.log(error);
			});

*/


	}	

	generateAuthURL(){

		this.authURL = authHelper.getAuthUrl();
		return this.authURL;
}

	getOutlookAuthCode(){



let browser = new BrowserHelper();

	return browser.getAuthCode(this.authURL)
			.catch(function(error){
				console.log(error);
				return "Authentication Error";
			});

}

	async getLastEmail(){




this.accessToken = await authHelper.getTokenFromCode(this.code);//Mc45f9fba-3cae-70ec-1546-3994e75bbbfa");


this.client = MicrosoftGraph.Client.init({
		
		authProvider: (done, err) => {
			if (done){
			        done(null, this.accessToken); //first parameter takes an error if you can't get an access token		    
			
			}else{
  			    console.log("Error " + err);
			}
		}
	});


this.client
    .api('/me')
    .select("displayName")
    .get()
    .then((res) => {
        console.log("Res1: ");
	console.log(res);
    }).catch((err) => {
      console.log("Error " +err);
    });

let email = await this.client
        .api('/me/mailfolders/inbox/messages')
        .top(10)
        .select('subject,from,receivedDateTime,bodyPreview,body')
        .orderby('receivedDateTime DESC')
        .get();/*(res, err) => {
          if (res) {
		console.log("Res3: ");
		console.log(res);
		return res;
            //callback(null, err);
         } else {
		console.log("Err2: ");
		console.log(err);
            //callback(res.value);
          }
        });
*/
//.catch((err) => {
        //console.log("Error " +err);
    //});

	console.log("Email1: " + email);

return email;
	
/*this.client
    .api('/me')
    .select("displayName")
    .get()
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
*/
		/*this.client
			.api('/me')
			.get((err, res) => {
				console.log(res); // prints info about authenticated user
			});*/
	}


}
