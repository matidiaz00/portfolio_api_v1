import { initializeApp as AdminInitializeApp, ServiceAccount } from 'firebase-admin/app';
import * as admin from 'firebase-admin';
import { initializeApp, FirebaseApp, setLogLevel } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, connectAuthEmulator, Auth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import * as firebaseAccountCredentials from "./firebase.sdk.key.json";
import * as FirebaseClientKey from "./firebase.sdk.client.key.json";
import { API_URL } from './config';

let client_auth: Auth;
const serviceAccount: ServiceAccount = firebaseAccountCredentials as ServiceAccount;;
let app: FirebaseApp;

const EMULATOR: boolean = true//typeof process.env.FUNCTIONS_EMULATOR === 'boolean' ? process.env.FUNCTIONS_EMULATOR : (process.env.FUNCTIONS_EMULATOR === 'true');

AdminInitializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: !EMULATOR ? API_URL : 'localhost:8080'
})

app = initializeApp(FirebaseClientKey);

const db = admin.firestore();
const auth = admin.auth();

if (EMULATOR) {
  //app = initializeApp({ projectId: FirebaseClientKey.appId });
  client_auth = getAuth();
  connectAuthEmulator(client_auth, "http://localhost:9099", { disableWarnings: true });
  //process.env['FIREBASE_AUTH_EMULATOR_HOST'] = 'localhost:9099';
  //connectFirestoreEmulator(db, 'localhost', 8080)
  //process.env['FIRESTORE_EMULATOR_HOST'] = 'localhost:8080';
  setLogLevel('silent');
} else {
  //app = initializeApp(FirebaseClientKey);
  client_auth = getAuth(app);
}

export { admin, db, auth, client_auth, app, signInWithEmailAndPassword, createUserWithEmailAndPassword }