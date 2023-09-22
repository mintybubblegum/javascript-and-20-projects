//Object literal

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,    
}

// Object constructor

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Xiaomi Redmi 12 PRO 5G', 325);
console.log(producto2);

const producto3 = new Producto('Yoga mat', 70);
console.log(producto3);