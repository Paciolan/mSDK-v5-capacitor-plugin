import { WebPlugin } from '@capacitor/core';

import type { PaciolanSdkCapacitorPlugin } from './definitions';

export class PaciolanSdkCapacitorWeb
  extends WebPlugin
  implements PaciolanSdkCapacitorPlugin
{
  async show(options: {
    configString: string;
  }): Promise<{ configString: string }> {
    return options;
  }
  async navAwayFromPac(): Promise<{ result: string }> {
    return Promise.resolve({ result: "This is a mock response from the web platform." });
  }
  async appLaunched(): Promise<{ result: string }> {
    return Promise.resolve({ result: "This is a mock response from the web platform." });
  }
}
