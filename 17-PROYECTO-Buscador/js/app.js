// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con l busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    max: '',
    min: '',
    puertas: '',
    transmision: '',
    color: '',
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // muestra los autos al cargar

    // Llena las opciones de años
    llenarSelect();
})

// Event listener para los select de busqueda
marca.addEventListener('change', e => { // cada vez que pulso en el select se manda ese value al objeto datosBusqueda.marca y filtrar segun marca
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto()
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
})

// Funciones
function mostrarAutos() {
    autos.forEach( automovil => {
        
        const { marca, modelo, year, puertas, transmision, precio, color } = automovil;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio}€ - Color: ${color}

        `;

        // insertar funcion en html
        resultado.appendChild(autoHTML);
    })
}

// Genera los años del select
function llenarSelect(){
    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value= i; // para almacenar un valor asociado a la opción 
        opcion.textContent = i; // para mostrar un texto legible por humanos en la lista desplegable.
        year.appendChild(opcion);
    }
}

function filtrarAuto(){ //higher-order function === funcion dentro de otra. Filtrar marca como funcion
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear );
    console.log(resultado);
}

function filtrarMarca(auto){ // si hay algun valor en el filtro de marca los muestro y sino, los traigo todos
    const { marca } = datosBusqueda;
    if( marca ){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto){
    const { year } = datosBusqueda;
    if( year ){
        return auto.year === year;
    }
    return auto;
}