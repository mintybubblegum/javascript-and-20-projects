// Se puede reasignar valores de un objeto aunque estén declarado como const
// Se pueden eliminar propiedades
// Para prevenir esto

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}

producto.disponible = false;

delete producto.precio;

console.log(producto);

