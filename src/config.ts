import { BooleanParam, StringParam } from 'firebase-functions/lib/params/types';
import { defineString, defineBoolean } from 'firebase-functions/params';

export const PROD = defineBoolean('PROD');
export const API_URL = defineString('API_URL');
export const LINKEDIN_ACCESS_TOKEN = defineString('LINKEDIN_ACCESS_TOKEN');
export const NUBELA_ACCESS_TOKEN = defineString('NUBELA_ACCESS_TOKEN');
export const LINKEDIN_USER = defineString('LINKEDIN_USER');
export const ALOWED_ORIGINS = defineString('ALOWED_ORIGINS');
export const USER = defineString('USER');

interface Config {
    PROD: BooleanParam;
    API_URL: StringParam;
    LINKEDIN_ACCESS_TOKEN: StringParam;
    NUBELA_ACCESS_TOKEN: StringParam;
    LINKEDIN_USER: StringParam;
    ALOWED_ORIGINS: StringParam; //StringParam[]
    USER: StringParam; //{ email: string, password: string }
}

export const config: any = {
  PROD: PROD,
  API_URL: API_URL,
  LINKEDIN_ACCESS_TOKEN: LINKEDIN_ACCESS_TOKEN,
  NUBELA_ACCESS_TOKEN: NUBELA_ACCESS_TOKEN,
  LINKEDIN_USER: LINKEDIN_USER,
  ALOWED_ORIGINS: ALOWED_ORIGINS,
  USER: USER
}