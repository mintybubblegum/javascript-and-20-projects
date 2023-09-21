// Congelar objeto para no poderlo modificar, reasignar ni añadir propiedades

"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}

Object.freeze( producto );
console.log(Object.isFrozen(producto));