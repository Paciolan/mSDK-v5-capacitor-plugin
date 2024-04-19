export interface PaciolanSdkCapacitorPlugin {
  show(options: {
    initialConfigs: string;
  }): Promise<{ initialConfigs: string }>;
  navAwayFromPac(): Promise<{ result: string }>;
}
