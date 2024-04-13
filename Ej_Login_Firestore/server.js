// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyDN6-nxbFQU2dlksTLQm_EuiPl7t9HIh8w",
    authDomain: "usuarios-d1cf0.firebaseapp.com",
    projectId: "usuarios-d1cf0",
    storageBucket: "usuarios-d1cf0.appspot.com",
    messagingSenderId: "7965157226",
    appId: "1:7965157226:web:0edc446aff3acf24f92713",
    measurementId: "G-HDJLPBLLPK"
  };

    // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


