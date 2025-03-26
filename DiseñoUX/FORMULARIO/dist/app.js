import { student, modalAlerta } from "./paint.js";
import { validarFormulario } from "./validate.js";
import { setupInformationButtons } from "./information.js";
import { setupServiciosButtons} from "./servicios.js";


const btnEnviar = document.querySelector("#btn-enviar");
btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (!validarFormulario()) {
        console.log("Formulario con errores, no se enviará.");
        return;
    }
    
    const datosContainer = document.querySelector("#datos-container");

    if (datosContainer) {
        datosContainer.innerHTML = "";
    }

    const nombre = document.querySelector("#name").value.trim();
    const apellido = document.querySelector("#last-name").value.trim();
    const correo = document.querySelector("#mail").value.trim();
    const telefono = document.querySelector("#telphone").value.trim();
    const mensaje = document.querySelector("#msn").value.trim();

    modalAlerta("Es una prueba", "");
    student(nombre, apellido, correo, telefono, mensaje);
});

setupInformationButtons();
setupServiciosButtons();

