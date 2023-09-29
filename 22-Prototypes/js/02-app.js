function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const noa = new Cliente('Noa', 600);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `La clienta ${nombre} ha ganado un premio de ${saldo}€`;
}

console.log(formatearCliente(noa));