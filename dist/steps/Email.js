"use strict";
/// <reference path="../steps.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var I = actor();
const BrowserHelper_js_1 = require("../helpers/BrowserHelper.js");
const Outlook_js_1 = require("../outlook/Outlook.js");
module.exports = {
    authenticate() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Nothing");
            let outlook = new Outlook_js_1.Outlook();
            //await outlook.getLastEmail()
            let browser = new BrowserHelper_js_1.BrowserHelper();
            I.openNewTab(); //switchToNextTab();
            I.amOnPage(outlook.generateAuthURL());
            I.fillField("//input[@type='email']", "omedym-qa@outlook.com");
            I.click("//input[@type='submit']");
            //I.seeElement("//input[@type='password']");
            I.waitForElement("//input[@type='password']", 8);
            I.waitForVisible("//input[@type='password']", 8);
            I.waitForVisible("//input[@id='idSIButton9']", 8);
            //I.wait(8);
            I.fillField("//input[@type='password']", "Omedym123");
            I.waitForElement("//input[@type='password']", 8);
            //const authPword = await I.grabTextFrom("//input[@type='password']");
            I.pressKey('Enter');
            /*browser.waitFor("//input[@type='password']").then(function(){
                        return browser.submitElementForm("//form");
                    }).catch(function(error){
                        assert(false);
                    });*/
            //I.click("//input[@type='submit']");
            I.retry(15).dontSeeElement("//input[@type='password']");
            I.retry(15).dontSeeElement("//form");
            //I.retry(15).seeInCurrentUrl("localhost:3000");//"https://login");
            //I.waitInUrl("localhost:3000");
            let authURL = yield I.grabCurrentUrl();
            console.log(authURL);
            let codePattern = /code\=(.*)/;
            let codeMatches = authURL.match(codePattern);
            outlook.code = codeMatches[1];
            console.log(outlook.code);
            return outlook;
        });
    },
    getTemporaryPassword(outlook) {
        return __awaiter(this, void 0, void 0, function* () {
            let email = yield outlook.getLastEmail();
            console.log("Email: " + email);
            let tempPasswordPattern = /Temporary\spassword:\s(.+)3\.\sW/;
            let tempPasswordMatches = email.match(tempPasswordPattern);
            console.log("Matches: ");
            console.log(tempPasswordMatches[1]);
            return tempPasswordMatches[1];
        });
    }
};
