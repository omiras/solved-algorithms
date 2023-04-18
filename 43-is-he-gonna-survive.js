// Kata: https://www.codewars.com/kata/59ca8246d751df55cc00014c

// Le el enunciado e implementa la función que piden
// Recuerda explicar con tus palabras que debe hacer tu función antes de escribir una sola línea de JavaScript
// Usa ejemplos para describir qué debe hacer tu código

function hero(bullets, dragons) {
  //Get Coding!
  //debemos comprobar si el hero tiene suficientes balas para derrotar a los 2 dragones. 
  // para matar al dragon necessita 2 balas, multiplicado por 2 ya que hay 2 dragones.
  // Si el número de balas que el héroe tiene es mayor o igual a la cantidad de balas necesarias para derrotar a los dragones,
  // entonces el héroe puede completar su misión y la función debe devolver Verdadero (true), de lo contrario, debe devolver Falso (false).
  return bullets >= dragons * 2;
}

console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);
