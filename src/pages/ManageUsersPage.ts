/// <reference path="../steps.d.ts" />

import {BrowserHelper} from "../helpers/BrowserHelper.js";
import topNavBarPage = require('../pages/TopNavBarPage.js');
import addNewUserPage = require('../pages/AddNewUserPage.js');
var I = actor();

let assert = require('assert');


export = {
	manageUsersHeading: "//h3[text()[contains(.,'Manage Users')]]",
	addUserButton: "//a[@class='btn button_filled add-user-btn']",
	loaded(){
		I.waitForElement(this.manageUsersHeading,20);
	},
	newAdminUser(){
		I.click(this.addUserButton);
		addNewUserPage.loaded();
		addNewUserPage.submitNewAdmin();
	},
	
	

}
