"use strict";
/// <reference path="../steps.d.ts" />
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
    companyLogoMissing: "//section//div/img[@src[contains(.,'no_image_available.png')]]",
    blankDescriptionField: "//div/textarea[not(text())]",
    verifyCompanyLogoNotPresent() {
        I.waitForElement(this.companyProfileHeading, 16);
        I.seeElement(this.companyLogoMissing);
    },
    verifyDescriptionFieldBlank() {
        I.waitForElement(this.companyProfileHeading, 16);
        I.seeElement(this.blankDescriptionField);
    }
};
