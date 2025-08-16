// Autor: Brayan Israel Lira Gutiérrez. Estudiante de Ingeniería Física en la Universidad de Guanajuato.

//Definiendo variables
let amigos = [];
let lista = document.getElementById("listaAmigos");
let amigoSeleccionado = document.getElementById("resultado");


//Creando función para ingresar nombres que se deben sortear
function agregarAmigo(){

    let nombre = document.getElementById ("amigo").value;

    //Validando que la entrada sea válida con un nombre
    if (nombre == ""){
        alert ("Por favor, inserte un nombre válido.");
    } else {
        amigos.push(nombre);
        limpiarCaja();
        mostrarLista();
    }
}


//Creando función para mostrar los nombres ingresados para sortear
function mostrarLista(){
    lista.innerHTML="";

    for (let i = 0; i < amigos.length; i++){
        let li=document.createElement("li");
        li.textContent=amigos[i];
        lista.appendChild(li);
    }

}


//Creando función para sortear los nombres ingresados
function sortearAmigo(){
    //Validando que existan nombres para sortear
    if (amigos.length==0){
        alert ("Introduce los nombres a sortear.");
    } else {
        nombreElegido=amigos[Math.floor(Math.random()*amigos.length)];
        lista.innerHTML="";
        amigoSeleccionado.innerHTML=`El amigo secreto sorteado es: ${nombreElegido}`;
    }
}

//Creando función para limpiar la caja e ingresar los nombres a sortear.
function limpiarCaja() {
    document.getElementById("amigo").value="";
}