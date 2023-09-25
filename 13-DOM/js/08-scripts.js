// para acceder a los nodos traversing the DOM

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); // los espacios en blanco son considerados elementos
console.log(navegacion.children); // se excluyen los espacios en blanco

// cambiar titulo
const card = document.querySelector('.card');
card.children[1].children[1].textContent = 'Nuevo heading desde DOM traversing'
console.log(card.children[1].children[1].textContent);

// cambiar imagen
card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[0]);

// traversing de hijo a padre