"use strict";
/// <reference path="../steps.d.ts" />
var I = actor();
let assert = require('assert');
module.exports = {
    editUserHeading: "//h3[text()[contains(.,'Edit User')]]",
    firstNameField: "//input[@id='first_name']",
    lastNameField: "//input[@id='first_name' and @name='last_name']",
    titleField: "//input[@id='title']",
    phoneField: "//input[@id='phone']",
    emailField: "//input[@id='email']",
    groupDropdown: "//select[@name='role_id']",
    cancelButton: "//a[text()='Cancel']",
    saveButton: "//button[text()='Save']",
    resetPasswordButton: "//button[@name='reset-pw']",
    activateCheckbox: "//input[@id='activate']",
    activateCheckboxChecked: "//div[@class[contains(.,' checked')]]//input[@id='activate']",
    activateCheckboxUnchecked: "//div[@class[not(contains(.,' checked'))]]//input[@id='activate']",
    loaded() {
        I.waitForElement(this.editUserHeading, 20);
    },
    activateUser() {
        I.waitForElement(this.activateCheckboxUnchecked, 20);
        I.click(this.activateCheckbox);
        I.waitForElement(this.activateCheckboxChecked, 20);
    },
    deactivateUser() {
        I.waitForElement(this.activateCheckboxChecked, 20);
        I.click(this.activateCheckbox);
        I.waitForElement(this.activateCheckboxUnchecked, 20);
    },
};
