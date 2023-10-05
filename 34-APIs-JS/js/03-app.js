// para mostrar si estamos online o no

window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado(){
    if(navigator.online) {
        console.log('Si estás conectada');
    } else {
        console.log('No estás conectada...');
    }
}