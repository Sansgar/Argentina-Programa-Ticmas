var modoNocturno = false;
document.getElementById('modo').onclick = function () {
    var boton = document.getElementById("modo");
    if (modoNocturno == false) {
        boton.innerText = "Modo Claro";
        boton.classList.remove("btn-dark")
        boton.classList.add("btn-light")
        modoNocturno = true;
        document.getElementById("headerC").id = "headerN";
        document.getElementById("footerC").id = "footerN";
        document.getElementById("grilla").style.backgroundColor = "#A9A9A9";
        document.getElementById("contenedor1C").id = "contenedor1N";
        document.getElementById("contenedor2C").id = "contenedor2N";     
    } else {
        boton.innerText = "Modo Oscuro";
        boton.classList.remove("btn-light");
        boton.classList.add("btn-dark");
        modoNocturno = false;
        document.getElementById("headerN").id = "headerC";
        document.getElementById("footerN").id = "footerC";
        document.getElementById("grilla").style.backgroundColor = "white";
        document.getElementById("contenedor1N").id = "contenedor1C";
        document.getElementById("contenedor2N").id = "contenedor2C";
        
    };
}