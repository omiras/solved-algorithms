/**
 * 
 * Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". 
 */
function titleCase(str) {
  let strCapitalized = ''

  return strCapitalized;
}

/**
 * Sin codificar nada, ¿Cómo resolveríamos este algoritmo?
 * 
 * 1. Estado inicial de nuestra solución.
 * 2. Qué tenemos que hacer a cada paso
 * 3. Cómo sabemos que hemos acabado de realizar la transformación del string
 * 4. Atención! Fijaos que todas las letras deben estar en mínusculas, excepto la primera de cada palabra, que debe ser una mayúscula.
 */

console.assert("string" == typeof (titleCase("I'm a little tea pot")), `should return a string`)
console.assert("I'm A Little Tea Pot" == titleCase("I'm a little tea pot"), `titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.`)
console.assert(titleCase("sHoRt AnD sToUt") == "Short And Stout", `titleCase("sHoRt AnD sToUt") should return Short And Stout.`)
console.assert(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") == "Here Is My Handle Here Is My Spout", `titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout`)