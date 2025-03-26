export function validarFormulario() {
    const form = document.getElementById("fm_contact");
    const name = document.getElementById("name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("mail");
    const phone = document.getElementById("telphone");
    const message = document.getElementById("msn");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,}$/;
    const phoneRegex = /^\d{7,12}$/;

    let isValid = true;


    document.querySelectorAll(".error-message").forEach(error => error.remove());
    document.querySelectorAll("input, textarea").forEach(input => {
        input.style.border = "1px solid #ccc"; 
    });

    function showError(input, message) {
        input.style.border = "2px solid red"; 
        
        let errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        errorSpan.textContent = message;
        errorSpan.style.color = "red";
        errorSpan.style.fontSize = "20px";
        errorSpan.style.display = "block";
        errorSpan.style.marginTop = "5px"; 
        
     
        input.insertAdjacentElement("afterend", errorSpan);
    }
    
    if (!nameRegex.test(name.value.trim())) {
        showError(name, "Nombre inválido (solo letras, mínimo 3 caracteres)");
        isValid = false;
    }

    if (!nameRegex.test(lastName.value.trim())) {
        showError(lastName, "Apellido inválido (solo letras, mínimo 3 caracteres)");
        isValid = false;
    }

    if (!emailRegex.test(email.value.trim())) {
        showError(email, "Correo electrónico inválido.");
        isValid = false;
    }

    if (!phoneRegex.test(phone.value.trim())) {
        showError(phone, "Teléfono inválido (7-12 números).");
        isValid = false;
    }

    if (message.value.trim().length < 5) {
        showError(message, "El mensaje debe contener al menos 5 caracteres.");
        isValid = false;
    }

    return isValid;
}
