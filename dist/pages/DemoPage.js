"use strict";
/// <reference path="../steps.d.ts" />
var I = actor();
let assert = require('assert');
module.exports = {
    //demoHeading: "//h3[text()[contains(.,'Prospect List')]]",
    questionField: "//input[@name='keyword']",
    recommendedTab: "//ul[@class='nav nav-tabs']//li//a[@id='dod_recommended_header']",
    searchResultsTab: "//ul[@class='nav nav-tabs']//li//a[@id='dod_searchresults_header']",
    trendingTab: "//ul[@class='nav nav-tabs']//li//a[@id='dod_trending_header']",
};
