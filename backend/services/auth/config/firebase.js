// import { cert, initializeApp } from "firebase-admin";
// import serviceAccount from "../serviceAccountKey.json"  with {type:"json"};

// export const app=initializeApp({
//   credential: cert(serviceAccount)
// });

import { cert, initializeApp } from "firebase-admin";

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT
);

export const app = initializeApp({
  credential: cert(serviceAccount)
});