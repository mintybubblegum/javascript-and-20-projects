const producto = 'monitor de 20 pulgadas ';
const precio = '120'

console.log(producto.concat(precio));
console.log(producto + "Con un precio de: " + precio);
console.log("El producto " + producto + "tiene un precio de " + precio);

//!alternativa de ES6 - versión más actualizada
console.log(`El producto ${producto} tiene un precio de ${precio}€.`);