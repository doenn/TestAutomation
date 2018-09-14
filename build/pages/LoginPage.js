"use strict";
/// <reference path="../steps.d.ts" />
var I = actor();
module.exports = {
    emailField: "//input[@name='email']",
    passwordField: "//input[@name='password']",
    newPasswordField: "//input[@placeholder='New password']",
    confirmPasswordField: "//input[@name='password_confirmation']",
    login() {
        const tenant = require('../resources/User.js');
        I.amOnPage('/');
        I.see('Log In');
        I.fillField(this.emailField, tenant.tenant.email);
        I.fillField(this.passwordField, tenant.tenant.password);
        I.pressKey('Enter');
    },
    loginAs(email, password) {
        const tenant = require('../resources/User.js');
        I.amOnPage('/');
        I.see('Log In');
        I.fillField(this.emailField, email);
        I.fillField(this.passwordField, password);
        I.pressKey('Enter');
    },
    changePassword(newPassword) {
        I.fillField(this.newPasswordField, newPassword);
        I.fillField(this.confirmPasswordField, newPassword);
        I.pressKey('Enter');
    }
};
