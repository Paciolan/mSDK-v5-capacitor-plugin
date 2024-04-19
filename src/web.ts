import { WebPlugin } from '@capacitor/core';

import type { PaciolanSdkCapacitorPlugin } from './definitions';

export class PaciolanSdkCapacitorWeb
  extends WebPlugin
  implements PaciolanSdkCapacitorPlugin
{
  async show(options: {
    initialConfigs: string;
  }): Promise<{ initialConfigs: string }> {
    return options;
  }
  async navAwayFromPac(): Promise<{ result: string }> {
    return Promise.resolve({ result: "This is a mock response from the web platform." });
  }
}
