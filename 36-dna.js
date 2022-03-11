// Kata: https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// La universidad de Michichuguin nos ha pedido un software que calcula el secuencia ADN complementaría a otra
// A<-->T C<--->G . El complementario de A es T y viceversa. El complementario de C es G y viceversa.
// Tengo que excribir un programa que cuando salgan ciertas palabras en el ADN me devuelva la palabra que le complementa a esta.
// Por ejemplo: Una persona tiene un ADN ATTGC, en este caso se complementan así;
// T => A ; A => T
// C => G ; G => C

// Primero tengo que encontrar la manera de que el programa recorra letra por letra el AND.
// El sengundo paso sería que yendo por cada una de esa letra me devuelva la letra complementaria.
function DNAStrand(dna) {

    // Creamos un objeto llamado "secuencia" que contiene todas las combinaciones.
        let secuencia = {
            "A" : "T",
            "T" : "A",
            "G" : "C",
            "C" : "G"
        }
    // Creamos la función que nos de los caracteres pero luego creamos otra que los sustituya por el metodo reemplazo
    // La "g" después de la expresión regular es una opción o indicador que realiza una búsqueda global, buscando en toda la cadena y devolviendo todas las coincidencias.    
        return dna.replace(/A|T|G|C/g, function(emparejado){
            return secuencia[emparejado];
        });
    }
    
    console.log(DNAStrand("AAAA")); // "TTTT"
    console.log(DNAStrand("ATTGC")); // "TAACG"
    console.log(DNAStrand("GTAT")) // "CATA"