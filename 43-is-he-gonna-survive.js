// Kata: https://www.codewars.com/kata/59ca8246d751df55cc00014c

// Le el enunciado e implementa la función que piden
// Recuerda explicar con tus palabras que debe hacer tu función antes de escribir una sola línea de JavaScript
// Usa ejemplos para describir qué debe hacer tu código
// En este caso tenemos un princeso que tiene que ir a salvar un castillo custodiado por dos dragones los cuales son muy poderosos y la unica forma de matarlos son con dos balas, el principe no tienen ni idea como matarlos entonces tiene que saber contra que se va a enfrentar y cuantas balas tiene que coger.



function hero(bullets, dragons);
 
return bullets => dragons *2



console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);
