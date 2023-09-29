//object literal - estático
const cliente = {
    nombre: 'Miles',
    saldo: 500
}

console.log(cliente);


//Object constructor - objeto reutilizable con muchas instancias y muchos datos
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const noa = new Cliente('Noa', 600);
console.log(noa);

// los 'proto' son las funciones que se pueden pasar a este tipo de ojetos