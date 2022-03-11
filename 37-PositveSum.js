// https://www.codewars.com/kata/5715eaedb436cf5606000381

/**
 * You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 */

//1.Tengo que recorrer el array 
//2. Mirar cuales son positivos y guardarlos.
//3. Una vez los tengo guardados, tienen que sumarse.
//4. Si no encuentro ninguno positivo, hay que devolver 0.
// Lo más difícil fue posicionar las variables numeroPositivo/Negativo, ya que en un inicio las declare fuera de la función, junto con sumaTotal y al hacer los console.log se me solapaban los resultados. No entiendo muy bien por qué, pero intuí que de alguna manera guardaba esos valores para la consola siguiente.




function positiveSum(arr) {
    let sumaTotal = 0;

    arr.forEach(numero => {
        if (numero > 0) {
            sumaTotal = sumaTotal + numero;

        }

    })
    return sumaTotal;
}

console.log(positiveSum([1, 2])); // 3

console.log(positiveSum([1, -2, -7, 10, -8])); // 11

console.log(positiveSum([-1, -2, -7, -10])); // 0 (no hay números positivos! )
