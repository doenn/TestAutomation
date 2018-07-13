"use strict";
/// <reference path="../steps.d.ts" />
var I = actor();
let assert = require('assert');
module.exports = {
    websiteParametersHeading: "//h3[text()[contains(.,'Website Parameters')]]",
    linkDurationSection: "//div[text()[contains(.,'Link Duration')]]",
    linkDurationEditButton: "//div[text()[contains(.,'Link Duration')]]/button",
    linkDurationDropdown: "//select[@name='company_setting[prospect_active_time]']",
    loaded() {
        I.waitForElement(this.websiteParametersHeading, 20);
    },
};
