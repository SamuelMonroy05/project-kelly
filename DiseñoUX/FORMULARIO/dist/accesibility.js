/**
 * 
 * 
 * 
 */

(() =>{
    const btnAumentar = document.getElementById('addFont');
    const btnDisminuir = document.getElementById('susFont');
    const btnContraste = document.getElementById('contrast');

    let tamFuente = 16;
    let contrasteActivo = false;

    if(btnAumentar && btnDisminuir && btnContraste){
        btnAumentar.addEventListener("click", ()=>{
            if(tamFuente <= 24){
                tamFuente+=1;
            }
            document.body.style.fontSize = `${tamFuente}px`;
            document.querySelectorAll("label").forEach(label=>{
                let fontSize=parseFloat(window.getComputedStyle(label).fontSize);
                if(fontSize <= 24){
                    label.style.fontSize = (fontSize + 1) + "px";

                }
            }

            )
        });
        btnDisminuir.addEventListener('click', ()=>{
            if (tamFuente >= 12) { // Evita que la fuente sea demasiado pequeña
                tamFuente -= 1;
                document.body.style.fontSize = `${tamFuente}px`;
                document.querySelectorAll("label").forEach(label => {
                    let fontSize = parseFloat(window.getComputedStyle(label).fontSize);
                    if (fontSize >=12){
                    label.style.fontSize = (fontSize - 1) + "px";
                    }
                });
            }



        })
    }
    btnContraste.addEventListener("click", ()=>{
        contrasteActivo = !contrasteActivo;
        document.body.classList.toggle("modo-contraste",contrasteActivo);

    })
    
})();

