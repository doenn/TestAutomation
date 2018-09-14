"use strict";
/// <reference path="../steps.d.ts" />
var I = actor();
let assert = require('assert');
module.exports = {
    digitalAssetsHeading: "//h3[text()[contains(.,'Digital Assets')]]",
    uploadButton: "//input[@id='digital_asset_upload']",
    searchField: "//input[@type='search']",
    getAssetRowSelector(rowIndex) {
        return "//tbody//tr[" + (rowIndex + 1) + "]"; // Row index is 1 based
    },
};
