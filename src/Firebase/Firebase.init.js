// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFzNTbZFK_QVFueoTJYrQ_eZG7G2N7dpQ",
  authDomain: "rec-react.firebaseapp.com",
  projectId: "rec-react",
  storageBucket: "rec-react.firebasestorage.app",
  messagingSenderId: "553401551948",
  appId: "1:553401551948:web:f562b59001c9bfcaa6b8e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;