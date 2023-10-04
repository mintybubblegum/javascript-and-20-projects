import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

nuevaFuncion(); //puedes usar cualquier nombre en el export default a la hora de importarlo

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente,ahorro);

console.log(cliente.mostrarInformacion());

// Importar empresa
const empresa = new Empresa('Código con Noa', 200, 'Aprendizaje en línea');
console.log(empresa.mostrarInformacion());
