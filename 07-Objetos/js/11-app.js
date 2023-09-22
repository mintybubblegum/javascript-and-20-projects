//! Acceder a los valores de un objeto con la palabra reservada this

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}€`)
    }
}

producto.mostrarInfo();