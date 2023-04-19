// Kata: https://www.codewars.com/kata/59ca8246d751df55cc00014c

// Le el enunciado e implementa la función que piden
// Recuerda explicar con tus palabras que debe hacer tu función antes de escribir una sola línea de JavaScript
// Usa ejemplos para describir qué debe hacer tu código

function hero(bullets, dragons) {
  // "bullets" va a hacer referencia a las balas disponibles que va a tener el heroe.
  // "dragons" va a hacer referencia a la cantidad de dragones con la que se va a encontrar el heroe.
  // "BulletsPerDragon" va a hacer referencia a la cantidad de balas que se van a necesitar para matar a cada dragón.
  // Nos queda en claro que si el heroe tiene las balas suficientes (>=) para matar a todos los dragones se dará el valor boleano "true".
  // En caso de que el heroe se quede sin balas y no pueda matar a todos los dragones se dará el valor boleano "false".

  // Vamos a usar el primer caso como ejemplo.
  // Si el heroes tiene 10 balas, hay 5 dragones que matar y se necesitan 2 balas por cada dragón... Entendemos que el valor boleano será "true", ya que, las 10 balas que tiene el heroe son iguales o mayores a las balas necesarias para matar a los 5 dragones (2*5=10).

  let bulletsPerDragon = 2;

  if (bullets >= bulletsPerDragon * dragons) {
    return true;
  }
  // la única opción que queda es que NO he podido matar a los dragones, entonces devuelvo false
  return false;
}

console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);
