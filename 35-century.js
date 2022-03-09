// Url de la kata: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
 
// IMPORTANTE: Plantear con lenguaje natural como resolver el ejercicio, después codificar! "Pues para resolver el algoritmo tengo que coger el año que me pasan y...."
 // Tengo que mirar numero por numero los numeros que forman el año. Si los dos ultimos numeros son diferentes de 00, hay que sumarle +1 a los dos primeros. Sino, hay que devolver los dos primeros tal cual
/**
 * Implementa una función que dado un año; devuelva a que siglo pertenece.
 * 
 * @param {number} year Año 
 * @returns {number} Siglo al que pertenece dicho año.
 */

 function century(year){
    return Math.ceil (year/100);
}
    
   



console.log(century(1601)); // 17
console.log(century(1705)); // 18
console.log(century(2000)); // 20

//Hacer un bucle que suma +1 al siglo cada 100 años

//Math.floor(a + b) te redondea al siguiente entero

// solucion: 