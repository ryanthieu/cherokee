// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNtYo2qiBHUT2e44qIyMoXUL0766_LPSY",
  authDomain: "alexussellcherokee.firebaseapp.com",
  projectId: "alexussellcherokee",
  storageBucket: "alexussellcherokee.appspot.com",
  messagingSenderId: "347278203664",
  appId: "1:347278203664:web:36be2ca8b3688e16ede395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);