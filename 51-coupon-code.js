// https://www.codewars.com/kata/539de388a540db7fec000642

// Groupon ha contratado a Aleix para que implemente una función de validación de cupones. 
// Un cupón es válido si el código que introduce el usuario es igual al código correcto del cupón
// Se debe comprobar además que el cupón no está caducado

// Ayuda: https://www.freecodecamp.org/news/javascript-date-comparison-how-to-compare-dates-in-js/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){ 
}
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014')); // true
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')); // false
console.log(checkCoupon('123','123','September 5, 2014','October 1, 20013')); // false 
