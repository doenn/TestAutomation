/// <reference path="../steps.d.ts" />

var Msal = require('msal');

import msalconfig = require('./msalconfig.js');

export = {
	setup(){
        // Graph API endpoint to show user profile
        let graphApiEndpoint = "https://graph.microsoft.com/v1.0/me";

        // Graph API scope used to obtain the access token to read user profile
        let graphAPIScopes = ["https://graph.microsoft.com/user.read"];

        // Initialize application
        let userAgentApplication = new Msal.this.userAgentApplication(msalconfig.clientID, null, this.loginCallback, {
            redirectUri: msalconfig.redirectUri
        });

        //Previous version of msal uses redirect url via a property
        if (this.userAgentApplication.redirectUri) {
            this.userAgentApplication.redirectUri = msalconfig.redirectUri;
        }
    },

/*
window.onload = function () {
    // If page is refreshed, continue to display user info
    if (!this.userAgentApplication.isCallback(window.location.hash) && window.parent === window && !window.opener) {
        var user = this.userAgentApplication.getUser();
        if (user) {
            this.callGraphApi();
        }
    }
}
*/

    /**
     * Call the Microsoft Graph API and display the results on the page
     */
    callGraphApi() {
        var user = this.userAgentApplication.getUser();
        if (!user) {
            // If user is not signed in, then prompt user to sign in via loginRedirect.
            // This will redirect user to the Azure Active Directory v2 Endpoint
            this.userAgentApplication.loginRedirect(this.graphAPIScopes);

            // The call to loginRedirect above frontloads the consent to query Graph API during the sign-in.
            // If you want to use dynamic consent, just remove the this.graphAPIScopes from loginRedirect call:
            // As such, user will be prompted to give consent as soon as the token for a resource that 
            // he/she hasn't consented before is requested. In the case of this application - 
            // the first time the Graph API call to obtain user's profile is executed.
        } else {

            // If user is already signed in, display the user info
            /* var userInfoElement = document.getElementById("userInfo");
            userInfoElement.parentElement.classList.remove("hidden");
            userInfoElement.innerHTML = JSON.stringify(user, null, 4);

            // Show Sign-Out button
            document.getElementById("this.signOutButton").classList.remove("hidden");

            // Now Call Graph API to show the user profile information:
            var graphCallResponseElement = document.getElementById("graphResponse");
            graphCallResponseElement.parentElement.classList.remove("hidden");
            graphCallResponseElement.innerText = "Calling Graph ...";
        */
            // In order to call the Graph API, an access token needs to be acquired.
            // Try to acquire the token used to Query Graph API silently first
            this.userAgentApplication.acquireTokenSilent(this.graphAPIScopes)
                .then(function (token) {
                    //After the access token is acquired, call the Web API, sending the acquired token
                    this.callWebApiWithToken(this.graphApiEndpoint, token, null,null);//graphCallResponseElement, document.getElementById("accessToken"));

                }, function (error) {
                    // If the acquireTokenSilent() method fails, then acquire the token interactively via acquireTokenRedirect().
                    // In this case, the browser will redirect user back to the Azure Active Directory v2 Endpoint so the user 
                    // can re-type the current username and password and/ or give consent to new permissions your application is requesting.
                    // After authentication/ authorization completes, this page will be reloaded again and this.callGraphApi() will be called.
                    // Then, acquireTokenSilent will then acquire the token silently, the Graph API call results will be made and results will be displayed in the page.
                    if (error) {
                        this.userAgentApplication.acquireTokenRedirect(this.graphAPIScopes);
                    }
                });

        }
    },


    /**
     * Show an error message in the page
     * @param {string} endpoint - the endpoint used for the error message
     * @param {string} error - the error string
     * @param {object} errorElement - the HTML element in the page to display the error
     */

    showError(endpoint, error, errorDesc) {
        var formattedError = JSON.stringify(error, null, 4);
        if (formattedError.length < 3) {
            formattedError = error;
        }
        //document.getElementById("errorMessage").innerHTML = "An error has occurred:<br/>Endpoint: " + endpoint + "<br/>Error: " + formattedError + "<br/>" + errorDesc;
        console.error(error);
    },

    /**
     * Callback method from sign-in: if no errors, call this.callGraphApi() to show results.
     * @param {string} errorDesc - If error occur, the error message
     * @param {object} token - The token received from login
     * @param {object} error - The error 
     * @param {string} tokenType - The token type: For loginRedirect, tokenType = "id_token". For acquireTokenRedirect, tokenType:"access_token"
     */
    loginCallback(errorDesc, token, error, tokenType) {
        if (errorDesc) {
            //this.showError(msal.authority, error, errorDesc);
        } else {
            this.callGraphApi();
        }
    },

    /**
     * Call a Web API using an access token.
     * 
     * @param {any} endpoint - Web API endpoint
     * @param {any} token - Access token
     * @param {object} responseElement - HTML element used to display the results
     * @param {object} showTokenElement = HTML element used to display the RAW access token
     */
    callWebApiWithToken(endpoint, token, responseElement, showTokenElement) {
        var headers = new Headers();
        var bearer = "Bearer " + token;
        headers.append("Authorization", bearer);
        var options = {
            method: "GET",
            headers: headers
        };

        fetch(endpoint, options)
            .then(function (response) {
                var contentType = response.headers.get("content-type");
                if (response.status === 200 && contentType && contentType.indexOf("application/json") !== -1) {
                    response.json()
                        .then(function (data) {
                            // Display response in the page
                            console.log(data);
                            /*responseElement.innerHTML = JSON.stringify(data, null, 4);
                            if (showTokenElement) {
                                showTokenElement.parentElement.classList.remove("hidden");
                                showTokenElement.innerHTML = token;
                            }*/
                        })
                        .catch(function (error) {
                            this.showError(endpoint, error, null);
                        });
                } else {
                    response.json()
                        .then(function (data) {
                            // Display response as error in the page
                            this.showError(endpoint, data, null);
                        })
                        .catch(function (error) {
                            this.showError(endpoint, error, null);
                        });
                }
            })
            .catch(function (error) {
                this.showError(endpoint, error, null);
            });
    },


    /**
     * Sign-out the user
     */
    signOut() {
        this.userAgentApplication.logout();
    }
}
