// Lee el enunciado del siguiente algoritmo.
// URL: https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
  /** Recuerda que si usas estructuras o herramientas que no hemso visto en clase es posible que tus compañeros y compañeras te pregunten por ellas :) */

  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} likes this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others likes this`;
  }
}

console.log(likes([])); // "no one likes this"
console.log(likes(["Peter"])); // "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // "Alex, Jacob and 2 others like this"
// Others
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Jhon", "Michael"])); // "Alex, Jacob and 4 others likes this"
























// function likes(names) {
//   return names.length == 0 ? "no one likes this" :
//   names.length == 1 ? `${names[0]} likes this` :
//   names.length == 2 ? `${names[0]} and ${names[1]} likes this` :
//   names.length == 3 ? `${names[0]}, ${names[1]} and ${names[2]} likes this` :
//   `${names[0]}, ${names[1]} and ${names.length-2} others likes this`;
// }