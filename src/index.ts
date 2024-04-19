import { registerPlugin } from '@capacitor/core';

import type { PaciolanSdkCapacitorPlugin } from './definitions';

const PaciolanSdk = registerPlugin<PaciolanSdkCapacitorPlugin>(
  'PaciolanSdkCapacitor',
  {
    web: () => import('./web').then(m => new m.PaciolanSdkCapacitorWeb()),
  },
);

export * from './definitions';
export { PaciolanSdk };
