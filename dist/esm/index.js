import { registerPlugin } from '@capacitor/core';
const PaciolanSdk = registerPlugin('PaciolanSdkCapacitor', {
    web: () => import('./web').then(m => new m.PaciolanSdkCapacitorWeb()),
});
export * from './definitions';
export { PaciolanSdk };
//# sourceMappingURL=index.js.map