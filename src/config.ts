import { defineString, defineBoolean } from 'firebase-functions/params';

const PROD = defineBoolean('PROD');
const API_URL = defineString('API_URL');
const LINKEDIN_ACCESS_TOKEN = defineString('LINKEDIN_ACCESS_TOKEN');
const NUBELA_ACCESS_TOKEN = defineString('NUBELA_ACCESS_TOKEN');
const LINKEDIN_USER = defineString('LINKEDIN_USER');
const ALOWED_ORIGINS = defineString('ALOWED_ORIGINS');
const USER = defineString('USER');

interface Config {
    PROD: boolean;
    API_URL: string;
    LINKEDIN_ACCESS_TOKEN: string;
    NUBELA_ACCESS_TOKEN: string;
    LINKEDIN_USER: string;
    ALOWED_ORIGINS: string[];
    USER: { email: string, password: string };
}

const config: any = {
  PROD: PROD,
  API_URL: API_URL,
  LINKEDIN_ACCESS_TOKEN: LINKEDIN_ACCESS_TOKEN,
  NUBELA_ACCESS_TOKEN: NUBELA_ACCESS_TOKEN,
  LINKEDIN_USER: LINKEDIN_USER,
  ALOWED_ORIGINS: ALOWED_ORIGINS,
  USER: USER
}

export default config;