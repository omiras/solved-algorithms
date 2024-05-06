/**
 * Estamos jugando a un juego parecido al Scrabble  
 * 
 * Nos han definido un sistema de puntuación en https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
 * 
 * El algoritmo debe devolver la palabra que más puntúa de todo el string .
 */

function high(x) {
  // PRIMERO: Darle un valor númerico a cada letra. 
  //Se me ocurre hacer un array con las letras donde su valor sea su posición en el index +1
  
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  // Al intentar poner esto dentro de una variable descubro metodo bind(). VER DESPUES

  //SEGUNDO separar las palabras de una frase y volverlas elementos de un array
let arrayPhrase = x.split(" ");

//TERCERO Creo las varianbles necesarias 
// Una para acumular los puntos de cada
let maxPoint = 0;
//Otra para poner cual es la palabra con más puntos
let maxWord= "";

 // Recorrer cada palabra (array) para poner comparar cuál tiene más puntos
 for(let w of arrayPhrase){
  
  //contar los puntos de cada palabra iterando dentro de la misma  
  let pointstWord = 0;
  for(let i of w){
    pointstWord  += letters.indexOf(i) + 1;
  }
  
  if (maxPoint < pointstWord){
      maxPoint = pointstWord;
      maxWord = w;
  }

  
 }

 return maxWord;
 
}

console.log(high('man i need a taxi up to ubud')); // Valor esperado: 'taxi'
console.log(high('what time are we climbing up the volcano')); // Valor esperado: 'volcano'
console.log(high('take me to semynak')); // Valor esperado: 'semynak'
console.log(high('aa b')); // Valor esperado: 'aa'


/**
 * PISTAS: 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 1. Usa el método .split() para separar cómodamente el string en un array
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 2. Usa una estructura de datos auxiliar para guardar la puntiación. La solución no son 24 if..else if....
 */

