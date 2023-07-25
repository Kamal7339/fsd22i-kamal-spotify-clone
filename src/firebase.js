// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiCqTnLzICmGsMc6-C7_D01XnjMVQKfBs",
  authDomain: "spotify-clone-8b451.firebaseapp.com",
  projectId: "spotify-clone-8b451",
  storageBucket: "spotify-clone-8b451.appspot.com",
  messagingSenderId: "614976873818",
  appId: "1:614976873818:web:748b2d78c356681a01bf63",
  measurementId: "G-DC58VN6CFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);