let animales = ["chanchito", "caballo"];
console.log(animales);
console.log(animales[0]);

animales[2] = "dragón";
console.log(animales);

//se pueden saltar puestos
animales[10] = "pez";
console.log(animales)

//saldrá undefined
console.log(animales[7])

//resultado = objeto
console.log(typeof animales);

//length dice la longitud en específico de ese array
console.log(animales.length)