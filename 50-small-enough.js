// https://www.codewars.com/kata/57cc981a58da9e302a000214/
//Hospital cliníc nos pide que desarrollemos esta función la cual recoge 
//datos sobre pruebas realizadas a pacientes del centro.


// (function)La función recorre el array 'a' mediante un bucle 'for' la cual evaluará
//si cada elemento supera el límiite.
function smallEnough(a, limit) {
    for (let  i = 0 ; i < a.length ; i++) {
        if ( a[i] > limit) {//(if = false)Si en algún caso existe un elemento mayor que el límite pasará a ser una 
            return false;   //evaluación negativa y por tanto falsa, indicando que no todos los elementos
        }                   //son iguales o menores que el límite establecido.
    }
    return true;
}//Al contrario, si el bucle se recorriera de forma ininterrumpida hasta su
//finalización con una evaluación positiva y por tanto verdadera la función 
//se volvería true por lo que los elementos del array son menores o iguales
//que valor límite establecido.


//Mediante console.log se llamará a la función smallEnough con diferentes
//argumentos. 
console.log(smallEnough([66, 101], 200)); 
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));  //Dentro de los corchetes nos encotraremos con los elementos 
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));             //del array seguido del valor límite impuesto para cada llamada. 
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)); 
