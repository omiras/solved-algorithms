// https://www.codewars.com/kata/5715eaedb436cf5606000381


function positiveSum(arr) {
    // variable para almacenar el resultado
    let result = 0;

    // recorro el array
    for (const n of arr) {
        // si es mayor a 0, lo sumo
        if (n>0) {
            result = result + n
        }
    }

    return result;
}

console.log(positiveSum([1, 2])); // 3

console.log(positiveSum([1, -2, -7, 10, -8])); // 11

console.log(positiveSum([-1, -2, -7, -10])); // 0 (no hay números positivos! )