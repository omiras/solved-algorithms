/**
 * https://www.codewars.com/kata/5513795bd3fafb56c200049e/
 *
 * Implementa una función con estas carácteristicas
 *
 * parámetro x: incremento
 * parámetro n: Cantidad de números a colocar en el array
 *
 *  returno: Un array de números
 *
 */


// Para el 

function countBy(x, n) {
  let z = []; // Donde almacemnamos el array
  let incremento = x;

  for (let i = 0; i < n; i++) { //Queremos que se repita el bucle mientra i sea mas pequeña que la cantidad de numeros que queremos

    z.push(incremento);  // Para meter cada numero en el array
    incremento = incremento + x;
  }
  
  return z;
}

console.log(countBy(1, 10)); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

console.log(countBy(2, 5)); // [2, 4, 6, 8, 10]
