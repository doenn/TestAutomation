/// <reference path="../steps.d.ts" />

'use strict';
let Helper = codecept_helper;


let assert = require('assert');

export class BrowserHelper extends Helper {
	contructor(){
	}
 	async findExisting(elementSelector : string){
		let browser = this.helpers['WebDriverIO'].browser;
		let elementPresent : boolean = await browser.isExisting(elementSelector)
			.catch(function(){
				return false;
			});
		return elementPresent;
	}

	// Wait for sustained visibility
 	// Waits a second time if obstructed from view by a spinner
	waitFor(elementSelector : string, timeout? : number) : Promise<boolean>{
		if (!timeout){
			let timeout = 8000;							// Default timeout 8 seconds
		}
		let browser = this.helpers['WebDriverIO'].browser;
		return browser.waitForVisible(elementSelector,timeout).then(function(){
				return browser.waitForVisible(elementSelector,400,false);
			})
			.then(function(){
				return browser.waitForVisible(elementSelector,timeout);
			}).catch(function(){
				return false;
			});
	}
	// Chainable click
	clickAfter(elementSelector : string) : Promise<boolean>{
		let browser = this.helpers['WebDriverIO'].browser;
		return browser.click(elementSelector);
	}
	
	// Refresh Browser with chaining
	refreshAfter() : Promise<boolean>{
		let browser = this.helpers['WebDriverIO'].browser;
		return browser.refresh()
			.catch(function(error){
				console.log(error);
				return false;
			});
	}
	
	visitPage(url : string) : Promise<boolean>{
		let browser = this.helpers['WebDriverIO'].browser;
		return browser.url(url).catch(function(error){
				console.log(error);
				return false;
			});
	}

	// Gets OAuth2 authentication code by navigating to the generated Outlook link and signing in.
	getAuthCode(generatedLink : string) : Promise<string>{
		let browser = this.helpers['WebDriverIO'].browser;
		return browser.url(generatedLink).then(function(){
				return browser.setValue("input[@type='email']","omedym-qa@outlook.com");
			}).then(function(){
				console.log("A");
				return browser.click("input[@type='submit']");
			}).then(function(){
				console.log("B");
				return browser.getURL();
			}).catch(function(error){
				console.log(error);
				return "Authentication Error";
			});
	}
	



}

