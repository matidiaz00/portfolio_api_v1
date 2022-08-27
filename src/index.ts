import { https } from "firebase-functions";

exports.helloWorld = https.onRequest((request, response) => {
   response.send("Hello from Firebase!");
});