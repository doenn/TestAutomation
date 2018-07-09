/// <reference path="../steps.d.ts" />

const I = actor();
import {BrowserHelper} from "../helpers/BrowserHelper.js";
import loginPage = require('../pages/LoginPage.js');
import dashboardPage = require('../pages/DashboardPage.js');
import companyProfilePage = require('../pages/CompanyProfilePage.js');
import assert = require('assert');

Given('the User has a completed Company Profile', () => {
	// Tenant with completed Profile
});

When('the Tenant visits their Company Profile', () => {
  	//const dashboardPage = require('../pages/DashboardPage.js');
	dashboardPage.visitCompanyProfile();
	companyProfilePage.loaded();
});

Then('the User sees their logo', () => {
  // From "features\ViewEditCompanyProfile.feature" {"line":6,"column":3}
  //throw new Error('Not implemented yet');
});

Then('the User sees their Company information', () => {
  // From "features\ViewEditCompanyProfile.feature" {"line":7,"column":3}
  //throw new Error('Not implemented yet');
});

Given('the Tenant is logged in', () => {
	loginPage.login();
});

Given('the Tenant visits their Company Profile', () => {
	dashboardPage.visitCompanyProfile();
	companyProfilePage.loaded();
});

Given('the User has an incomplete Company Profile', () => {
	// Tenant with incomplete Profile

});



Then('the User sees a missing logo', async () => {
	let companyLogoMissing:boolean = await companyProfilePage.isCompanyLogoMissing();
	assert(companyLogoMissing);
});



Then('the User sees missing Company information', async() => {
	I.waitForElement(companyProfilePage.companyProfileHeading,16);
	I.seeElement(companyProfilePage.blankDescriptionField);
});
