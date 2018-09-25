"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../steps.d.ts" />
require('dotenv').config();
let authHelper = require('./auth.js');
let MicrosoftGraph = require('@microsoft/microsoft-graph-client');
//var ClientOAuth2 = require('client-oauth2')
var request = require('request');
var url = require('url');
const BrowserHelper_js_1 = require("../helpers/BrowserHelper.js");
class Outlook {
    constructor() {
    }
    authorize() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("L: " + authHelper.getAuthUrl());
            var tokenRequest = request({ url: authHelper.getAuthUrl(), method: "get", followAllRedirects: true }, function (e, response) {
                console.log("L3: " + tokenRequest.uri.href);
                console.log("L4: " + response.request.href);
                console.log("L: " + response.request.uri.query);
                console.log("L: " + response.request.uri.query.code);
                var redirectRequest = request({ url: response.request.uri.href, method: "POST" }, function (error, response, html) {
                    console.log("L2: " + redirectRequest.uri.href);
                    console.log("L22: " + response.request.href);
                });
                console.log("L2o: " + redirectRequest.uri.href);
            });
        });
    }
    generateAuthURL() {
        this.authURL = authHelper.getAuthUrl();
        return this.authURL;
    }
    getOutlookAuthCode() {
        let browser = new BrowserHelper_js_1.BrowserHelper();
        return browser.getAuthCode(this.authURL)
            .catch(function (error) {
            console.log(error);
            return "Authentication Error";
        });
    }
    getLastEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            this.accessToken = yield authHelper.getTokenFromCode(this.code); //Mc45f9fba-3cae-70ec-1546-3994e75bbbfa");
            this.client = MicrosoftGraph.Client.init({
                authProvider: (done, err) => {
                    if (done) {
                        done(null, this.accessToken); //first parameter takes an error if you can't get an access token		    
                    }
                    else {
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
                console.log("Error " + err);
            });
            let email = yield this.client
                .api('/me/mailfolders/inbox/messages')
                .top(10)
                .select('subject,from,receivedDateTime,bodyPreview,body')
                .orderby('receivedDateTime DESC')
                .get();
            //console.log("Email1: " + email);
            return email;
        });
    }
}
exports.Outlook = Outlook;
