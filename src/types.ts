interface CommandOption {
  flag: string;
  description: string;
}

export interface CommandConfig {
  title: string;
  baseCommand: string;
  examples: string[];
  requiresAdmin?: boolean;
  options?: CommandOption[];
}
