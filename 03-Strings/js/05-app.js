const producto = 'Monitor 20 pulgadas';

// .replace para reemplazar
console.log(producto.replace('pulgadas', '"'));

// .slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2));

// para que se recoja la inicial del nombre para utilizar en login
const user = "Noa";
console.log(user.substring(0, 1));
console.log(user.charAt(0));