import * as admin from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, connectAuthEmulator } from "firebase/auth";
import * as firebaseAccountCredentials from "./firebase.sdk.key.json";
import * as FirebaseClientKey from "./firebase.sdk.client.key.json";
import { environment } from "./environment/environment";

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: environment.url
})

const db = admin.firestore();
const auth = admin.auth();
const app = initializeApp(FirebaseClientKey);
const client_auth = getAuth(app);

//if (!environment.production) connectAuthEmulator(client_auth, "http://localhost:9099");

export { admin, db, auth, client_auth, app, signInWithEmailAndPassword }