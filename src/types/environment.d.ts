declare global {
  namespace NodeJS {
    interface ProcessEnv {
      hostname: string;
      access_token: string;
    }
  }
}

export {};
