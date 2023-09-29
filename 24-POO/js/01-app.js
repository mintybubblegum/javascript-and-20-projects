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

const miles = new Cliente('Miles', 800);
console.log(miles.mostrarInformacion());
console.log(miles);

console.log( Cliente.bienvenida() ); // en lugar de miles.bienvenida()