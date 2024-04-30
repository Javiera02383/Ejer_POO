import { firestore } from './firebase.js';
import { getDoc, doc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

// Función para obtener el documento y actualizar los elementos HTML correspondientes
async function actualizarDocumento(numDocumento, idImagen, idNombre, idPrecio, idDescuento) {
    const userDocRef = doc(firestore, 'Productos', 'Celulares' + numDocumento);
    const docSnap = await getDoc(userDocRef);
    
    if (docSnap.exists()) {
        const userData = docSnap.data();
        const imagen = document.getElementById(idImagen);
        const nombre = document.getElementById(idNombre);
        const precio = document.getElementById(idPrecio);
        const descuento = document.getElementById(idDescuento);
        
        imagen.src = userData.url_imagen;
        nombre.textContent = userData.Nombre;
        precio.textContent = userData.Precio;
        descuento.textContent = userData.Descuento;
    } else {
        console.log(`El documento "Celulares${numDocumento}" no existe.`);
    }
}

// Llamar a la función para cada documento
actualizarDocumento(1, "Celular1", "Nombre1", "Precio1", "Descuento1");
actualizarDocumento(2, "Celular2", "Nombre2", "Precio2", "Descuento2");
actualizarDocumento(3, "Celular3", "Nombre3", "Precio3", "Descuento3");
actualizarDocumento(4, "Celular4", "Nombre4", "Precio4", "Descuento4");
actualizarDocumento(5, "Celular5", "Nombre5", "Precio5", "Descuento5");
actualizarDocumento(6, "Celular6", "Nombre6", "Precio6", "Descuento6");
actualizarDocumento(7, "Celular7", "Nombre7", "Precio7", "Descuento7");
actualizarDocumento(8, "Celular8", "Nombre8", "Precio8", "Descuento8");