import { WebPlugin } from '@capacitor/core';
export class PaciolanSdkCapacitorWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map