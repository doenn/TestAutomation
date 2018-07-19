/// <reference path="../steps.d.ts" />

import {BrowserHelper} from "../helpers/BrowserHelper.js";
var I = actor();
import assert = require('assert');

export = {
	dashboardLink: "//a[text()[contains(.,'DASHBOARD')]]",
	manageProspectsLink: "//a[text()[contains(.,'MANAGE PROSPECTS')]]",
	manageProspectsDropdown: {
		websiteParametersLink: "//a[text()[contains(.,'WEBSITE PARAMETERS')]]"
	},
	digitalAssetsLink: "//a[text()[contains(.,'DIGITAL ASSETS')]]",
	companySettingsLink: "//a[text()[contains(.,'COMPANY SETTINGS')]]",	
	companySettingsDropdown: {
		companyProfileLink: "//a[text()[contains(.,'COMPANY PROFILE')]]",
		manageUsersLink: "//a[text()[contains(.,'MANAGE USERS')]]"
	},
	visitCompanyProfile(){
		let browser = new BrowserHelper();
		let topNavBarPage = this;
		browser.waitFor(topNavBarPage.companySettingsLink).then(function(){		// Considers waiting for page load spinner
				return browser.clickAfter(topNavBarPage.companySettingsLink);
			}).then(function(){
				return browser.clickAfter(topNavBarPage.companySettingsDropdown.companyProfileLink);
			}).catch(function(error){
				assert(false);
			});	
	},
	visitManageUsers(){
		let browser = new BrowserHelper();
		let topNavBarPage = this;
		browser.waitFor(topNavBarPage.companySettingsLink).then(function(){		// Considers waiting for page load spinner
				return browser.clickAfter(topNavBarPage.companySettingsLink);
			}).then(function(){
				return browser.clickAfter(topNavBarPage.companySettingsDropdown.manageUsersLink);
			}).catch(function(error){
				assert(false);
			});	
	},
	visitWebsiteParameters(){
		let browser = new BrowserHelper();
		let topNavBarPage = this;
		browser.waitFor(topNavBarPage.manageProspectsLink).then(function(){		// Considers waiting for page load spinner
				return browser.clickAfter(topNavBarPage.manageProspectsLink);
			}).then(function(){
				return browser.clickAfter(topNavBarPage.manageProspectsDropdown.websiteParametersLink);
			}).catch(function(error){
				assert(false);
			});
	}
}