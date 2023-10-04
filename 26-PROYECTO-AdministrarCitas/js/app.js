// Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#telefono');
const telefonoInput = document.querySelector('#propietario');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

class Citas {
    constructor(){
        this.citas = [];
    }
    
    agregarCita(cita){
        this.citas = [...this.citas, cita];
    }

    eliminarCita(id){ //sólo filtra/muestra aquellas citas que no tengan el id que hemos seleccionado para eliminar
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    editarCita(citaActualizada){ // si cambio los valores en la edicion tenemos la cita actualizada, sino tenemos la cita que habiamos creado antes
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita );
    }
}
class UI {
    imprimirAlerta(mensaje, tipo){
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // Agregar clase en base al tipo de error
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        //Quitar la alerta después de 5 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 5000);
    }

    imprimirCitas({citas}) { // extraer el array de las citas del objeto
        
        this.limpiarHTML();

        citas.forEach( cita => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            const divCita = document.createElement('DIV');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            // Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('P');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span> ${propietario}
            `;
            const telefonoParrafo = document.createElement('P');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Teléfono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement('P');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement('P');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement('P');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Síntomas: </span> ${sintomas}
            `;

            // Botón para eliminar cita creada
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
            btnEliminar.onclick = () => eliminarCita(id);
            
            // Añade botón para editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>';
            btnEditar.onclick = () => cargarEdicion(cita);
            
            // Agregar los parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            // Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);
        })
    }

    limpiarHTML(){ // para limpiar citas y que no se duplique la anterior
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

const ui = new UI();
const administrarCitas = new Citas();

// Registrar eventos
eventListeners();
function eventListeners(){
    mascotaInput.addEventListener('change', datosCita);
    propietarioInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}

// Registrar eventos
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: '',
}

// Agrega datos al objeto de cita
function datosCita(e){
    citaObj[e.target.name] = e.target.value; //para que se rellenen los valores de cada campo
}

// valida y agrega una nueva cita a la clase de citas
function nuevaCita(e){
    e.preventDefault();

    // Extraer la información del objeto de cita
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    if( mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' ||sintomas === '' ){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');

        return;
    }

    if(editando){
        ui.imprimirAlerta('Editado correctamente');

        // Pasar el objeto de la cita a edición:
        administrarCitas.editarCita({...citaObj});

        // Regresar botón a su valor original cuando ya hemos pulsado: guardar cambios
        formulario.querySelector('button[type="submit"]').textContent = 'Crear cita';

        // Quitar modo edición
        editando = false;
    } else {
        // generar un id único
        citaObj.id = Date.now();
    
        // Creando una nueva cita
        administrarCitas.agregarCita({...citaObj}); // le pasamos una copia de los campos a rellenar

        // Mensaje de agregado correctamente
        ui.imprimirAlerta('Se agregó correctamente');
    }


    // Reiniciar el objeto para la validación
    reiniciarObjeto();

    // Reiniciar campos del formulario
    formulario.reset();

    // Mostrar el HTML de las citas
    ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

function eliminarCita(id){
    // Eliminar la cita
    administrarCitas.eliminarCita(id);

    // Muestre un mensaje
    ui.imprimirAlerta('La cita se eliminó correctamente');

    // Refrescar las citas
    ui.imprimirCitas(administrarCitas);
};

//Carga los datos y el modo edición
function cargarEdicion(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    // Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // Llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Cambiar el texto del botón
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar cambios';

    editando = true;
}