/// <reference path="../steps.d.ts" />

import {BrowserHelper} from "../helpers/BrowserHelper.js";
import topNavBarPage = require('../pages/TopNavBarPage.js');
var I = actor();

let assert = require('assert');


export = {
	editUserHeading: "//h3[text()[contains(.,'Edit User')]]",
	firstNameField: "//input[@id='first_name']",
	lastNameField: "//input[@id='first_name' and @name='last_name']",
	titleField: "//input[@id='title']",
	phoneField: "//input[@id='phone']",
	emailField: "//input[@id='email']",
	groupDropdown: "//select[@name='role_id']",
	cancelButton: "//a[text()='Cancel']",
	saveButton: "//button[text()='Save']",
	resetPasswordButton: "//button[@name='reset-pw']",
	activateCheckbox: "//input[@id='activate']",
	loaded(){
		I.waitForElement(this.editUserHeading,20);
	},
	submitNewAdmin(){
		I.fillField(this.firstNameField, "FirstAdmin2");
		I.fillField(this.lastNameField, "LastAdmin2");
		I.fillField(this.titleField, "TitleAdmin2");
		I.fillField(this.phoneField, "1234567890");
		I.fillField(this.emailField, "omedym-qa+3aaa@outlook.com");
		I.selectOption(this.groupDropdown, "Admin");
		I.click(this.saveButton);
		I.waitForElement(this.saveButton);				// Wait until refresh, otherwise form closes prematurely

	},
	

}
