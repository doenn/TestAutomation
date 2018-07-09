"use strict";
/// <reference path="../steps.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const I = actor();
const loginPage = require("../pages/LoginPage.js");
const dashboardPage = require("../pages/DashboardPage.js");
const companyProfilePage = require("../pages/CompanyProfilePage.js");
Given('the User has a completed Company Profile', () => {
    // Tenant with completed Profile
});
When('the Tenant visits their Company Profile', () => {
    dashboardPage.visitCompanyProfile();
    companyProfilePage.loaded();
});
Then('the User sees their logo', () => {
    I.seeElement(companyProfilePage.companyLogoPresentElement);
});
Then('the User sees their Company information', () => __awaiter(this, void 0, void 0, function* () {
    companyProfilePage.isCompanyNameFilled();
    companyProfilePage.isCompanyAliasFilled();
    companyProfilePage.isCompanyDescriptionFilled();
}));
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
Then('the User sees a missing logo', () => __awaiter(this, void 0, void 0, function* () {
    I.seeElement(companyProfilePage.companyLogoMissingElement);
}));
Then('the User sees missing Company information', () => __awaiter(this, void 0, void 0, function* () {
    I.waitForElement(companyProfilePage.companyProfileHeading, 16);
    I.seeElement(companyProfilePage.blankDescriptionField);
}));
When('the User changes their logo and refreshes their Company Profile', () => {
    dashboardPage.visitCompanyProfile();
    companyProfilePage.loaded();
    I.waitForElement(companyProfilePage.companyLogoUpload, 16);
    I.attachFile(companyProfilePage.companyLogoUpload, "./resources/TestImage2.jpg");
    I.scrollTo(companyProfilePage.updateButton);
    I.click(companyProfilePage.updateButton);
});
Then('the User sees their new logo', () => {
    I.waitForElement(companyProfilePage.profileUpdatedMsg, 16);
    I.click(companyProfilePage.profileUpdatedOKButton);
    I.refreshPage();
});
When('the User changes their Company Name and Description and refreshes', () => {
    dashboardPage.visitCompanyProfile();
    companyProfilePage.loaded();
    I.waitForElement(companyProfilePage.companyLogoUpload, 16);
    I.scrollTo(companyProfilePage.companyNameField);
    I.fillField(companyProfilePage.companyNameField, "Sall Sprockets");
    I.scrollTo(companyProfilePage.companyAliasField);
    I.fillField(companyProfilePage.companyAliasField, "sall");
    I.scrollTo(companyProfilePage.descriptionField);
    I.fillField(companyProfilePage.descriptionField, "Sprocket company description");
    I.scrollTo(companyProfilePage.updateButton);
    I.click(companyProfilePage.updateButton);
    I.waitForElement(companyProfilePage.profileUpdatedMsg, 16);
    I.click(companyProfilePage.profileUpdatedOKButton);
    I.refreshPage();
});
When('the User specifies a new Company Name and Description and refreshes', () => {
    dashboardPage.visitCompanyProfile();
    companyProfilePage.loaded();
    I.waitForElement(companyProfilePage.companyLogoUpload, 16);
    I.scrollTo(companyProfilePage.companyNameField);
    I.fillField(companyProfilePage.companyNameField, "Sall Sprockets");
    I.scrollTo(companyProfilePage.companyAliasField);
    I.fillField(companyProfilePage.companyAliasField, "sall");
    I.scrollTo(companyProfilePage.descriptionField);
    I.fillField(companyProfilePage.descriptionField, "Sprocket company description");
    I.scrollTo(companyProfilePage.updateButton);
    I.click(companyProfilePage.updateButton);
    I.waitForElement(companyProfilePage.profileUpdatedMsg, 16);
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
    // 
});
When('the User Views the link duration dropdown', () => {
    //
});
Then('the User sees the default link duration valueo', () => {
    //
});
