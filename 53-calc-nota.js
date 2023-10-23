/** Pssst: Recuerda leer el fichero README.md */




//creamos una función con dos parámetros que calcula la nota del examen tipo test

function calcNota(input, solution) {

  //verificamos si la longitud de las respuestas del estudiante('input) y la solución coinciden.
  //'if'not se lanxza un error
  if (input.length !== solution.length) {
    throw new Error ("Las respuestas del estudiante y la solución no tienen la misma longitud ");
  }
  
  //inicio de la puntuación mediante una variable 'puntuacion' en 0

  let puntuacion = 0;

  // la función utiliza un bucle'for' para recorrer las respuestas y la solución una a una. 
  for (let i = 0; i < input.length; i++) {

  // si la respuesta coincide se suman 10 puntos si no, se restan 0,25
    if (input[i] === solution [i]) {
      puntuacion += 10;
    } else {
      puntuacion -= 0.25;
  }

  // compruebo si la puntuación final está dentro de lo marcado. No inferior a 0 ni superior a 100

}puntuacion = Math.max(0, Math.min(100, puntuacion));

// la función me devuelve la puntuación
  return puntuacion;

}
//hay tres llamadas a la función 'calcNota'con diferentes respuestas al test y los resultados se imprimen en la consola


console.log(calcNota("ABCDBBACAD", "ABCDBBACAD")); // 100 (el examen está perfecto)
console.log(calcNota("CBCDBBACAC", "ABCDBBACAD")); // 80 (hay 2 errores)
console.log(calcNota("CCACCCDVVA", "ABCDBBACAD")); // 0 (todo mal...)