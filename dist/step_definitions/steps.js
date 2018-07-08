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
Then('the User sees a missing logo', () => __awaiter(this, void 0, void 0, function* () {
    //const companyProfilePage = require('../pages/CompanyProfilePage.js');
    let companyLogoMissing = yield companyProfilePage.isCompanyLogoMissing();
    console.log(companyLogoMissing);
}));
Then('the User sees missing Company information', () => __awaiter(this, void 0, void 0, function* () {
    //const companyProfilePage = require('../pages/CompanyProfilePage.js');
    companyProfilePage.verifyDescriptionFieldBlank();
}));
