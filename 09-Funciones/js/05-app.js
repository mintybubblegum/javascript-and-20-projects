// Funciones que toman parametros y argumentos...

function sumar(a, b){
    console.log(a + b);
}

sumar(2, 3);


function saludar(nombre, apellido) { // nombre y apellido son parametros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
    console.log( `Hola ${nombre}  ${apellido} ` );
}
saludar('Juan', 'Gutierrez'); // Juan y Gutierrez son argumentos, son los valores reales...

saludar();
