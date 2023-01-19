import * as admin from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, connectAuthEmulator, Auth, createUserWithEmailAndPassword } from "firebase/auth";
import * as firebaseAccountCredentials from "./firebase.sdk.key.json";
import * as FirebaseClientKey from "./firebase.sdk.client.key.json";
import config from './config';

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.PROD ? config.API_URL : 'localhost:8080'
})

const db = admin.firestore();
const auth = admin.auth();
const app = initializeApp(FirebaseClientKey);
let client_auth: Auth;

if (!config.PROD) {
  client_auth = getAuth();
  connectAuthEmulator(client_auth, "http://localhost:9099", { disableWarnings: true });
  process.env['FIREBASE_AUTH_EMULATOR_HOST'] = 'localhost:9099';
  process.env['FIRESTORE_EMULATOR_HOST'] = 'localhost:8080';
} else {
  client_auth = getAuth(app);
}

export { admin, db, auth, client_auth, app, signInWithEmailAndPassword, createUserWithEmailAndPassword }