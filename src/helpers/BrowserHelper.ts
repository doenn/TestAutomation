/// <reference path="../steps.d.ts" />

'use strict';
let Helper = codecept_helper;


let assert = require('assert');

export class BrowserHelper extends Helper {
	contructor(){
	}
 	async findExisting(elementSelector : string){
		let browser = this.helpers['WebDriverIO'].browser;
		let elementPresent : boolean = await browser.isExisting(elementSelector);
		return elementPresent;
	}

}

