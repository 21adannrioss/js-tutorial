function saludar() {
    console.log("Hola mundo");
}

//para llamar a una función
saludar();


function suma() {
    //return da la suma hecha y para poder reutilizar en algún momento
    return 2 + 2;
}

//es innecesario el let ya que puedes imprimir la función sin necesitarlo
let resultado = suma();
console.log(resultado);

//de esta manera
console.log(suma());