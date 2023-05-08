// https://www.codewars.com/kata/539de388a540db7fec000642

// Groupon ha contratado a Aleix para que implemente una función de validación de cupones.
// Un cupón es válido si el código que introduce el usuario es igual al código correcto del cupón
// Se debe comprobar además que el cupón no está caducado

// Ayuda: https://www.freecodecamp.org/news/javascript-date-comparison-how-to-compare-dates-in-js/

// Que datos necesitamos de entrada, En este caso, los datos de entrada son el código introducido por el usuario, el código correcto del cupón, la fecha actual y la fecha de caducidad del cupón.

// Que se espera de la función, que resultado ha de dar?. En este caso, se espera que la función devuelva true si el cupón es válido (es decir, si el código introducido por el usuario es igual al código correcto del cupón y la fecha actual es anterior o igual a la fecha de caducidad del cupón) y false en caso contrario.

// cómo puedo comparar las fechas para determinar si el cupón ha caducado o no. En este caso, podemos crear objetos de fecha de JavaScript a partir de las fechas de entrada (currentDate y expirationDate) y luego compararlas usando operadores de comparación.

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    // Comenzamos definiendo la función checkCoupon que toma cuatro parámetros: enteredCode, correctCode, currentDate, y expirationDate. Estos parámetros representan el código que ha introducido el usuario, el código correcto del cupón, la fecha actual, y la fecha de caducidad del cupón, respectivamente.
  let enteredDate = new Date(currentDate);
//   Convertimos la fecha actual (currentDate) en un objeto de fecha de JavaScript y la almacenamos en la variable enteredDate. Esto nos permitirá compararla con la fecha de caducidad del cupón más tarde.
  let expirationDate = new Date(expirationDate);
//   Convertimos la fecha de caducidad del cupón (expirationDate) en un objeto de fecha de JavaScript y la almacenamos en la variable expirationDate. Esto nos permitirá compararla con la fecha actual más tarde.
  if (enteredCode === correctCode && enteredDate <= expirationDate) {
    // Comprobamos si el código introducido (enteredCode) es igual al código correcto del cupón (correctCode) y si la fecha actual (enteredDate) es anterior o igual a la fecha de caducidad del cupón (expirationDate).
    return true;
    // Si se cumplen ambas condiciones en el paso anterior, devolvemos true porque el cupón es válido.
  }
    // Si alguna de las condiciones no se cumple, es decir, el código introducido no es igual al código correcto del cupón o la fecha actual es posterior a la fecha de caducidad del cupón, entonces ejecutamos el bloque de código dentro de este else.
    return false;
    // Devolvemos false porque el cupón no es válido en este caso.
  }


console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014")); // true
console.log(checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014")); // false
console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 20013")); // false
