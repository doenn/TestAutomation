/// <reference path="../steps.d.ts" />

import {BrowserHelper} from "../helpers/BrowserHelper.js";
var I = actor();

let assert = require('assert');


export = {
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
	loaded(){
		I.waitForElement(this.companyProfileHeading,20);
	},
	async isCompanyNameFilled(){
		let companyNameFieldText : string[] = await I.grabValueFrom(this.companyNameField);
		if (companyNameFieldText[0].length > 0){
			assert(true);
		}
		else{
			assert(false);
		}
	},
	async isCompanyDescriptionFilled(){
		let descriptionFieldText : string[] = await I.grabTextFrom(this.descriptionField);
		if (descriptionFieldText[0].length > 0){
			assert(true);
		}
		else{
			assert(false);
		}
	},
	async isCompanyAliasFilled(){
		let companyAliasFieldText : string[] = await I.grabValueFrom(this.companyAliasField);
		if (companyAliasFieldText[0].length > 0){
			assert(true);
		}
		else{
			assert(false);
		}
	},
	
	

}
