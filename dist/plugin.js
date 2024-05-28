var capacitorPaciolanSdkCapacitor = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
