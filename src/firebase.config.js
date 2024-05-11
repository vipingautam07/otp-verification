// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdsrg5zqYXxS9U3sFq1WiEo75EDBxVaBM",
  authDomain: "otp-verification-aa750.firebaseapp.com",
  projectId: "otp-verification-aa750",
  storageBucket: "otp-verification-aa750.appspot.com",
  messagingSenderId: "753525171956",
  appId: "1:753525171956:web:cb85b79ad97822c4f120a1",
  measurementId: "G-1TRHNNLVSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
