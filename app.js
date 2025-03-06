// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];//para almacenar amigos

function agregarAmigo() {
   let input = document.getElementById("amigo"); //para obtener el elemento de entrada 
   //uso input como nombre de variable intermedia para hacer referencia al elemento de entrada 
   let nombreAmigo = input.value.trim();
   //let input = document.getElementById("amigo").value.trim(); era la otra opción
   if (nombreAmigo === "") {
    alert("Por favor, ingrese un nombre válido.");
    return; // Evita continuar si el campo está vacío
  }
  amigos.push(nombreAmigo); // Agregar el nombre a la lista amigos[] (Array,arreglo)
  actualizaListaA(); // Actualizar la lista en la página
  input.value = ""; // Limpiar el campo de entrada

}

function actualizaListaA() {
    let lista = document.getElementById("listaAmigos");// Obtenemos el elemento de la lista de amigos del DOM usando su ID
    lista.innerHTML = ""; // Para limpiar la lista antes de actualizar
    
    //// Usamos un bucle for para recorrer el array 'amigos'
    // Creamos un elemento 'li' con el nombre del amigo en cada iteración
    for (let i = 0; i < amigos.length; i++) {   
        const li = document.createElement("li"); // Creamos un nuevo elemento de lista
        li.textContent = amigos[i];// Asignamos el nombre del amigo al contenido del elemento 'li'
        lista.appendChild(li);//Agregamos el elemento 'li' a la lista en el DOM
      }
    }


function sortearAmigo() {
      if (amigos.length === 0) { 
        alert("No hay amigos en la lista para sortear."); 
        return; 
        //evita continuar si no hay amigos en la lista
        // Verificamos si el array 'amigos' está vacío
    } 
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);// Generamos un índice aleatorio utilizando math.random y con math.floor redondeamos hacia abajo al entero más cercano
        let amigoSorteado = amigos[indiceAleatorio];// Seleccionamos un amigo al azar
        document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;  //aqui mostramos el amigo sorteado


 }

  







