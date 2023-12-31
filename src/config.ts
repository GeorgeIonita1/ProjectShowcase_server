const admin = require('firebase-admin');

const { privateKey } = JSON.parse(process.env.private_key);

const firebaseConfig = {
  "project_id": process.env.FIREBASE_PROJECT_ID,
  // "private_key": process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\n/gm, "\n") : undefined,
  privateKey,

  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
};

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

export const db = admin.firestore();
export const bucket = admin.storage().bucket();
