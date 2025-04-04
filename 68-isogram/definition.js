
// Lee el enunciado del siguiente algoritmo. 
// URL:https://www.codewars.com/kata/54ba84be607a92aa900000f1


function isIsogram(str){
    /** Reescribe con tus palabras y con pseudocódigo qué hay que hacer aquí. También te puedes valer de dibujos o esquemas para enseñarlos a clase. NO escribir código JavaScript  */
    // Recibe un texto.
    // leemos la primera letra y comprobamos si está guardada
        // Como es la primera, no estará guardada y continuamos
    // leemos la segunda letra y comprobamos que no está en las letras guardadas.
        // En caso de que sí esté, cortamos las comprobaciones y devolvemos como valor que es FALSO el isograma recibido.
        // En caso de que no, la añadimos como revisada
    // leemos la tercera letra y comprobamos que no está en las letras guardadas...
        // En caso de que sí esté, cortamos las comprobaciones y devolvemos como valor que es FALSO el isograma recibido.
        // En caso de que no, la añadimos como revisada
        // En caso de que hayamos leído todo el texto y no hayamos encontrada coincidencias, devolveremos que es VERDADERO el isograma.
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("")); // true
