/// <reference path="../steps.d.ts" />
'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
let Helper = codecept_helper;
let assert = require('assert');
class BrowserHelper extends Helper {
    contructor() {
    }
    findExisting(elementSelector) {
        return __awaiter(this, void 0, void 0, function* () {
            let browser = this.helpers['WebDriverIO'].browser;
            let elementPresent = yield browser.isExisting(elementSelector);
            return elementPresent;
        });
    }
    // Wait for sustained visibility
    // Waits a second time if obstructed from view by a spinner
    waitFor(elementSelector, timeout) {
        if (!timeout) {
            let timeout = 8000; // Default timeout 8 seconds
        }
        let browser = this.helpers['WebDriverIO'].browser;
        return browser.waitForVisible(elementSelector, timeout).then(function () {
            return browser.waitForVisible(elementSelector, 400, false);
        })
            .then(function () {
            return browser.waitForVisible(elementSelector, timeout);
        }).catch(function () {
            return false;
        });
    }
    // Chainable click
    clickAfter(elementSelector) {
        let browser = this.helpers['WebDriverIO'].browser;
        return browser.click(elementSelector);
    }
}
exports.BrowserHelper = BrowserHelper;
