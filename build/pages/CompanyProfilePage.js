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
let assert = require('assert');
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
    companyLogoPresentElement: "//section//div/img[@src[contains(.,'company_logo')]]",
    companyLogoMissingElement: "//section//div/img[@src[contains(.,'no_image_available.png')]]",
    companyLogoUpload: "//div//input[@id='company-logo-upload']",
    companyNameField: "//input[@id='company_name']",
    companyAliasField: "//input[@id='company_alias']",
    blankDescriptionField: "//div/textarea[not(text())]",
    descriptionField: "//div/textarea",
    updateButton: "//button[@type='submit']",
    profileUpdatedMsg: "//h2[text()[contains(.,'Company details updated successfully')]]",
    profileUpdatedOKButton: "//button[text()[contains(.,'OK')]]",
    loaded() {
        I.waitForElement(this.companyProfileHeading, 20);
    },
    isCompanyNameFilled() {
        return __awaiter(this, void 0, void 0, function* () {
            let companyNameFieldText = yield I.grabValueFrom(this.companyNameField);
            if (companyNameFieldText[0].length > 0) {
                assert(true);
            }
            else {
                assert(false);
            }
        });
    },
    isCompanyDescriptionFilled() {
        return __awaiter(this, void 0, void 0, function* () {
            let descriptionFieldText = yield I.grabTextFrom(this.descriptionField);
            if (descriptionFieldText[0].length > 0) {
                assert(true);
            }
            else {
                assert(false);
            }
        });
    },
    isCompanyAliasFilled() {
        return __awaiter(this, void 0, void 0, function* () {
            let companyAliasFieldText = yield I.grabValueFrom(this.companyAliasField);
            if (companyAliasFieldText[0].length > 0) {
                assert(true);
            }
            else {
                assert(false);
            }
        });
    },
};
