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

	let browser = new BrowserHelper();
	
	I.openNewTab();//switchToNextTab();
	I.amOnPage(outlook.generateAuthURL());
	I.fillField("//input[@type='email']","omedym-qa@outlook.com");
	I.click("//input[@type='submit']");
	I.waitForElement("//input[@type='password']",8);
	I.waitForVisible("//input[@type='password']",8);
	I.waitForVisible("//input[@id='idSIButton9']",8);

	I.fillField("//input[@type='password']","Omedym123");
	
	I.waitForElement("//input[@type='password']",8);

	I.pressKey('Enter');

	I.retry(15).dontSeeElement("//input[@type='password']");
	I.retry(15).dontSeeElement("//form");
	
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
	
		let tempPasswordPattern = /Temporary\spassword:\s(.+)<br/;	// Temporary password: idJnkr<br>
		var tempPasswordMatches;
		for (var ind=0;ind < emailMsg.value.length;ind++){
		
tempPasswordMatches = emailMsg.value[ind].body.content.match(tempPasswordPattern);

			if (tempPasswordMatches){
				break;
			}
		}
		
		console.log("Temporary password: " +tempPasswordMatches[1]);
		


		return tempPasswordMatches[1];
	}

}
