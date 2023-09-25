//findIndex para encontrar posición en un array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


// meses.forEach((mes, i) => {
//     if(mes === 'Abril') {
//         console.log(`Encontrado en el indice ${i}`);
//     }
// })

const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice); //3