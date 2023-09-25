const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const resultado = carrito.every( producto => producto.precio < 400 );
console.log(resultado); // false porque TODOS tienen que cumplir la condición

const resultado2 = carrito.some( producto => producto.precio < 400 );
console.log(resultado2); // true porque AL MENOS UNO la cumple