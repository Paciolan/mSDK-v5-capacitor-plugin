'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const PaciolanSdk = core.registerPlugin('PaciolanSdkCapacitor', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.PaciolanSdkCapacitorWeb()),
});

class PaciolanSdkCapacitorWeb extends core.WebPlugin {
    async show(options) {
        return options;
    }
    async navAwayFromPac() {
        return Promise.resolve({ result: "This is a mock response from the web platform." });
    }
    async appLaunched() {
        return Promise.resolve({ result: "This is a mock response from the web platform." });
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PaciolanSdkCapacitorWeb: PaciolanSdkCapacitorWeb
});

exports.PaciolanSdk = PaciolanSdk;
//# sourceMappingURL=plugin.cjs.js.map
