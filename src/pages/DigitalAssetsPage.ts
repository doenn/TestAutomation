/// <reference path="../steps.d.ts" />

import {BrowserHelper} from "../helpers/BrowserHelper.js";
import topNavBarPage = require('../pages/TopNavBarPage.js');
import addNewUserPage = require('../pages/AddNewUserPage.js');
var I = actor();

let assert = require('assert');


export = {
	digitalAssetsHeading: "//h3[text()[contains(.,'Digital Assets')]]",
	uploadButton: "//input[@id='digital_asset_upload']",
	searchField: "//input[@type='search']",
	getAssetRowSelector(rowIndex : number) : string{
		return "//tbody//tr["+(rowIndex+1)+"]";		// Row index is 1 based
	},
	/*questionField: "//input[@name='keyword']",
	recommendedTab: "//ul[@class='nav nav-tabs']//li//a[@id='dod_recommended_header']",
	searchResultsTab: "//ul[@class='nav nav-tabs']//li//a[@id='dod_searchresults_header']",
	trendingTab: "//ul[@class='nav nav-tabs']//li//a[@id='dod_trending_header']",
loaded(){
		I.waitForElement(this.prospectListHeading,20);
	},
	searchProspect(searchCriteria : string){
		I.click(this.searchField);
		I.fillField(this.searchField, searchCriteria);
	},
	*/
	

}
