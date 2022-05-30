
let patata = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
// resultado: debe ser un array de dos posiciones. 
let patata2;
function countPositivesSumNegatives(input) {

  //La primera posicion es 
  // la cantidad de números positivos. El segundo elemento del array debe
  // ser la suma de los números negativos
  //let resultado = [];
  let totalPositivos = 0;
  let sumaNegativos = 0;

  // Los ceros hay que ignorarlos
  if (!input || input.length === 0) {
    return [];
  }
    // Si el número es positivo, incrementar la variable totalPositivos.
    // Si el número es negativo, sumarlo a la variable sumaNegativos
    input.forEach((num) => num > 0 ? totalPositivos++ : sumaNegativos += num);
     // Añadir a 'resultado', los valores de la variable totalPositivos y sumaNegativos
    return [totalPositivos, sumaNegativos]
  
}

console.log(countPositivesSumNegatives(patata)) // [8, -50]
