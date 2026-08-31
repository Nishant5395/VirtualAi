// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider} from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//    authDomain: "virtualai-be2b3.firebaseapp.com",
//   projectId: "virtualai-be2b3",
//   storageBucket: "virtualai-be2b3.firebasestorage.app",
//   messagingSenderId: "150703266079",
//   appId: "1:150703266079:web:2fbcae4b73d68eb402f82a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)
// export const auth=getAuth(app)
// export const googleProvider=new GoogleAuthProvider()

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "virtualai-be2b3.firebaseapp.com",
  projectId: "virtualai-be2b3",
  storageBucket: "virtualai-be2b3.firebasestorage.app",
  messagingSenderId: "150703266079",
  appId: "1:150703266079:web:2fbcae4b73d68eb402f82a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();