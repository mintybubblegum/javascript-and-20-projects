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
    mostrarAutos(autos); // muestra los autos al cargar

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
    filtrarAuto();
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})

// Funciones
function mostrarAutos(autos) {

    limpiarHTML(); // Elimina el HTML previo

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

// Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
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
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );

    if(resultado.length){
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado(){

    limpiarHTML();

    const noResultAlert = document.createElement('div');
    noResultAlert.classList.add('alerta', 'error');
    noResultAlert.textContent = 'No hay resultados. Intenta con otros términos de búsqueda'
    resultado.appendChild(noResultAlert);
};

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

function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;
    if( minimo ){
        return auto.precio >= minimo;
    }
    return auto;
}
function filtrarMaximo(auto){
    const { maximo } = datosBusqueda;
    if( maximo ){
        return auto.precio <= maximo;
    }
    return auto;
}
function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;
    if( puertas ){
        return auto.puertas === puertas;
    }
    return auto;
}
function filtrarTransmision(auto){
    const { transmision } = datosBusqueda;
    if( transmision ){
        return auto.transmision === transmision;
    }
    return auto;
}
function filtrarColor(auto){
    const { color } = datosBusqueda;
    if( color ){
        return auto.color === color;
    }
    return auto;
}