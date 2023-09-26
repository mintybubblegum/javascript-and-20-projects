// eventos comunes con mouse
const nav = document.querySelector('.navegacion');

// click
nav.addEventListener('click', () => {
    console.log('click en nav');
})

// mouseenter o "posado" para registrar un evento
nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegación');
})

// mousedown - cuando presionamos
// click - similar, el más utilizado..
// dbclick - doble click como cuando quieres abrir un archivo
// mouseup - al soltar
// mouseout - saliendo de la navegacion