// Lee el enunciado del siguiente algoritmo. 
// URL: https://www.codewars.com/kata/55908aad6620c066bc00002a - Kyu 6
// Enunciado: 
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


function XO(str) {
    /** Reescribe con tus palabras y con pseudocódigo qué hay que hacer aquí. También te puedes valer de dibujos o esquemas para enseñarlos a clase. NO escribir código JavaScript  
     * 
     * Hay que contar si una string tiene el mismo número de "x" que de "o", sin tener en cuenta mayúsculas o minúsculas. Sino tiene ninguna de estas letras debe devolver "true" (puesto que efectivamente tendrá el mismo número de "x" que de "o").
     * 
     * Tenemos que crear dos variables: una que guarde las "x" y otra que guarde las "o". Las vamos a inicializar en 0 y las incrementaremos cada vez que aparezca la letra correspondiente.
     * 
     * Después crearemos un bucle "for" para recorrer la cadena. 
     * 
     * También sería conveniente guardar el índice de str en una variable y convertirlo a minúsculas para que el bucle itere sin tener en cuenta mayúsculas o minúsculas. Esta variable también la usaremos para compararla con "x" u "o", de manera los contadores respectivos se incrementen si ésta es igual a alguna de estas dos letras.
     * 
     * Si el índice de la cadena de texto se corresponde con una "x", la variable que cuente las "x" augmentará en 1 su valor, y lo mismo para la "o". Entonces, habrá que crear una estructura condicional dentro del bucle, con un "if" y un "else if". 
     * 
     * La función tiene que retornar si el contadorX y el contadorO son estrictamente ("===") iguales. Sino lo son, retornará false. Además, si la string no contiene ninguna de estas dos letras, la respuesta será true porque 0 es igual a 0.
    */
}

XO('xo');                  // true
XO('XO');                  // true
XO('xxxoo');               // false
XO('xxOo');                // true
XO('');                    // true
