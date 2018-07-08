/// <reference path="../steps.d.ts" />

var I = actor();
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
	companyLogoMissingElement: "//section//div/img[@src[contains(.,'no_image_available.png')]]",
	blankDescriptionField: "//div/textarea[not(text())]",
	async isCompanyLogoMissing(){
		I.waitForElement(this.companyProfileHeading,16);
		let companyLogoMissing : boolean = await browser.isExisting(this.companyLogoMissingElement);
		return companyLogoMissing;

	},
	verifyDescriptionFieldBlank(){
		I.waitForElement(this.companyProfileHeading,16);
		I.seeElement(this.blankDescriptionField);
	}
}
