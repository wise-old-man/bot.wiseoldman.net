interface CommandOption {
  flag: string;
  description: string;
}

interface AlternativeOption {
  command: string;
  description: string;
}

export interface CommandConfig {
  title: string;
  baseCommand: string;
  requiresAdmin?: boolean;
  examples?: string[];
  options?: CommandOption[];
  alternatives?: AlternativeOption[];
}
