/**
 * Nos piden implementar el sistema de puntuación de Tetris de Nintendo según estos criterios: https://www.codewars.com/kata/5da9af1142d7910001815d32
 * 
 * 
 */

function getScore(arr) {
    // your code here
}
console.log(getScore([0, 1, 2, 3, 4])); // Valor esperado: 1640
console.log(getScore([0, 1, 1, 3, 0, 2, 1, 2])); // Valor esperado: 620
console.log(getScore([2, 0, 4, 2, 2, 3, 0, 0, 3, 3])); // Valor esperado: 3300
console.log(getScore([0])); // Valor esperado: 0
console.log(getScore([])); // Valor esperado: 0
/**
 * 
 * PISTAS: NO MIRAR HASTA ESTAR ENCALLADO
 * 
➖➖➖➖➖➖➖🟦🟦➖
➖➖➖➖➖➖➖🟦➖➖
➖➖➖➖➖➖➖🟦➖➖
➖➖➖➖➖➖➖➖➖➖
➖➖🟩🟩➖🟧➖➖➖➖
➖🟩🟩🟧🟧🟧➖➖➖➖
➖🟪🟪🟪🟦🟦🟦➖➖➖
🟨🟨🟪🟪🟥🟥🟦➖🟨🟨
🟨🟨🟪🟪🟪🟥🟥➖🟨🟨
⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️
⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️
 * 
 * 
 * 0. Implementa primero el algoritmo sin tener en cuenta el nivel del juego. De esta manera, debería funcionarte la suma para las dos primeras llamadas a la función
 * 
 * 
 * 
 * 
 * 
 * 1. Creo que el punto impotante del ejercicio es tener claro cuando incrementar el nivel del juego. 
 * 
 * 
 * 
 * 
 * 2. Fíjate que cada 10 líneas, aumentamos de nivel. Necesitas una variable para saber en que nivel nos encotramos en cada momento, y cada 10 líneas, aumentar dicha variable en 1. Además. ten en cuenta este comentario: 'Note that after increasing the level, the total number of cleared lines is not reset.'
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 3. Además, la puntuacion hay que multiplicarla por el nivel que nos encotramos. Entonces, si hemos conseguido una línea y estamos en el nivel 0, solo conseguimos 40 puntos. Pero si estamos en el nivel 1, conseguimos el doble , 80. Lo mismo pasa para los puntos cuando tenemos 2 líneas. En nivel 0 dan 100 puntos, pero en nivel 1, dan 200 puntos, el doble. Existe una relación entre el nivel que nos encontramos y las líneas conseguidas para calcular los puntos

 *
 */