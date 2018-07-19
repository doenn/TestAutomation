"use strict";
/// <reference path="../steps.d.ts" />
const addNewUserPage = require("../pages/AddNewUserPage.js");
var I = actor();
let assert = require('assert');
module.exports = {
    manageUsersHeading: "//h3[text()[contains(.,'Manage Users')]]",
    addUserButton: "//a[@class='btn button_filled add-user-btn']",
    loaded() {
        I.waitForElement(this.manageUsersHeading, 20);
    },
    newAdminUser() {
        I.click(this.addUserButton);
        addNewUserPage.loaded();
        addNewUserPage.submitNewAdmin();
    },
};
