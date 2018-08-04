"use strict";
/// <reference path="../steps.d.ts" />
var I = actor();
const BrowserHelper_js_1 = require("../helpers/BrowserHelper.js");
const Outlook_js_1 = require("../outlook/Outlook.js");
module.exports = {
    authenticate() {
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
        yield outlook.getLastEmail();
    }
};
