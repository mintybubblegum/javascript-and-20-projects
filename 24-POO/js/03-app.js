class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}€`;
    }

    // propiedades estáticas: no requiere ser declarado a través de una instancia
    static bienvenida(){
        return `Bienvenida al cajero`
    }
}

//Herencia de clases
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){
        super( nombre, saldo );
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){ // reescribe metodo padre en la herencia
        return `Bienvenida al cajero de empresas`
}
}

const miles = new Cliente('Miles', 800);
const empresa = new Empresa('Empresa de Noa', 50000, 645815265, 'Aprendiendo JS');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());