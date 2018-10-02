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



//console.log("L: " + authHelper.getAuthUrl());
		var tokenRequest = request({url: authHelper.getAuthUrl(), method: "get", followAllRedirects: true}, function(e, response){
			console.log("L3: " + tokenRequest.uri.href);
			console.log("L4: " + response.request.href);

//console.log("L: " + response.request.uri.query);

//console.log("L: " + response.request.uri.query.code);

			var redirectRequest = request({url: response.request.uri.href, method: "POST"}, function(error, response, html) {

//console.log("L2: " + redirectRequest.uri.href);
			//console.log("L22: " + response.request.href);
        });
//console.log("L2o: " + redirectRequest.uri.href);

	});



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
        .get();


	//console.log("Email1: " + email);

return email;
	

	}


}
