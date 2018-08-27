/// <reference path="../steps.d.ts" />

import {BrowserHelper} from "../helpers/BrowserHelper.js";
import topNavBarPage = require('../pages/TopNavBarPage.js');
import addNewUserPage = require('../pages/AddNewUserPage.js');
var I = actor();

let assert = require('assert');


export = {
	prospectListHeading: "//h3[text()[contains(.,'Prospect List')]]",
	searchField: "//input[@type='search']",
	firstNameColumn: "//tr/th[contains(@aria-label,'first name')]",
	lastNameColumn: "//tr/th[contains(@aria-label,'last name')]",
	titleColumn: "//tr/th[contains(@aria-label,'title')]",
	companyColumn: "//tr/th[contains(@aria-label,'Company')]",
	emailColumn: "//tr/th[contains(@aria-label,'Email')]",
	phoneColumn: "//tr/th[contains(@aria-label,'phone')]",
	loaded(){
		I.waitForElement(this.prospectListHeading,20);
	},
	searchProspect(searchCriteria : string){
		I.click(this.searchField);
		I.fillField(this.searchField, searchCriteria);
	},
	
	

}
