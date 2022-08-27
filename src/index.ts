import { https, logger } from "firebase-functions";

exports.helloWorld = https.onRequest((request, response) => {
   logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
});