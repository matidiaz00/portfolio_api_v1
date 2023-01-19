// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
    PROD: boolean | undefined;
    API_URL: string | undefined;
    LINKEDIN_ACCESS_TOKEN: string | undefined;
    NUBELA_ACCESS_TOKEN: string | undefined;
    LINKEDIN_USER: string | undefined;
    ALOWED_ORIGINS: string[] | undefined;
    USER: { email: string, password: string } | undefined;
}

interface Config {
    PROD: boolean;
    API_URL: string;
    LINKEDIN_ACCESS_TOKEN: string;
    NUBELA_ACCESS_TOKEN: string;
    LINKEDIN_USER: string;
    ALOWED_ORIGINS: string[];
    USER: { email: string, password: string };
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
        PROD: process.env.PROD === "true",
        API_URL: process.env.API_URL,
        LINKEDIN_ACCESS_TOKEN: process.env.LINKEDIN_ACCESS_TOKEN,
        NUBELA_ACCESS_TOKEN: process.env.NUBELA_ACCESS_TOKEN,
        LINKEDIN_USER: process.env.LINKEDIN_USER,
        ALOWED_ORIGINS: process.env.ALOWED_ORIGINS ? process.env.ALOWED_ORIGINS.split(",") : undefined,
        USER: process.env.USER ? JSON.parse(process.env.USER) : undefined
    };
};

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env file`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;