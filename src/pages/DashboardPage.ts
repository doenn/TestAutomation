/// <reference path="../steps.d.ts" />

import {BrowserHelper} from "../helpers/BrowserHelper.js";
var I = actor();
import assert = require('assert');

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
	visitCompanyProfile(){
		let browser = new BrowserHelper();
		let dashboardPage = this; 
		browser.waitFor(this.topNavBar.companySettingsLink).then(function(){
				return browser.clickAfter(dashboardPage.topNavBar.companySettingsLink);
			}).then(function(){
				return browser.clickAfter(dashboardPage.topNavBar.companySettingsDropdown.companyProfileLink);
			}).catch(function(error){
				assert(false);
			});
		
	}
}
