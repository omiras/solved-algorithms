    /**
    * @param {number[]} nums
    * @param {number} target
    * @return {number[]}
    */
   

     var twoSum = function(nums, target) {
 
        // vamos avanzdo ambos índices para comparar un número contra los demás. Cuando la suma de dos de ellos es igual al valor de 'target'; podemos decir que hemos encontrado la solución
     
        for (let i=0; i<nums.length;i++) {
            for (let j=i+1; j<nums.length;j++)
             {
                if (nums[i]+nums[j]==target) {
                    return [i,j]
                }
             }
        }
    }

// Recibo un array de números enteros "nums".
// Debo recorrer dicho array para encontrar dos números que sumados sean equivalentes al valor dado en "target".
// Para ello voy iterando el array dado y realizo lo siguiente:
// Cojo el primer número y le voy sumando los siguientes uno a uno, y tras cada suma comparo si su resultado coincide en valor con "target".
// Si sumando el primer número con todos los demás no obtengo el resultado, cojo el segundo y repito el procedimiento a con los siguientes números (es decir, a partir del tercero).
// Si en algún momento obtengo el resultado buscado, muestro los dos índices que verificaron la igualdad.
// Optimizo la velocidad de búsqueda.

// Paso a paso: declaro e inicializa una variable que tomará como valor una función que tomará dos de los tres parámetros dados (nums y target).
// Comienzo un bucle for que inicializo en cero, como valor máximo indico el largo del array "nums" e indico que incremente en uno el valor del índice en cada iteración.
// En cada vuelta, verifico si "target" menos el valor que tiene índice en esa vuelta es igual a alguno de los números restantes en el array.
// Si lo es, muestro el primer número (el de referencia) y el obtenido en la resta.
// Caso contrario continúo hasta el último número del array.
// Si no obtuve resultado, muestro mensaje de error.
// Para optimizar la velocidad, ordeno el array de menor a mayor* y busco en la primera mitad (el número que esté en la posición = largo del array /2) y si la resta me da un valor inferior a "target, busco en la segund mitad. En ambos casos vuelvo a buscar desde la mitad de la mitad, y así sucesivamente.
// * [].sort((a, b) => a -b);