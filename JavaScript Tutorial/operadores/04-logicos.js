//da un nuevo valor "true" o "false" para por ejemplo dar acceso
let mayor = true;
let suscrito = true;
// console.log(true && true);
// console.log(false && true);

//&&  debe dar ambos true para servir
console.log("operador and", mayor && suscrito);

// OR || si es que al menos hay un true ya sirve
console.log("operador or", mayor || suscrito);

// NOT !  invierte el valor que tenga
console.log("operador not", !mayor);
let soloCatalogoInfantil = !mayor;