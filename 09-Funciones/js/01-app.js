// Ventaja de las funciones es que son reutilizables, puedes tener una función que valide un formulario y utilizarla en todos tus formularios, puedes tener también una función que envie datos al servidor y reutilizarla múltiples veces...

// Existen 2 formas de crear funciones en JavaScript

//! Declaración de Función ( Function Declaration )

function sumar() {
    console.log(2 + 2);
}

sumar();


//! Expresión de función ( Expression Function ) - Este tipo de funciones se asigna como si fuera una variable
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

// Existe una 3ra forma de crear funciones, que más bien son métodos, la veremos un poco más adelante...

