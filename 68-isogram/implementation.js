// Lee el enunciado del siguiente algoritmo.
// URL: https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
  /** Recuerda que si usas estructuras o herramientas que no hemso visto en clase es posible que tus compañeros y compañeras te pregunten por ellas :) */
  const strRepeat = {};
  str = str.toLowerCase();
  for (let character of str) {
    if (strRepeat[character]) {
      return false;
    } else {
      strRepeat[character] = true;
    }
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("")); // true
