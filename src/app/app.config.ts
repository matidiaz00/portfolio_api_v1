import * as FirebaseKey from './firebase.sdk.key.json';

export const environments = {
    envFilePath: `./src/environments/.${process.env.NODE_ENV}.env`,
};

export const firebaseKey: any  = { googleApplicationCredential: FirebaseKey }