// Los objetos son la pieza principal en JavaScript, en lugar de crear diferentes variables:

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 30;
const disponible = true;

// Un objeto agrupa todo en una sola variable...

// Object literal
const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}

console.log(producto);