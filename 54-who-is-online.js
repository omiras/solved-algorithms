/**
 * Página del algoritmo: https://www.codewars.com/kata/5b6375f707a2664ada00002a
 *
 * Queremos saber si los usuarios de una aplicación están online, offline y ausente
 *
 * Parámetro de entrada: un array de objetos, que representa cada uno de los usuarios
 * Return: Un objeto, indicando quien está online, offline o ausente
 *
 * Una persona está ausente si no ha tenido actividad hace más de 10 minutos, a pesar de estar online.
 *
 */

function whosOnline(friends) {
  // Your code here...
}

friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

console.log(whosOnline(friends));

// debería dar:
/**
 * {
      online: ['David'],
      offline: ['Lucy'],
      away: ['Bob']
    }
 */
