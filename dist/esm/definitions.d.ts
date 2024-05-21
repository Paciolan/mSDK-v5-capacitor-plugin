export interface PaciolanSdkCapacitorPlugin {
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
