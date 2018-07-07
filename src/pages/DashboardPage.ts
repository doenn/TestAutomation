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
	visitCompanyPofile(){
		I.waitForElement(this.topNavBar.companySettingsLink,16);
		I.retry(16).click(this.topNavBar.companySettingsLink);
		I.click(this.topNavBar.companySettingsDropdown.companyProfileLink);
	}
}
