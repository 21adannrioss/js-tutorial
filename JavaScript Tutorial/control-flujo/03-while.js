/* 
Son todos iguales solo tienen sutiles diferencias

while
do while
for
for in
for ot
*/

//cuales son los numeros pares

let i = 0;
while (i < 10) {
    if (i % 2 == 0) {  // hace solo números pares
        console.log("Número par", i)
    }
    i++; //siempre fuera del if
}

console.log("Fuera del while")