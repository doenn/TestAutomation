/// <reference path="../steps.d.ts" />

import {BrowserHelper} from "../helpers/BrowserHelper.js";
import topNavBarPage = require('../pages/TopNavBarPage.js');
var I = actor();

let assert = require('assert');


export = {
	websiteParametersHeading: "//h3[text()[contains(.,'Website Parameters')]]",
	linkDurationSection: "//div[text()[contains(.,'Link Duration')]]",
	linkDurationEditButton: "//div[text()[contains(.,'Link Duration')]]/button",
	linkDurationDropdown: "//select[@name='company_setting[prospect_active_time]']",
	loaded(){
		I.waitForElement(this.websiteParametersHeading,20);
	},
	

}
