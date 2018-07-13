"use strict";
/// <reference path="../steps.d.ts" />
const BrowserHelper_js_1 = require("../helpers/BrowserHelper.js");
var I = actor();
const assert = require("assert");
module.exports = {
    dashboardLink: "//a[text()[contains(.,'DASHBOARD')]]",
    manageProspectsLink: "//a[text()[contains(.,'MANAGE PROSPECTS')]]",
    manageProspectsDropdown: {
        websiteParametersLink: "//a[text()[contains(.,'WEBSITE PARAMETERS')]]"
    },
    digitalAssetsLink: "//a[text()[contains(.,'DIGITAL ASSETS')]]",
    companySettingsLink: "//a[text()[contains(.,'COMPANY SETTINGS')]]",
    companySettingsDropdown: {
        companyProfileLink: "//a[text()[contains(.,'COMPANY PROFILE')]]"
    },
    visitCompanyProfile() {
        let browser = new BrowserHelper_js_1.BrowserHelper();
        let topNavBarPage = this;
        browser.waitFor(topNavBarPage.companySettingsLink).then(function () {
            return browser.clickAfter(topNavBarPage.companySettingsLink);
        }).then(function () {
            return browser.clickAfter(topNavBarPage.companySettingsDropdown.companyProfileLink);
        }).catch(function (error) {
            assert(false);
        });
    },
    visitWebsiteParameters() {
        let browser = new BrowserHelper_js_1.BrowserHelper();
        let topNavBarPage = this;
        browser.waitFor(topNavBarPage.manageProspectsLink).then(function () {
            return browser.clickAfter(topNavBarPage.manageProspectsLink);
        }).then(function () {
            return browser.clickAfter(topNavBarPage.manageProspectsDropdown.websiteParametersLink);
        }).catch(function (error) {
            assert(false);
        });
    }
};
