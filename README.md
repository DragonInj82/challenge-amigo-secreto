<h1 align="center"> Challenge Amigo Secreto </h1>
<p align="justify">Aplicación web que permite a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".
El usuario deberá agregar nombres mediante un campo de texto y un botón "Añadir". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.</p>

<div align="center"><img src="https://github.com/user-attachments/assets/37057d3a-ebb4-42f6-bbfb-e5d08dc352da" widht = "200" height="200"/></div>

<p align="center">
   <img src="https://img.shields.io/badge/STATUS-EN%20OPERATIVO-green">
   </p>

<h2> Despliegue 📦 </h2>
<p align="justify">La aplicación se despliega mediante navegador web, mediante la siguiente dirección:</p>

<h2> Funcionalidades ⚙️ </h2>
<p align="justify"> 
<li>Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".</li>
<li>Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.</li>
<li>Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.</li>
<li>Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.</li>
</p>

<h2> Lógica de Programación 🔧 </h2>
<p align="justify"> 
<li>Crea un array vacio el cual almacenará los nombres a sortear.</li>
<li>Se crea una primera función para agregar los amigos, la cual captura el elmento del campo de texto: si dicho elemento es vacío retorna una alerta al usuario.</li>
<li>La variable creada se agrega al array que almacena los amigos a participar en el sorteo.</li>
<li>Se crea una funcion que limpia el campo de texto una vez almacenado el valor correspondiente.</li>
<li>Se crea una segunda función que despliega en modo lista dentro de la etiqueta HTML los amigos ingresados. La funcion incluye una iteracion for para recorrer el array y agregar con innerHTML cada elemento. Se debe limpiar la lista para evitar nombres duplicados</li>
<li>Se crea una ultima funcion que genera un indice aleatorio entre 0 y la cantidad de elementos del array (array.length). En base a esta posicion, se retorna el elmento del array y se muestra en la etiqueta HTML correspondiente con template strings. Como funcionalidad adicional, se quita el nombre sorteado del array de manera que el usuario puede volver a sortear un amigo del listado restante.</li>
</p>


