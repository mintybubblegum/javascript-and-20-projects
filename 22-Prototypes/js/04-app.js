//heredar prototypes:  se llama a traves del metodo call(this, arguments que queramos heredar)

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){
    let tipo;
    
    if(this.saldo > 10000){
        tipo = 'Gold'
    } else if(this.saldo > 5000) {
        tipo = 'Platinum'
    } else {
        tipo = 'Normal'
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}

//heredar prototypes/constructor:  se llama a traves del metodo call(this, arguments que queramos heredar)
function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

// Copiar prototypes de object constructor
//(tiene que ser antes de ser instanciado para que tenga toda la información cuando se cree, la suya y la heredada)
Persona.prototype = Object.create( Cliente.prototype );

// para copiar constructor de object constructor
Persona.prototype.constructor = Cliente;

// Instanciarlo
const noa = new Persona('Noa', 50000, 645825469);
console.log(noa);
console.log(noa.nombreClienteSaldo());