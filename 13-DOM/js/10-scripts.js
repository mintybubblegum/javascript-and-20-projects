// creación HTML desde JS
const enlace = document.createElement('a');

// agregando texto
enlace.textContent = 'Nuevo Enlace';

// agregando href
enlace.href = '/nuevo-enlace';
console.log(enlace);

enlace.target = '_blank';

enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase');

enlace.onclick = miFuncion;



//añadir nuevo enlace AL FINAL de barra de navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);

//añadir nuevo enlace LUGAR CONCRETO de barra de navegacion
const navegacion2 = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[1]);


function miFuncion() {
    alert('Diste click')
}

// crear CARD
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '60€ por persona';
parrafo3.classList.add('precio');


//Crear div con la clase info
const info =  document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// Crear la imagen de nuestro CARD
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//crear CARD
const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen
card.appendChild(imagen);

// asignar info
card.appendChild(info);

//insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);