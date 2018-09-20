/// <reference path="../steps.d.ts" />

import {BrowserHelper} from "../helpers/BrowserHelper.js";
import topNavBarPage = require('../pages/TopNavBarPage.js');
import addNewUserPage = require('../pages/AddNewUserPage.js');
var I = actor();

let assert = require('assert');


export = {
	manageUsersHeading: "//h3[text()[contains(.,'Manage Users')]]",
	addUserButton: "//a[@class='btn button_filled add-user-btn']",
	userActionsDropdown: "//td//a[@data-toggle='dropdown']",
	deleteUserButton: "//li//a[@class='btn-delete-user']",
	loaded(){
		I.waitForElement(this.manageUsersHeading,20);
	},
	newAdminUser(){
		I.click(this.addUserButton);
		addNewUserPage.loaded();
		addNewUserPage.submitNewAdmin();
	},
	removeAdminUser(){

//tr//td[text()[contains(.,'omedym-qa+3aaa@outlook.com')]]//parent::tr//td//a[@data-toggle='dropdown']"
		I.click(this.userActionsDropdown);
		I.click(this.deleteUserButton);
	},
	
	

}
