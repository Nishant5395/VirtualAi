// // import { cert, initializeApp } from "firebase-admin";
// // import serviceAccount from "../serviceAccountKey.json"  with {type:"json"};

// // export const app=initializeApp({
// //   credential: cert(serviceAccount)
// // });

// import { cert, initializeApp } from "firebase-admin";

// const serviceAccount = JSON.parse(
//   process.env.FIREBASE_SERVICE_ACCOUNT
// );

// export const app = initializeApp({
//   credential: cert(serviceAccount)
// });

import { cert, initializeApp } from "firebase-admin/app";
import { readFileSync } from "fs";

const serviceAccount = JSON.parse(
  readFileSync(new URL("../serviceAccountKey.json", import.meta.url), "utf8")
);

export const app = initializeApp({
  credential: cert(serviceAccount),
});