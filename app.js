// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById("listaAmigos");
let amigoSeleccionado = document.getElementById("resultado");

function agregarAmigo(){

    let nombre = document.getElementById ("amigo").value;

    if (nombre == ""){
        alert ("Por favor, inserte un nombre");
    } else {
        amigos.push(nombre);
        limpiarCaja();
        // mostrarLista();
        console.log(amigos.length);
        mostrarLista();
    }
}

function mostrarLista(){
    lista.innerHTML="";

    for (let i = 0; i < amigos.length; i++){
        let li=document.createElement("li");
        li.textContent=amigos[i];
        lista.appendChild(li);
    }

}

function sortearAmigo(){
    if (amigos.length==0){
        alert ("Introduce los nombres a sortear");
    } else {
        nombreElegido=amigos[Math.floor(Math.random()*amigos.length)];
        console.log(nombreElegido);
        lista.innerHTML="";
        amigoSeleccionado.innerHTML=`El amigo secreto sorteado es: ${nombreElegido}`;
    }
}


function limpiarCaja() {
    document.getElementById("amigo").value="";
}