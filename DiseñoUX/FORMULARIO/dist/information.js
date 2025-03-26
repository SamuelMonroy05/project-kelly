export function setupInformationButtons() {
    document.addEventListener("DOMContentLoaded", () => {
        const botones = document.querySelectorAll(".info-btn");

        if (botones.length === 0) {
            console.warn("No se encontraron botones con la clase .info-btn");
            return;
        }

        botones.forEach((boton) => {
            boton.addEventListener("click", () => {
                const targetId = boton.getAttribute("data-target");
                const infoDiv = document.getElementById(targetId);

                if (infoDiv) {
                    infoDiv.style.display = (infoDiv.style.display === "none" || infoDiv.style.display === "")
                        ? "block"
                        : "none";
                } else {
                    console.warn(`No se encontró el elemento con ID: ${targetId}`);
                }
            });
        });
    });
}

setupInformationButtons();
