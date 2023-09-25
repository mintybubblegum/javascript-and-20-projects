// SOME se utiliza en array tradicional y en array de objetos

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const existe = carrito.some( producto => producto.nombre === 'Monitor curvo' );
console.log(existe); //false

const existe2 = meses.some( mes => mes === 'Febrero' );
console.log(existe2); //true