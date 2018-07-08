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
    isCompanyLogoMissing() {
        return __awaiter(this, void 0, void 0, function* () {
            I.waitForElement(this.companyProfileHeading, 16);
            let companyLogoMissing = yield browser.isExisting(this.companyLogoMissingElement);
            return companyLogoMissing;
        });
    },
    verifyDescriptionFieldBlank() {
        I.waitForElement(this.companyProfileHeading, 16);
        I.seeElement(this.blankDescriptionField);
    }
};
