/**
 * Tengo que comprobar si en una frase compuesta por carácteres alfanuméricos hay algun caracter que se repita independientemente de si son letras mayúsculas o números, y 
 * si es así entonces contar las veces que aparecen diferentes carácteres.
 * Primero lo que hago es pasar todo a minúsculas, una vez que tengo toda la frase en letras minúsculas, reviso qué caracteres se repiten y los apunto aparte (en otra lista)
 * 
 * Antes de apuntarlos en la nueva lista, me fijo si el caracter nuevo que voy a apuntar ya existe en la lista nueva, si es así no lo apunto ya que solo me interesa saber el número de caracteres que se repiten, no cuantos se repiten.
 *  
 *
 */
function duplicateCount(text) {

    //transformo el string a lowercase y en array
    array = text.toLowerCase().split("")

    //declaro el array nuevo donde voy a apuntar los elementos repetidos
    let duplicates = []

    //recorro el array
    for (let i = 0; i < array.length; i++) {

        //compruebo si el elemento se repite más veces en el array
        if (array.indexOf(array[i]) != array.lastIndexOf(array[i])) {

            //compruebo que el elemento no exista ya en el array y si no existe, lo agrego
            duplicates.indexOf(array[i]) < 0 ? duplicates.push(array[i]) : false
        }
    }

    return duplicates.length

}