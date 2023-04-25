// https://www.codewars.com/kata/57eaeb9578748ff92a000009/

function sumMix(x) {
  let suma = 0;
  
  /** Codificar a partir de aquí */

// queremos sumar todo el array asi que escribimos un bucle que recorra todo el array
  for (let i = 0; i < x.length; i++) {
//+= es un operador de asignación compuesta que añade el valor de la expresión del lado derecho a la variable del lado izquierdo.
    suma += parseInt(x[i]);
//parseInt() es una función en JavaScript que convierte un valor de cadena en un número entero.
  }
  return suma;
}

// en el terminal verás:
console.log(sumMix([9, 3, "7", "3"])); // 22
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])); //42
console.log(sumMix(["3"])); // 3
console.log(sumMix([])); // 0

