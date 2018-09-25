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
            let browser = new BrowserHelper_js_1.BrowserHelper();
            I.openNewTab(); //switchToNextTab();
            I.amOnPage(outlook.generateAuthURL());
            I.fillField("//input[@type='email']", "omedym-qa@outlook.com");
            I.click("//input[@type='submit']");
            I.waitForElement("//input[@type='password']", 8);
            I.waitForVisible("//input[@type='password']", 8);
            I.waitForVisible("//input[@id='idSIButton9']", 8);
            I.fillField("//input[@type='password']", "Omedym123");
            I.waitForElement("//input[@type='password']", 8);
            I.pressKey('Enter');
            I.retry(15).dontSeeElement("//input[@type='password']");
            I.retry(15).dontSeeElement("//form");
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
            let emailMsg = yield outlook.getLastEmail(); // Email msg is obj not string
            let tempPasswordPattern = /Temporary\spassword:\s(.+)<br/; // Temporary password: idJnkr<br>
            var tempPasswordMatches;
            for (var ind = 0; ind < emailMsg.value.length; ind++) {
                tempPasswordMatches = emailMsg.value[ind].body.content.match(tempPasswordPattern);
                if (tempPasswordMatches) {
                    break;
                }
            }
            console.log("Temporary password: " + tempPasswordMatches[1]);
            return tempPasswordMatches[1];
        });
    }
};
