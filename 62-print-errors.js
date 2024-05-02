/**
 * 
 * 1. Leer enunciado y entenderlo: https://www.codewars.com/kata/56541980fa08ab47a0000040/
 * 
 * 2. Plantear con tus propias palabras que debe hacer esta función
 * 
 * 3. Implementarlo. Por favor, usa un "for" aunque conozcas otras formas de hacerlo
 * 
 * Ayuda: Va a ser importante aprender dos cosas
 * 
 * 1. Como saber si una letra esta ocupa una posición 
 * 2. Jugar adecuadamente con los índices para comparar una letra con otra
 * 
 */

//Hay que comprobar si cada posición i del string dado s (bucle for) contiene un código correcto de color. 

function printerError(s) {
    // Variables
    let correctCode = "abcdefghijklm";
    let countErrors = 0;
    let errors = "";

    //1) Recorremos string s
    for (let i = 0; i<s.length; i++){
        //2) Ver si valor cada posición de s está en countCode (como solo interesa saber si está o no - booleano (includes)) - op2: bucle for anidado
        if (!correctCode.includes(s[i])){
            //3) Si no está, sumamos un error
            countErrors++;
        }
    }
    //4) Creamos valor de errors commo string
    errors = `${countErrors}/${s.length}`;
    return errors;
}

console.log(printerError("aaabbbbhaijjjm")); // Debería devolver "0/14"
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); // Debería devolver "8/22"
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")); //  Debería devolver "3/56"
