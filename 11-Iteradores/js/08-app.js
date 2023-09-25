// FOR IN para iterar sobre los valores de un objeto

const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

// for( let propiedad of producto ) {
//     console.log(`${producto[propiedad]}`);
// }

for( let [key, value] of Object.entries(producto) ){
    console.log(value);
    console.log(key);
}