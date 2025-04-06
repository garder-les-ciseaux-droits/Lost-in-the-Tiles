// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1yRNBfDNJRiBLTlmUvl-pxNrXQrhlCoA",
  authDomain: "seraphium-5fd68.firebaseapp.com",
  projectId: "seraphium-5fd68",
  storageBucket: "seraphium-5fd68.appspot.com",
  messagingSenderId: "123829673679",
  appId: "1:123829673679:web:7d1082bf98919a3a1de1ba",
  measurementId: "G-F0QZBBJ20N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, signInWithPopup, db };