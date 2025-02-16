// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Array de amigos

// Función para agregar un amigo
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingrese un nombre.");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  mostrarLista();
}

// Función para mostrar la lista de amigos
function mostrarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];
  alert(`El amigo secreto es: ${amigoSecreto}`);
}

// Botones
document.getElementById('button-draw').addEventListener('click', agregarAmigo);
document.getElementById('button-add').addEventListener('click', sortearAmigo);