//* 1r planteamiento:
// Recorrer la string dada con un bucle for y detectar las X.
// Cuando el carácter actual sea una X, hacer otro bucle y comprobar si hay algun número que la alcance en distancia.
// Acumular las X que han sido "alcanzadas"/cazadas.
 
//* 2o planteamiento:
// (posible separando la queue en un array de los carácteres)
// Recorrer la queue dada con un bucle for y detectar los números.
// Crear una string auxiliar inicializada como una copia de la queue original, que mostrará el alcance de visión de todos los números (policas).
// En la string auxiliar, sustituir el carácter de cada una de las posiciones alcanzadas por un número, por una C, por ejemplo.
// Encontrar las X en la queue original y comparar el carácter de la misma posición en la string auxiliar.
// Si se encuantra con una C, almacenar una unidad (en una variable a modo de contador) representando la X actual cazada.
// Devolver el total almacenado de X cazadas (caughtThieves).

// Algorithm solved by Ricardo Churión

function thiefCatcher(bankQueue) {
  // turn the queue into an array to be able to use array methods
  let arrayQueue = bankQueue.split("");
  // array with all the possible cop values
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let caughtThieves = 0;
  let copIndex = 0;
  // go thorugh each value checking if it's a cop
  while (copIndex < arrayQueue.length) {
    if (numbers.includes(arrayQueue[copIndex])) {
      // range is the variable to control the range each cop has to catch thieves, minimun possible value is 0
      let j = copIndex - arrayQueue[copIndex];
      if (j < 0) {
        j = 0;
      }
      // declare the top of the cop's range, maximun possible value is the lenght of the array minus 1
      let topRange = copIndex + parseInt(arrayQueue[copIndex]);
      if (topRange >= arrayQueue.length) {
        topRange = arrayQueue.length - 1
      }
      // search the cops range for thieves
      while (j <= topRange) {
        // If a thief is found "catch it", is important to then change it's value to avoid the same thief being caught twice
        if (arrayQueue[j] == "X") {
          caughtThieves++;
          arrayQueue[j] = "Y"
        }
        j++
      }
    }
    copIndex++
    
  }
  return caughtThieves
}

