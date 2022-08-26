import { initializeApp } from 'firebase/app';
import * as FirebaseClientKey from '../../firebase.sdk.client.key.json'
import { getAuth } from 'firebase/auth';

export const app = initializeApp(FirebaseClientKey);
export const client_auth = getAuth(app);