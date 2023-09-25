// querySelector --- si no especificamos retorna el primer elemento

const card = document.querySelector('.card');
console.log(card);

// selectores específicos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// seleccionar el formulario por id
const formulario = document.querySelector('.contenido-hero #formulario');
console.log(formulario);

// seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);

