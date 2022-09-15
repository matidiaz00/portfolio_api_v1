import * as admin from 'firebase-admin';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as firebaseAccountCredentials from './firebase.sdk.key.json';
import * as FirebaseClientKey from './firebase.sdk.client.key.json';
import { environment } from './environment/environment';

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: environment.production ? 'https://matidiaz000.firebaseio.com' : 'http://localhost:5001'
})

const db = admin.firestore();
const auth = admin.auth();
const app = initializeApp(FirebaseClientKey);
const client_auth = getAuth(app);

export { admin, db, auth, client_auth, app, signInWithEmailAndPassword }