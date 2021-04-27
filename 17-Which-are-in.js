/*function inArray(lista1,lista2){                            // La función inArray, recive 2 listas
    let result =[]                                          // Iniciamos una nueva lista vacía y la llamamos result
    lista1.forEach(element => {                             // Especificamos que por cada elemento de la lista 1 se hagan los siguientes pasos
        var isSubstring = false                                   // Iniciamos una nueva variable llamada isSubstring y la definimos como false
        lista2.forEach(element2 => {                        // Especificamos que por cada elemento de la lista 2 se hagan los siguientes pasos
            if (element2.includes(element) && !isSubstring){      // En el caso de que un elemento de la lista 2 contenga un elemento de la lista 1 y que isSubstring sea false continue
                result.push(element)                        // Añadimos el elemento de la lista 1 a la lista result
                isSubstring = true                                // Al haber encontrado una evidencia de que isSubstring el elemento especificamos que isSubstring sea true
            }
        }),
        isSubstring = false                                       // Una vez se acaba de listar todos los elementos de la lista 2 volvemos a especificar que isSubstring sea false
    })
    return result.sort()                                    // Una vez se acaba de listar todos los elementos de la lista 1 devolvemos la lista result con los elementos ordenados alfabéticamente
}*/




function inArray(lista1,lista2){                            // La función inArray, recive 2 listas
    let result =[]                                          // Iniciamos una nueva lista vacía y la llamamos result
    var isSubstring = false
    var i = 0
    lista1.forEach(element => {                             // Especificamos que por cada elemento de la lista 1 se hagan los siguientes pasos
        i = 0
        isSubstring = false                                 // Una vez se acaba de listar todos los elementos de la lista 2 volvemos a especificar que isSubstring sea false
        while (i < lista2.length && !isSubstring) {         // Especificamos que por cada elemento de la lista 2 se hagan los siguientes pasos
            if (lista2[i].includes(element)){               // En el caso de que un elemento de la lista 2 contenga un elemento de la lista 1 y que isSubstring sea false continue
                result.push(element)                        // Añadimos el elemento de la lista 1 a la lista result
                isSubstring = true                          // Al haber encontrado una evidencia de que isSubstring el elemento especificamos que isSubstring sea true
            }
            i++
        }                                       
    })
    return result.sort()                                    // Una vez se acaba de listar todos los elementos de la lista 1 devolvemos la lista result con los elementos ordenados alfabéticamente
}



/* 
Variables:

    lista1:
        Lista que tenemos que comparar para saber si isSubstringen en la lista2

    lista2:
        Lista en la que comprobaremos que isSubstringan los elementos de la lista1

    isSubstring:
        Variable que actúa como interruptor para que en la lista result no hayan elementos repetidos

    result:
        Lista de elementos de la lista 1 que isSubstringan en la lista 2
*/


// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
// Se espera ["live", "strong"]
console.log(inArray(a1, a2))

a1 = ["live", "strong", "arp"]
// Se espera ["arp", "live", "strong"]
console.log(inArray(a1, a2))

a1 = ["tarp", "mice", "bull"]
// Se espera[]
console.log(inArray(a1, a2))