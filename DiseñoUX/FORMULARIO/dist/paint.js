let cardsEstudiantes = document.querySelector('#cardsEstudiantes');

const agregarEstudiante = (name, lastName, mail, telefono, msn)=>{

    let persona = {
        nombre: name,
        apellido: lastName,
        correo: mail,
        telefono: telefono,
        mensaje: msn,

    };
    let text = `¿Esta seguro(a) ${persona.nombre} de enviar la peticion?`
    modalAlerta(text,"aceptar", persona);
}

function modalAlerta(cadena, tipo, persona) {
    const alerta = document.createElement("div");
    const texto = document.createElement("p");
    alerta.setAttribute("id", "alerta");
    alerta.setAttribute("class", "alerta");
    texto.setAttribute("class", "textAlerta");
    texto.innerHTML = `<strong>${cadena}</strong>`;

    const btnCerrar = document.createElement("input");
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlerta");
    btnCerrar.setAttribute("value", "Cerrar");

    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);

    if (tipo === "aceptar") {
        const btnEnviar = document.createElement("input");
        btnEnviar.setAttribute("type", "button"); 
        btnEnviar.setAttribute("class", "btnAlerta");
        btnEnviar.setAttribute("value", "Enviar");
        alerta.appendChild(btnEnviar);
        document.body.appendChild(alerta);

        btnEnviar.onclick = function () {
            pintarCard(persona, "estudiante");
            document.body.removeChild(alerta);
        };
    } else {
        document.body.appendChild(alerta);
    }

    btnCerrar.onclick = function () {
        document.getElementById("alerta").remove();
    };
}

function pintarCard(datos, tipo){
    tipo = tipo.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const template = document.querySelector('#templateEstudiante').content;
    if(tipo === "ESTUDIANTE"){
        let cloneTemp = template.cloneNode(true);
        cloneTemp.querySelector(".title-card").innerHTML = "Datos del PDR <hr>";
        cloneTemp.querySelector(".data-card").innerHTML = `NOMBRE Y APELLIDO:  ${datos.nombre.toUpperCase()} ${datos.apellido.toUpperCase()}`;
        cloneTemp.querySelector(".text-mail").innerHTML = `CORREO ELECTRONICO:  ${datos.correo}`;
        cloneTemp.querySelector(".text-telefono").innerHTML = `TELEFONO: ${datos.telefono}`;
        cloneTemp.querySelector(".text-msn").innerHTML = `MENSAJE:  ${datos.mensaje}`;
        fragmento.appendChild(cloneTemp);


}
cardsEstudiantes.appendChild(fragmento);
}
export{agregarEstudiante as student, modalAlerta}