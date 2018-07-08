/// <reference path="../steps.d.ts" />

const I = actor();
import loginPage = require('../pages/LoginPage.js');
import dashboardPage = require('../pages/DashboardPage.js');
import companyProfilePage = require('../pages/CompanyProfilePage.js');
import assert = require('assert');

Given('the User has a completed Company Profile', () => {
  // From "features\ViewEditCompanyProfile.feature" {"line":4,"column":3}
  //throw new Error('Not implemented yet');
});

When('the Tenant visits their Company Profile', () => {
  	//const dashboardPage = require('../pages/DashboardPage.js');
	dashboardPage.visitCompanyPofile();
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
	//const loginPage = require('../pages/LoginPage.js');
	loginPage.login();
});

Given('the Tenant visits their Company Profile', () => {
  	//const dashboardPage = require('../pages/DashboardPage.js');
	dashboardPage.visitCompanyPofile();
});

Given('the User has an incomplete Company Profile', () => {


});



Then('the User sees a missing logo', async () => {


  	//const companyProfilePage = require('../pages/CompanyProfilePage.js');

	let companyLogoMissing:boolean = await companyProfilePage.isCompanyLogoMissing();
	console.log(companyLogoMissing);
});



Then('the User sees missing Company information', async() => {

	
	//const companyProfilePage = require('../pages/CompanyProfilePage.js');
	companyProfilePage.verifyDescriptionFieldBlank();
});
