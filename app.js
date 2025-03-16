
    let amigos = [];

    function agregarAmigos(){
        let nombreInput= document.getElementById("amigo");
        let nombreAmigo = nombreInput.value;

        if (nombreAmigo === "" ){ 
            alert ("Por favor, ingresa un nombre");
            return;
        }

amigos.push(nombreAmigo);
nombreInput.value= " ";
nombreInput.focus();
lista ();

    }
    

function lista(){ 
    let listaAmigos = document.getElementById ("listaAmigos");
    listaAmigos.innerHTML = ""; 

    for (let i = 0; i<amigos.length; i++){
        let dato = document.createElement ("li");
        dato.textContent = amigos[i];
        listaAmigos.appendChild(dato);
    }
}

function sortearAmigos(){
    if(amigos.length === 0 ){ 
    alert ("No hay datos para sortear");
    return;
}

let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
let resultado = document.getElementById("resultado");
resultado.innerHTML = `El amigo sorteado es : ${amigoSorteado}`;

let limpiarLista = document.getElementById ("listaAmigos");
limpiarLista.innerHTML = " ";
}


