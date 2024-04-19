import { WebPlugin } from '@capacitor/core';
import type { PaciolanSdkCapacitorPlugin } from './definitions';
export declare class PaciolanSdkCapacitorWeb extends WebPlugin implements PaciolanSdkCapacitorPlugin {
    show(options: {
        initialConfigs: string;
    }): Promise<{
        initialConfigs: string;
    }>;
    navAwayFromPac(): Promise<{
        result: string;
    }>;
}
