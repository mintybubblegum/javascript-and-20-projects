// Buenas practicas con if...

const autenticado = true;

if(autenticado === true) {
    console.log('El Usuario esta autenticado')
}


// También muchas personas escriben ifs pensando que se podrán ejecutar 2 condiciones al mismo tiempo, el if solo va a ejecutar la primera que se cumpla...

const puntaje = 500;

if(puntaje > 300) {
    console.log('Buen puntaje... felicidades');
} else if(puntaje > 400) {
    console.log('Excelente esfuerzo')
} else {
    console.log('No sabria decirte, pero buen esfuerzo...')
}

// puedes ver que ambas condiciones se cumplen, la de 300 y 400, muchas personas creen que se van a ejecutar ambas porque ambas se cumplen pero el if va a ejecutar la que más pronto cumpla su condición, también recuerda que el orden puede ser importante, lo más seguro es que quieras cambiar el orden del 300 y 400

// en su lugar trabajaremos de esta manera
function revisarPuntaje(){
    if(puntaje > 400) {
        console.log('Excelente esfuerzo');
        return;
    }
    if(puntaje > 300) {
        console.log('Buen puntaje... felicidades');
        return;
    }
}

revisarPuntaje();