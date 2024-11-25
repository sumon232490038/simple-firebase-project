// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4L50GCadFVDwaJXZxDPRe0z9D-JNKKHU",
  authDomain: "simple-firebase-project-d5126.firebaseapp.com",
  projectId: "simple-firebase-project-d5126",
  storageBucket: "simple-firebase-project-d5126.firebasestorage.app",
  messagingSenderId: "373022136319",
  appId: "1:373022136319:web:0cc785b6bb1b1d856f39ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
