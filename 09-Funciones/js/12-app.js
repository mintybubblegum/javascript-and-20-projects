// ForEach y Map con arrow functions...

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]


const nuevoArray = carrito.map( producto => `Articulo: ${producto.nombre} Precio: ${producto.precio} `)

carrito.forEach( producto =>  console.log( `Articulo: ${producto.nombre} Precio: ${producto.precio} `));

console.log(nuevoArray);
console.log(nuevoArray2);