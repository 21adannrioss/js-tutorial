//cuales son los numeros pares

let i = 0;
while (i < 3) {
    if (i % 2 == 0) {
        console.log("Número par", i);
    }
    i++;
}

// do {
//     if (i % 2 == 0) {
//         console.log("Número par", i);
//     }
//     i++;
// } while (i < 3);




// cambio el número
let i = 2;

//en while se evalua primero la condicion, si se cumple se ejecuta la estructura
while (i < 2) {
    if (i % 2 == 0) {
        console.log("Número par", i);
    }
    i++;
}


//cuando se cumpla toda la estructura se ejecutará el siguiente, luego vuelve a subir
do {
    if (i % 2 == 0) {
        console.log("Número par", i);
    }
    i++;
} while (i < 2);