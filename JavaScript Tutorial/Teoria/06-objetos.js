let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon slayer",
    edad: 16,
};

//especificamente algo
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

//cambiar valor de uno de los objetos
personaje.edad = 13;
//sirven ambas
personaje["edad"] = 16;

//eliminar una propiedad
delete personaje.anime;

console.log(personaje)