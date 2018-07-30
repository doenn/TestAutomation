var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const credentials = {
    client: {
        id: process.env.APP_ID,
        secret: process.env.APP_PASSWORD,
    },
    auth: {
        tokenHost: 'https://login.microsoftonline.com',
        authorizePath: 'common/oauth2/v2.0/authorize',
        tokenPath: 'common/oauth2/v2.0/token'
    }
};
const oauth2 = require('simple-oauth2').create(credentials);
function getAuthUrl() {
    const returnVal = oauth2.authorizationCode.authorizeURL({
        redirect_uri: process.env.REDIRECT_URI,
        scope: process.env.APP_SCOPES
    });
    console.log(`Generated auth url: ${returnVal}`);
    return returnVal;
}
function getTokenFromCode(auth_code) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield oauth2.authorizationCode.getToken({
            code: auth_code,
            redirect_uri: process.env.REDIRECT_URI,
            scope: process.env.APP_SCOPES
        });
        const token = oauth2.accessToken.create(result);
        console.log('Token created: ', token.token);
        return token.token.access_token;
    });
}
exports.getAuthUrl = getAuthUrl;
exports.getTokenFromCode = getTokenFromCode;
