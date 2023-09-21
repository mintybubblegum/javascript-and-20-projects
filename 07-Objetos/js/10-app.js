const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

//unir dos objetos 1
const resultado = Object.assign(producto, medidas);

console.log(resultado);

//unir dos objetos 2 - spread operator
const resultado2 = { ...producto, ...medidas };
console.log(resultado2);
