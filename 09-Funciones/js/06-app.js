//! Parametros por default...

// Algunas veces mandaras llamar una función que no tendrá los argumentos que se requieren, por ejemplo cuando llenas tu perfil de facebook tal vez no llenas todos los campos

// Puedes ver que en la consola aparecerá undefined


function saludar(nombre = 'Desconocido', apellido) {
    console.log( `Hola ${nombre}  ${apellido} ` );
}
saludar('Juan', 'Gutierrez'); // Pablo y De la torre son argumentos, son los valores reales...

saludar('Juan');

saludar('Gutierrez'); //Hola Desconocido Gutierrez