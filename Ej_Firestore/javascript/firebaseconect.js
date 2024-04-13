import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDN6-nxbFQU2dlksTLQm_EuiPl7t9HIh8w",
  authDomain: "usuarios-d1cf0.firebaseapp.com",
  projectId: "usuarios-d1cf0",
  storageBucket: "usuarios-d1cf0.appspot.com",
  messagingSenderId: "7965157226",
  appId: "1:7965157226:web:0edc446aff3acf24f92713",
  measurementId: "G-HDJLPBLLPK"
};



// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);



document.addEventListener('DOMContentLoaded', function() {
  // Referencia al formulario
  var form = document.getElementById('miFormulario');

  // Escucha el evento de envío del formulario
  
  form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Captura los datos del formulario
    var nombre = document.getElementById('inputNombreCompleto').value;
    var usuario = document.getElementById('inputUsuario').value;
    var email = document.getElementById('inputEmail').value;
    var pais = document.getElementById('inputPaisRegion').value;
    var ciudad = document.getElementById('inputCiudad').value;
    var telefono = document.getElementById('inputTelefono').value;

    // Crea un objeto con los datos del formulario
    var datos = {
      nombre: nombre,
      usuario: usuario,
      email: email,
      pais: pais,
      ciudad: ciudad,
      telefono: telefono
    };

  // Añade un documento a la colección
  
    try {
      // Guarda los datos en Cloud Firestore
      console.log("Datos guardados correctamente:", docRef.id);
      const docRef = await addDoc(collection(firestore, 'users'), datos);
      console.log("Datos guardados correctamente:", docRef.id);

      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
 

  });
});
