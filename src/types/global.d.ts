declare namespace NodeJS {
  export interface ProcessEnv {
    BOT_TOKEN?: string;
    PREFIX?: string;
    ADMIN_ID?: string;
    DRAKE1: string;
    DRAKE2: string;
    DKMods: string;
  }
}

interface TCommand {
  name: string;
  aliases: string;
  description: string;
  execute: Function;
}
