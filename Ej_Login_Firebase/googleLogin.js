import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAiIk_Xkit9gLIzXIeY7zZ7U96bw5GgVAk",
  authDomain: "mylogin-e91fe.firebaseapp.com",
  projectId: "mylogin-e91fe",
  storageBucket: "mylogin-e91fe.appspot.com",
  messagingSenderId: "203197990997",
  appId: "1:203197990997:web:5116f056acf057658f6cdc",
  measurementId: "G-2QL28TEY6P"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);


// Función para iniciar sesión con Google
function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}




// Evento click en el botón de iniciar sesión con Google
const googleButton = document.querySelector("#googlelogin");

googleButton.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signInWithGoogle();
    console.log("Inicio de sesión con Google exitoso");
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
  }
});
