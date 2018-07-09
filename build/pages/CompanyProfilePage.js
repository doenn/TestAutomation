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
const BrowserHelper_js_1 = require("../helpers/BrowserHelper.js");
var I = actor();
module.exports = {
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
    loaded() {
        I.waitForElement(this.companyProfileHeading, 20);
    },
    isCompanyLogoMissing() {
        return __awaiter(this, void 0, void 0, function* () {
            let browser = new BrowserHelper_js_1.BrowserHelper();
            I.waitForElement(this.companyProfileHeading, 16);
            let companyLogoPresent = yield browser.findExisting(this.companyLogoMissingElement);
            if (companyLogoPresent) {
                return false; // Logo is present
            }
            else {
                return true; // Logo is missing
            }
        });
    },
    verifyDescriptionFieldBlank() {
        I.waitForElement(this.companyProfileHeading, 16);
        I.seeElement(this.blankDescriptionField);
    }
};
