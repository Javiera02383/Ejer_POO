

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDN6-nxbFQU2dlksTLQm_EuiPl7t9HIh8w",
  authDomain: "usuarios-d1cf0.firebaseapp.com",
  projectId: "usuarios-d1cf0",
  storageBucket: "usuarios-d1cf0.appspot.com",
  messagingSenderId: "7965157226",
  appId: "1:7965157226:web:0edc446aff3acf24f92713",
  measurementId: "G-HDJLPBLLPK"
};

// Initialize Firebase
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

console.log("Conexión a Firebase establecida correctamente.");


  // Referencia al formulario
  var form = document.getElementById('miFormulario');

  // Escucha el evento de envío del formulario
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Captura los datos del formulario
    var nombreCompleto = document.getElementById('inputNombreCompleto').value;
    var usuario = document.getElementById('inputUsuario').value;
    var email = document.getElementById('inputEmail').value;
    var paisRegion = document.getElementById('inputPaisRegion').value;
    var ciudad = document.getElementById('inputCiudad').value;
    var telefono = document.getElementById('inputTelefono').value;

    // Crea un objeto con los datos del formulario
    var datos = {
      nombreCompleto: nombreCompleto,
      usuario: usuario,
      email: email,
      paisRegion: paisRegion,
      ciudad: ciudad,
      telefono: telefono
    };

    // Guarda los datos en Cloud Firestore
    firebase.firestore().collection('user').add(datos)
    .then(function(docRef) {
      console.log("Datos guardados correctamente:", docRef.id);
      // Aquí puedes realizar acciones adicionales después de guardar los datos
    })
    .catch(function(error) {
      console.error("Error al guardar los datos: ", error);
    });
  });

