const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1 kg",
            medida: "1m",
        },
        fabricacion: {
            pais: 'UK',
        }
    }
}


const { nombre, informacion: { fabricacion } } = producto;

console.log(fabricacion);