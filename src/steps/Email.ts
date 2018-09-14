/// <reference path="../steps.d.ts" />

var I = actor();
import {BrowserHelper} from "../helpers/BrowserHelper.js";
import loginPage = require('../pages/LoginPage.js');
import dashboardPage = require('../pages/DashboardPage.js');
import topNavBarPage = require('../pages/TopNavBarPage.js');
import companyProfilePage = require('../pages/CompanyProfilePage.js');
import websiteParametersPage = require('../pages/WebsiteParametersPage.js');
import manageUsersPage = require('../pages/ManageUsersPage.js');
import assert = require('assert');
import {Outlook} from "../outlook/Outlook.js";



export = {
	async authenticate(){
		console.log("Nothing");
	
	let outlook = new Outlook();
	//await outlook.getLastEmail()
	let browser = new BrowserHelper();
	
	I.openNewTab();//switchToNextTab();
	I.amOnPage(outlook.generateAuthURL());
	I.fillField("//input[@type='email']","omedym-qa@outlook.com");
	I.click("//input[@type='submit']");
	//I.seeElement("//input[@type='password']");
	I.waitForElement("//input[@type='password']",8);
	I.waitForVisible("//input[@type='password']",8);
	I.waitForVisible("//input[@id='idSIButton9']",8);
	//I.wait(8);
	I.fillField("//input[@type='password']","Omedym123");
	
	I.waitForElement("//input[@type='password']",8);
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
	let authURL = await I.grabCurrentUrl();
	console.log(authURL);
	let codePattern  = /code\=(.*)/;
	let codeMatches =  authURL.match(codePattern);
	outlook.code = codeMatches[1];
	console.log(outlook.code);
		return outlook;
	},
	
	async getTemporaryPassword(outlook : Outlook){
		let emailMsg = await outlook.getLastEmail();		// Email msg is obj not string
		//console.log("Email msg: ");
		//console.log("Email msg8: "+emailMsg);
		//console.log(emailMsg);
		//console.log("Email msg9: ");
		//console.log(emailMsg.value[0].id);
		let tempPasswordPattern = /Temporary\spassword:\s(.+)<br/;	// Temporary password: idJnkr<br>
		var tempPasswordMatches;
		for (var ind=0;ind < emailMsg.value.length;ind++){
		//console.log("Mat1: ");
tempPasswordMatches = emailMsg.value[ind].body.content.match(tempPasswordPattern);
//console.log("Mat "+  emailMsg.value[1].body.content);
//console.log("Mat2 "+  emailMsg.value[0].body.content.value);
			if (tempPasswordMatches){
				break;
			}
		}
		//console.log("Matches: ");
		console.log("Temporary password: " +tempPasswordMatches[1]);
		


		return tempPasswordMatches[1];
	}

}
