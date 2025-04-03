// Lee el enunciado del siguiente algoritmo. 
// URL: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/

// Enunciado:
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.


function likes(names) {
    /** Reescribe con tus palabras y con pseudocódigo qué hay que hacer aquí. También te puedes valer de dibujos o esquemas para enseñarlos a clase. NO escribir código JavaScript  */

    
    // Recibe una lista de nombres que representan a las personas que han dado "like" a una publicación.
    // Contar cuántos nombres hay en la lista.
    // Comprobamos:
    //      Si no hay nombres:
    //          Devolver el mensaje "no one likes this".
    //      Si hay 1 nombre:
    //          Devolver el mensaje "A nombre le gusta esto".
    //      Si hay 2 nombres:
    //          Devolver el mensaje "A nombre1 y nombre2 les gusta esto".
    //      Si hay 3 nombres:
    //          Devolver el mensaje "A nombre1, nombre2 y nombre3 les gusta esto".
    //      Si hay 4 o más nombres:
    //          Devolver el mensaje "A nombre1, nombre2 y X más les gusta esto". Donde X será la cantidad del resto de nombres.


} 


console.log(likes([])); // "no one likes this"
console.log(likes(["Peter"])); // "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // "Alex, Jacob and 2 others like this"
