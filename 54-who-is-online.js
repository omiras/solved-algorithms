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

  //Creamos un objecto nuevo con los resultados que mostraremos
  const result = {
    online: [],
    offline: [],
    away: [],
  };

  //Recorremos el array de friends con un bucle for of (que se usa para recorrer arrays const valor del array)
  for (const persona of friends) {
    if (persona.status === "online" && persona.lastActivity <= 10) {
      //Si la persona está online y la actividad es menor o igual a 10, se añade a la propiedad online del objeto result 
      result.online.push(persona.username);
    } else if (persona.status === "online" && persona.lastActivity > 10) {
      //Si la persona está online y la actividad es superior a 10, se añade a la propiedad away del objeto result 
      result.away.push(persona.username);
    } else {
      //el resto se añade en offline
      result.offline.push(persona.username);
    }
  }
  //Devolvemos el nuevo objecto con las propiedades añadidas.
  return result;
}

let friends = [
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

let friends_2 = [
  {
    username: "David",
    status: "offline",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "offline",
    lastActivity: 104,
  },
];

console.log(whosOnline(friends_2));

/**
 * {
 * online: [],
 * offline: ["David", "Lucy", "Bob"],
 * away: []
 *
 * }
 */
