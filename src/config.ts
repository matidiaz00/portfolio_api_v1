import { StringParam } from 'firebase-functions/lib/params/types';
import { defineString } from 'firebase-functions/params';

export const API_URL: any = defineString('API_URL');
export const LINKEDIN_ACCESS_TOKEN: any = defineString('LINKEDIN_ACCESS_TOKEN');
export const NUBELA_ACCESS_TOKEN: any = defineString('NUBELA_ACCESS_TOKEN');
export const LINKEDIN_USER: any = defineString('LINKEDIN_USER');
export const ALOWED_ORIGINS: any = defineString('ALOWED_ORIGINS');
export const USER_EMAIL: any = defineString('USER_EMAIL');
export const USER_PASSWORD: any = defineString('USER_PASSWORD');

interface Config {
    API_URL: StringParam;
    LINKEDIN_ACCESS_TOKEN: StringParam;
    NUBELA_ACCESS_TOKEN: StringParam;
    LINKEDIN_USER: StringParam;
    ALOWED_ORIGINS: StringParam; //StringParam[]
    USER: StringParam; //{ email: string, password: string }
}

export const config: any = {
  API_URL: API_URL,
  LINKEDIN_ACCESS_TOKEN: LINKEDIN_ACCESS_TOKEN,
  NUBELA_ACCESS_TOKEN: NUBELA_ACCESS_TOKEN,
  LINKEDIN_USER: LINKEDIN_USER,
  ALOWED_ORIGINS: ALOWED_ORIGINS
}