// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"

const firebaseConfig = {
        apiKey: "AIzaSyAiIk_Xkit9gLIzXIeY7zZ7U96bw5GgVAk",
        authDomain: "mylogin-e91fe.firebaseapp.com",
        projectId: "mylogin-e91fe",
        storageBucket: "mylogin-e91fe.appspot.com",
        messagingSenderId: "203197990997",
        appId: "1:203197990997:web:5116f056acf057658f6cdc",
        measurementId: "G-2QL28TEY6P"
    };

    // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


