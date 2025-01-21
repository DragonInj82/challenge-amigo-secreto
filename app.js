/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.
*/

//Implementa una función para agregar amigos
//generar una lista vacia para almacenar los amigos ingresados
let amigos = [];

//funcion para capturar texto usuario
 function agregarAmigo() {
     let agregaAmigo = document.getElementById('amigo').value; //obtiene el texto ingresado por usuario con id 'amigo'
     agregarLista(agregaAmigo);
     //si el campo no esta vacio, agregar al final de la lista
     if(agregaAmigo == '') {
         alert('Por favor, inserte un nombre');    
     //de lo contrario, emitir una alerta para ingresar un nombre
     } else {
         amigos.push(agregaAmigo);         
     }
     //funcion para limpiar el campo de entrada una vez ingresado el nombre a la lista
     limpiarCaja();
           
 }
 // funcion limpiar campo de texto
 function limpiarCaja() {
     document.querySelector('#amigo').value = '';
 }

//Implementa una función para actualizar la lista de amigos 
function agregarLista(texto) {
    let elementoHTML = document.getElementById("listaAmigos");
        elementoHTML.innerHTML += `<li> ${texto} </li>`;
}












