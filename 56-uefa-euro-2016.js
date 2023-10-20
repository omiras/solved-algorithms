/**
 *
 * URL reto: https://www.codewars.com/kata/57613fb1033d766171000d60/
 *
 * @param {array} teams Los equipos que han participado en la competición
 * @param {array} scores La puntuación de cada uno de los equipos
 *
 * La función debe retornar un string, indicando quien de los dos equipos ganó, o si quedaron empates. Hay que seguir fielmente el formato de texto que se muestra en los comentarios
 */

function uefaEuro2016(teams, scores) {
  // your code...
  
  if (scores[0]>scores[1]) {
    return 'At match ' + teams[0] + '-' + teams[1] + ', ' + teams[0] + ' won!';
  //si los goles del primer equipo son mayores que los del segundo equipo, diremos que ha ganado Alemania.
  } else if (scores[1]>scores[0]) {
    return 'At match ' + teams[0] + '-' + teams[1] + ', ' + teams[1] + ' won!';
  //si los goles del segundo equipo son mayores que los del primer equipo, diremos que ha ganado Italia.
  } else {
    return 'At match ' + teams[0] + '-' + teams[1] + ', teams played draw';
  //si los goles del primer equipo son igual a los del segundo equipo, diremos que ha habido un empate.
  }
}

console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0])); 
// uefaEuro2016(["Germany", "Ukraine"], [2, 0]); // "At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(["Belgium", "Italy"], [0, 2]));
//  uefaEuro2016(["Belgium", "Italy"], [0, 2]); // "At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(["Portugal", "Iceland"], [1, 1])); 
// uefaEuro2016(["Portugal", "Iceland"], [1, 1]); // "At match Portugal - Iceland, teams played draw."


