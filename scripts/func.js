onload = noEstilos()

function saludo() {
    alert("JavaScript")
}

function iterador(length) {
    for(i=0; i<length; i++){
        console.log("index: " + i)
    }
}

function fondoParrafos() {
    parrafos = document.getElementsByTagName("p");
    parrafos[0].innerHTML = "REEMPLAZADO";
    parrafos[1].style = "color:red";

    lista = document.getElementsByClassName("verde")
    lista[0].style = "text-align:center; color:blue";

    document.getElementById("raro").innerHTML = "CONTENIDO ACTUAL";
}

function noEstilos(){
    nest = document.styleSheets.length;

    for(i=0; i<nest; i++){
        document.styleSheets[i].disabled = true;
    }
}

function cambiarEstilo(n) {
    noEstilos();

    document.styleSheets[n].disabled = false;
}