// Lee el enunciado del siguiente algoritmo. 
// URL: https://www.codewars.com/kata/54ba84be607a92aa900000f1


function isIsogram(str) {
    /** Recuerda que si usas estructuras o herramientas que no hemso visto en clase es posible que tus compañeros y compañeras te pregunten por ellas :) */
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        let char = str[i]; //Variable con el Character a comparar
        let contador = 0;

        for (let j = 0; j < str.length; j++) { //Recorre el string
            if (str[j] === char) { 
                contador++; } //Suma uno al contador
            if (contador >= 2) {
                return false; 
            }

        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("")); // true
