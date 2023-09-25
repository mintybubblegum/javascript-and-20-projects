// forEach NO crea array nuevo, simplemente recorre
// map crea un array nuevo

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

pendientes.forEach((pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`);
})

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

const nuevoArray = carrito.map(producto => producto.nombre);

console.log(nuevoArray);