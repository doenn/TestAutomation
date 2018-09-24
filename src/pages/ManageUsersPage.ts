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
	editUserButton: "//li//a[text()[contains(.,'Edit')]]",
	confirmDeletionButton: "//button[text()[contains(.,'OK')]]",
	loaded(){
		I.waitForElement(this.manageUsersHeading,20);
	},
	newAdminUser(){
		I.click(this.addUserButton);
		addNewUserPage.loaded();
		addNewUserPage.submitNewAdmin();
	},
	removeAdminUser(userName : string){
		let actionsDropdown : string = "//tr//td[text()[contains(.,'" +userName+"')]]//parent::tr//td//a[@data-toggle='dropdown']";
		I.click(actionsDropdown);
		I.click(this.deleteUserButton);
		I.click(this.confirmDeletionButton);
	},
	editAdminUser(userName : string){
		let actionsDropdown : string = "//tr//td[text()[contains(.,'" +userName+"')]]//parent::tr//td//a[@data-toggle='dropdown']";
		I.click(actionsDropdown);
		I.click(this.editUserButton);
	},
	
	

}
