// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        nombre = prompt("Por favor, ingresa un nombre:").trim();
        if (!nombre) return;
    }
    
    if (!listaAmigos.includes(nombre)) {
        listaAmigos.push(nombre);
        actualizarLista();
        input.value = "";
    }
}

function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    listaAmigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const nombreSorteado = listaAmigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `<li>Ganador: ${nombreSorteado}</li>`;
    
    // Limpiar la lista después de sortear
    listaAmigos = [];
    actualizarLista();
}


