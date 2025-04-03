
// Lee el enunciado del siguiente algoritmo. 
// URL:https://www.codewars.com/kata/54ba84be607a92aa900000f1
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string 
// that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//Example: (Input --> Output)

//"Dermatoglyphics" --> true
//"aba" --> false
//"moOse" --> false (ignore letter case)

function isIsogram(str){
    /** Reescribe con tus palabras y con pseudocódigo qué hay que hacer aquí. 
     * También te puedes valer de dibujos o esquemas para enseñarlos a clase. NO escribir código JavaScript  */


//Necesitas comprobar si alguna letra se repite o no, si no se repite ninguna letra --> la funcion deberia devolver el valor true (Es un Isograma), 
// si alguna letra se repite deberia devolver --> False ( No es in isograma).

// Primero introducimos una funcion para convertir el string a lowerCase antes de comprobar (Para que no sea case sensitive)

//Vamos a necesitar una funcion que recorra el string y guarde el [index] y lo compare con el resto del string. 

//Y una variable que  acumule en un contador el numero de caracteres iguales, si el valor de la variable es >= de 2 --> False
// let i = 0; i < str.length; i++) {
//    let char = str[i];
//    let contador = 0;

//for (let j = 0; j < str.length; j++) { //Recorre el string
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("")); // true
