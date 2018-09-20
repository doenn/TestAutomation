"use strict";
/// <reference path="../steps.d.ts" />
const addNewUserPage = require("../pages/AddNewUserPage.js");
var I = actor();
let assert = require('assert');
module.exports = {
    manageUsersHeading: "//h3[text()[contains(.,'Manage Users')]]",
    addUserButton: "//a[@class='btn button_filled add-user-btn']",
    userActionsDropdown: "//td//a[@data-toggle='dropdown']",
    deleteUserButton: "//li//a[@class='btn-delete-user']",
    confirmDeletionButton: "//button[text()[contains(.,'OK')]]",
    loaded() {
        I.waitForElement(this.manageUsersHeading, 20);
    },
    newAdminUser() {
        I.click(this.addUserButton);
        addNewUserPage.loaded();
        addNewUserPage.submitNewAdmin();
    },
    removeAdminUser(userName) {
        let actionsDropdown = "//tr//td[text()[contains(.,'" + userName + "')]]//parent::tr//td//a[@data-toggle='dropdown']";
        I.click(actionsDropdown);
        I.click(this.deleteUserButton);
        I.click(this.confirmDeletionButton);
    },
};
