/// <reference path="../steps.d.ts" />



const I = actor();
import emailStep = require('../steps/Email.js');
import {BrowserHelper} from "../helpers/BrowserHelper.js";
import loginPage = require('../pages/LoginPage.js');
import dashboardPage = require('../pages/DashboardPage.js');
import topNavBarPage = require('../pages/TopNavBarPage.js');
import companyProfilePage = require('../pages/CompanyProfilePage.js');
import websiteParametersPage = require('../pages/WebsiteParametersPage.js');
import manageUsersPage = require('../pages/ManageUsersPage.js');
import editUserPage = require('../pages/EditUserPage.js');
import assert = require('assert');
import {Outlook} from "../outlook/Outlook.js";


Given('the User has a completed Company Profile', () => {
	// Tenant with completed Profile
});

When('the Tenant visits their Company Profile', () => {
	topNavBarPage.visitCompanyProfile();
	companyProfilePage.loaded();
});

Then('the User sees their logo', () => {
	I.seeElement(companyProfilePage.companyLogoPresentElement);
});

Then('the User sees their Company information', async () => {
	companyProfilePage.isCompanyNameFilled();
	companyProfilePage.isCompanyAliasFilled();
	companyProfilePage.isCompanyDescriptionFilled();
});

Given('the Tenant is logged in', () => {
	loginPage.login();
});

Given('the Tenant visits their Company Profile', () => {
	topNavBarPage.visitCompanyProfile();
	companyProfilePage.loaded();
});

Given('the User has an incomplete Company Profile', () => {
	// Tenant with incomplete Profile

});



Then('the User sees a missing logo', async () => {
	I.seeElement(companyProfilePage.companyLogoMissingElement);
});



Then('the User sees missing Company information', async() => {
	I.waitForElement(companyProfilePage.companyProfileHeading,16);
	I.seeElement(companyProfilePage.blankDescriptionField);
});

When('the User changes their logo and refreshes their Company Profile',() => {
	topNavBarPage.visitCompanyProfile();
	companyProfilePage.loaded();
	I.waitForElement(companyProfilePage.companyLogoUpload,16);
	I.attachFile(companyProfilePage.companyLogoUpload,"./resources/TestImage2.jpg");
	I.scrollTo(companyProfilePage.updateButton);
	I.click(companyProfilePage.updateButton);
});

Then('the User sees their new logo', () => {
	I.waitForElement(companyProfilePage.profileUpdatedMsg,16);
	I.click(companyProfilePage.profileUpdatedOKButton);
	I.refreshPage();
});

When('the User changes their Company Name and Description and refreshes',() => {
	topNavBarPage.visitCompanyProfile();
	companyProfilePage.loaded();
	I.waitForElement(companyProfilePage.companyLogoUpload,16);

	I.scrollTo(companyProfilePage.companyNameField);
	I.fillField(companyProfilePage.companyNameField, "Sall Sprockets");
	I.scrollTo(companyProfilePage.companyAliasField);
	I.fillField(companyProfilePage.companyAliasField, "sall");
	I.scrollTo(companyProfilePage.descriptionField);
	I.fillField(companyProfilePage.descriptionField, "Sprocket company description");

	I.scrollTo(companyProfilePage.updateButton);
	I.click(companyProfilePage.updateButton);
	I.waitForElement(companyProfilePage.profileUpdatedMsg,16);
	I.click(companyProfilePage.profileUpdatedOKButton);
	I.refreshPage();
});

When('the User specifies a new Company Name and Description and refreshes', () => {
	topNavBarPage.visitCompanyProfile();
	companyProfilePage.loaded();
	I.waitForElement(companyProfilePage.companyLogoUpload,16);

	I.scrollTo(companyProfilePage.companyNameField);
	I.fillField(companyProfilePage.companyNameField, "Sall Sprockets");
	I.scrollTo(companyProfilePage.companyAliasField);
	I.fillField(companyProfilePage.companyAliasField, "sall");
	I.scrollTo(companyProfilePage.descriptionField);
	I.fillField(companyProfilePage.descriptionField, "Sprocket company description");

	I.scrollTo(companyProfilePage.updateButton);
	I.click(companyProfilePage.updateButton);
	I.waitForElement(companyProfilePage.profileUpdatedMsg,16);
	I.click(companyProfilePage.profileUpdatedOKButton);
	I.refreshPage();
});

Then('the User sees their new Company Name and Description', () => {
	companyProfilePage.isCompanyNameFilled();
	companyProfilePage.isCompanyAliasFilled();
	companyProfilePage.isCompanyDescriptionFilled();
	I.scrollTo(companyProfilePage.companyNameField);
	I.seeInField(companyProfilePage.companyNameField, "Sall Sprockets");
	I.scrollTo(companyProfilePage.companyAliasField);
	I.seeInField(companyProfilePage.companyAliasField, "sall");
	I.scrollTo(companyProfilePage.descriptionField);
	I.seeInField(companyProfilePage.descriptionField, "Sprocket company description");
});


Given('the User specifies a Link Duration', () => {
	//
});

When('a Prospect accesses a link after the Duration passes', () => {
	//
});

Then('the Link shows a link expired page', () => {
	//
});


Given('the User has never specified a Link Duration', () => {
});

When('the User Views the link duration dropdown', () => {
	topNavBarPage.visitWebsiteParameters();
	websiteParametersPage.loaded();
	I.click(websiteParametersPage.linkDurationEditButton);
});

Then('the User sees the default link duration value', async () => {
	let linkDropdownValue : number = await I.grabValueFrom(websiteParametersPage.linkDurationDropdown);
	assert.equal(linkDropdownValue, 24);
	
});

Given('a User is able to edit the Manage Users page', () => {
});

When('the User adds a new User as an Admin', () => {
	topNavBarPage.visitManageUsers();
	manageUsersPage.loaded();
	manageUsersPage.newAdminUser();
});

Then('the new User can edit the Manage Users page as well', async () => {
	let outlook = await emailStep.authenticate();
	let tempPassword = await emailStep.getTemporaryPassword(outlook);
	session('NewAdmin', () => {
		loginPage.loginAs("omedym-qa+3aaa@outlook.com",tempPassword);
		loginPage.changePassword("Omedym123");
		topNavBarPage.visitManageUsers();
		manageUsersPage.loaded();
	});

	
});

When('the User removes a User from the Manage Users page', async () => {
	topNavBarPage.visitManageUsers();
	manageUsersPage.loaded();
   	manageUsersPage.removeAdminUser("omedym-qa+3aaa@outlook.com");
	
});

Then('the new User can no longer login to the Company site', async () => {
	session('RemovedAdmin', () => {
		loginPage.loginAs("omedym-qa+3aaa@outlook.com","Omedym123");
		I.seeElement(loginPage.incorrectLoginCredentialsMsg);
	});
});

When('the User sends a password reset to another User', () => {

});

When('that other user must change their password upon login', () => {

});

Then('that other user receives a password reset email', async () => {
	
});

When('the User deactivates a User from the Manage Users page', () => {
	topNavBarPage.visitManageUsers();
	manageUsersPage.loaded();
	manageUsersPage.editAdminUser("omedym-qa+3aaa@outlook.com");
	editUserPage.deactivateUser();
	I.click(editUserPage.saveButton);
});

Then('the deactivated User can no longer login to the Company site', async () => {
	session('RemovedAdmin', () => {
		loginPage.loginAs("omedym-qa+3aaa@outlook.com","Omedym123");
		I.seeElement(loginPage.incorrectLoginCredentialsMsg);
	});
});

When('the User activates a User from the Manage Users page', () => {
	topNavBarPage.visitManageUsers();
	manageUsersPage.loaded();
	manageUsersPage.editAdminUser("omedym-qa+3aaa@outlook.com");
	editUserPage.activateUser();
	I.click(editUserPage.saveButton);
});

Then('the deactivated User can login to the Company site', async () => {
	session('DeactivatedAdmin', () => {
		loginPage.loginAs("omedym-qa+3aaa@outlook.com","Omedym123");
		topNavBarPage.visitManageUsers();
		manageUsersPage.loaded();
	});
});






