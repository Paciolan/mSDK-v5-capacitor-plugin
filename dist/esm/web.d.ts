import { WebPlugin } from '@capacitor/core';
import type { PaciolanSdkCapacitorPlugin } from './definitions';
export declare class PaciolanSdkCapacitorWeb extends WebPlugin implements PaciolanSdkCapacitorPlugin {
    show(options: {
        configString: string;
    }): Promise<{
        configString: string;
    }>;
    navAwayFromPac(): Promise<{
        result: string;
    }>;
    appLaunched(): Promise<{
        result: string;
    }>;
}
