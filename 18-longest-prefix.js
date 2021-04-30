/**
 * LongestCommonPrefix consiste en buscar el prefijo mínimo común en un array de strings
 */

/**
 * 1. Separar cada palabra del array
 * 2. Separar cada caracter de cada palabra y guardarlo en una variable para poder compararlo
 * 3. Comparar cada caracter con los caracteres guardados (CommonPrefix)
 * 4. Cortar el array de carácteres a partir del caracter diferentes
 * 5. Unir el array de caracteres para obtener el prefijo
 */

/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {
    //Si el array está vacio devolvemos un string vacio
    if(strs.length === 0) return "" 

    //Save los primeros carácteres del primer string del array para poder compararlo eventualmente
    let prefixSplit = strs[0].split('');

    strs.forEach((str) => {
        //Guardamos los carácteres de cada string del array para compararlo con el prefijo de ese momento
        let wordSplit = str.split('');
        let i = 0;

        //Comparamos cada caracter hasta que uno sea diferente y, guardamos el índice donde se está el carácter diferente. 
        //En el primer caso todos los carácteres són iguales, por eso no paramos hasta que un valor sea undefined
        while(wordSplit[i] === prefixSplit[i] && typeof prefixSplit[i] != 'undefined' ){
            i++;
        }
        //Una vez tenemos el índice donde es diferente, cortamos el array a partir de este
        prefixSplit = prefixSplit.slice(0, i)
    })
    //Una vez acabado el bucle, obtenemos el array con los carácteres del prefijo común, ahora solo falta unirlos para formar un string
    return prefixSplit.join('');
};
 
var strs = ["dog","racecar","car"]

var strs2 = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs));

console.log(longestCommonPrefix(strs2));