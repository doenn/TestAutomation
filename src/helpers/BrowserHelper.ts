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
	




}

