let nums = [2,9,8,7,7,7,7,7,7,8,2,2,5,1,5,0,5,2,1,3,7,8,8,8,9,];


/**
 * @param {number[]} nums
 * @return {number}
 */

function checkMaxNumber(nums){

    let repeatedNumbers = nums.reduce((acumulador, valor)=>{
        acumulador[valor] = (acumulador[valor] || 0 ) + 1 ;
        return acumulador;
    }, {});

    let freq = 0;
    let result = 0;
    for (const item in repeatedNumbers) {
        if(repeatedNumbers[item]>freq) {
            freq = repeatedNumbers[item];
            result = item;
        }
      }
    return Number(result);
}

console.log("Ejemplo 1", checkMaxNumber(nums));


/* Pseudocódigo:
    Función que pasado un array de números, devuelva el valor del número más repetido.
    1. Recorrer todo el listado de números.
    2. Mientra se recorre, ir apartando por grupos cada número igual.
    3. Contar cuantas veces se ha repetido ese número igual. Frecuencia.
    4. Devolver que número es el que posee mayor frecuencia en el listado. 
*/

/* Cómo funciona?
    Almacena en una variable 'repeatedNumbers' un objeto creado por el metodo reduce en el array 'nums' que entra como parámetro en la función.
    El estilo del objeto es clave : valor.
    { '0': 1, '1': 2, '2': 4, '3': 1, '5': 3, '7': 7, '8': 5, '9': 2 }
    El metodo reduce ejecuta una función reductora sobre cada elemento del array. Cada valor que devuelve se asigna al acumulador, el cual se recuerda en cada iteración
    de la matriz, conviertiendóse en el valor final, único y resultante. Es decir, cada una de la claves (clave : valor) hace referencia a cada número DIFERENTE del array.
    Recorre cada uno de los elementos del array y le suma el contador que tuviera anteriormente, por eso sumamos + 1 al acumulador o al 0 por si no había aparecido ese número
    todavía 


    Se declaran dos variables vacías; freq, guardará el número más alto de frecuencias y result, la clave del objeto.
    Posteriormente, se itera sobre el OBJETO (no array). Para ello, el for...in es perfecto. Se podía haber usado el Object.entries(obj).forEach también.
    Se establece la condición en la que si, la propiedad del objeto que actualmente esta recorriendo el ciclo for, es mayor que freq; variable
    declarada para almacenar, ésta se almacenará en la misma. Con ello, también queda asignado el valor de la clave del objeto en result.

    Finalmente, al haber recorrido el objeto y almacenados los valores más altos que previamente habíamos agrupado con el metodo reduce, la función
    retornará el resultado. Éste debe ser convertido a número, debido a que el valor es de la clave, propiedad del objeto y se considera un string. Aunque de igual manera, sería aceptado
    por el test.
    
 */




/* Ejemplo 2, algo más lento que el anterior*/

function checkMaxNumber2(nums){

    let repeatedNumbers = nums.reduce((acumulador, valor)=>{
        acumulador[valor] = (acumulador[valor] || 0 ) + 1 ;
        return acumulador;
    }, {});

    const orderedNumbers = Object.entries(repeatedNumbers).sort((a,b)=>b[1]-a[1]).map(el=>el[0])

    return Number(orderedNumbers[0]);
}
console.log("Ejemplo 2", checkMaxNumber2(nums));


/* Cómo funciona? 
    En este caso, después de obtener el objeto con los datos acumulados como en el ejemplo anterior, podemos echar mano a los métodos de los objetos que permiten recorrerlos.
    Object.entries() nos permite iterar sobre las propiedades de un OBJETO.
    A continuación, ordenamos los valores con el método sort, de mayor a menor según su valor, es decir, su frecuencia (veces que se repite) o acumulador.
    [ '7', 7 ], [ '8', 5 ], [ '2', 4 ], [ '5', 3 ], [ '1', 2 ], [ '9', 2 ], [ '0', 1 ], [ '3', 1 ]
    Posteriormente, se utiliza un map que nos devuelve un array sin los valores, solamente las claves (acumulador):
    ['7','8','2','5','1','9','0','3']
    Finalmente, retornamos el primer elemento del array, el cúal debe ser el mayor de todas las claves, aunque se repita en cuestión. Es decir, el acumulador.
    Éste debe ser convertido a número, debido a que el valor es de la clave, propiedad del objeto y se considera un string. Aunque de igual manera, sería aceptado
    por el test.
*/






/* Ejemplo 3. EL que proponen como solución MÁS ÓPTIMA. Es el más rápido. */


let majorityElement = function(nums) {
    nums.sort((a,b) => a-b)
    const l = nums.length

    if(l %2=== 0){
        return nums[l/2]
    } else {
        return nums[(l -1)/2]
    }
};

console.log("Ejemplo 3", majorityElement(nums));


/* Cómo funciona? 
    Este ejemplo no es mío y es ideal la lógica utilizada.
    Primero ordenan el array de menor a mayor.
    [ 0, 1, 1, 2, 2, 2, 2, 3, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9 ]
    Se inicializa una variable con la longitud del array que le pasamos como parámetro.
    En este caso, 25 elementos en el array. 
    Condicionan por la longitud.
    Si la longitud se divide por 2 y el resultado es 0, es decir, hay un numero total de elementos par; se retorna el valor justo
    del medio.
    En el caso que sea impar el número total de elementos del array, como en este ejemplo, se toma la langitud menos un elemento, y
    retorna el valor justo del medio. 
    25-1 = 24 -> 24/2 = 12. El elemento en la posición 12 es una de las tantas veces que se ha repetido el valor más repetido. 
*/