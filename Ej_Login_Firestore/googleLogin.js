import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
import { auth } from "./server.js";

const googleButton = document.querySelector("#googlelogin");
googleButton.addEventListener("click", async (e) => {
        e.preventDefault();

        const provider = new GoogleAuthProvider();
        try {
            const credenciales = await signInWithPopup(auth, provider)
            console.log(credenciales);
            console.log("google sign in");}
        catch{
            console.log("error");
        }
});