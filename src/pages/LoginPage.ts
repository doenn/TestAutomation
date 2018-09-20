/// <reference path="../steps.d.ts" />

var I = actor();
export = {
	emailField: "//input[@name='email']",
	passwordField: "//input[@name='password']",
	newPasswordField: "//input[@placeholder='New password']",
	confirmPasswordField: "//input[@name='password_confirmation']",
	incorrectLoginCredentialsMsg: "//ul//li[text()[contains(.,'Wrong username or password or your account is not active!')]]",
	login(){
		const tenant = require('../resources/User.js');
		I.amOnPage('/');
		I.see('Log In');
		I.fillField(this.emailField,tenant.tenant.email);
		I.fillField(this.passwordField,tenant.tenant.password);
		I.pressKey('Enter');
	},
	loginAs(email : string, password :string){
		const tenant = require('../resources/User.js');
		I.amOnPage('/');
		I.see('Log In');
		I.fillField(this.emailField,email);
		I.fillField(this.passwordField,password);
		I.pressKey('Enter');
	},
	changePassword(newPassword :string){
		I.fillField(this.newPasswordField,newPassword);
		I.fillField(this.confirmPasswordField,newPassword);
		I.pressKey('Enter');
	}
}
