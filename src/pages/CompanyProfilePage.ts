/// <reference path="../steps.d.ts" />

import {BrowserHelper} from "../helpers/BrowserHelper.js";
var I = actor();


export = {
	topNavBar: {
		dashboardLink: "//a[text()[contains(.,'DASHBOARD')]]",
		manageProspectsLink: "//a[text()[contains(.,'MANAGE PROSPECTS')]]",
		digitalAssetsLink: "//a[text()[contains(.,'DIGITAL ASSETS')]]",
		companySettingsLink: "//a[text()[contains(.,'COMPANY SETTINGS')]]",	
		companySettingsDropdown: {
			companyProfileLink: "//a[text()[contains(.,'COMPANY PROFILE')]]"
		},
	},
	companyProfileHeading: "//h3[text()[contains(.,'Company Profile')]]",
	companyLogoMissingElement: "//section//div/img[@src[contains(.,'no_image_available.png')]]",
	blankDescriptionField: "//div/textarea[not(text())]",
	loaded(){
		I.waitForElement(this.companyProfileHeading,20);
	},
	async isCompanyLogoMissing(){
		let browser = new BrowserHelper();
		I.waitForElement(this.companyProfileHeading,16);
		let companyLogoPresent : boolean = await browser.findExisting(this.companyLogoMissingElement);
		if (companyLogoPresent){
			return false;		// Logo is present
		}
		else{
			return true;		// Logo is missing
		}
	},
	verifyDescriptionFieldBlank(){
		I.waitForElement(this.companyProfileHeading,16);
		I.seeElement(this.blankDescriptionField);
	}
}
