/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.
*/

//generar una lista vacia para almacenar los amigos ingresados
let amigos = [];

//Implementa una función para agregar amigos

//funcion para capturar texto usuario
function agregarAmigo() {
    let agregaAmigo = document.getElementById('amigo').value; //obtiene el texto ingresado por usuario con id 'amigo'
    //si el campo no esta vacio, agregar al final de la lista
    if(agregaAmigo != '') {
        amigos.push(agregaAmigo);        
    //de lo contrario, emitir una alerta para ingresar un nombre
    } else {
        alert('Por favor, inserte un nombre');
    }
    //funcion para limpiar el campo de entrada una vez ingresado el nombre a la lista
    limpiarCaja();
    //reornar la lista
    return console.log(amigos);
}
// funcion limpiar campo de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}









