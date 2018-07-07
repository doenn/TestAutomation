"use strict";
/// <reference path="../steps.d.ts" />
var I = actor();
module.exports = {
    emailField: "//input[@name='email']",
    passwordField: "//input[@name='password']",
    login() {
        const tenant = require('../resources/User.js');
        I.amOnPage('/');
        I.see('Log In');
        I.fillField(this.emailField, tenant.tenant.email);
        I.fillField(this.passwordField, tenant.tenant.password);
        I.pressKey('Enter');
    }
};
