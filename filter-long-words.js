// A partir de una frase y un número n, devuelve una lista de palabras mas grandes que el valor n.

// 1. Convertir la frase de String a  un Array de palabras
// 2. Recorrer todas las palabras del Array de palabras buscando cuantas letras tiene cada palabra cada palabra del String 
// 3. Si el número de letras es mayor a n incluïr en la nueva Array 

//Opcion 1
function filterLongWords(sentence, n) {
    var sentenceSplit = sentence.split(' ');                //Convertir la frase de String a Array
    //console.log(sentenceSplit);                           //Comprobar si el String ahora és un Array
    let filteredWords = []                                  //Variable para almacenar el array con las palabras filtradas
        for(var i = 0; i < sentenceSplit.length; i++){      //Recorrer todos los elementos del array con un for 
            var word = sentenceSplit[i];                    //Guardar en la variable word la palabra del array que se esta iterando
            var number = word.split("").length;             //Dividir letra a letra en el string de word y guardar en la variable number su longitud de caracters//Dividir letra a letra el string de word y guardar en la variable number su longitud de caracters
            if(number > n){                                 //Si numbes es mayor que el valor n añadir al Array con push
            filteredWords.push(word);                       //Añadir al array con push
                    }
        }  
     console.log(filteredWords)
    return filteredWords;
  }
//filterLongWords("The quick brown fox jumps over the lazy dog", 4) 
/*
//Opcion 2
function filterLongWords(sentence, n){
    var newArray =[]
    var splitSentence =  sentence.split(' ');
    splitSentence.forEach(element => {                      //Aplicar for each para recorrer todos los elementos en vez de un for
       let number = element.split("").length > n;           //Utilizar un booleano en vez de un número
        if (number == true){                                
        	newArray.push(element);
        }
    });
  return newArray
}
filterLongWords2("The quick brown fox jumps over the lazy dog", 4) 
*/

/**
 * 1. Aplicamos split a 'sentence', y obtenemos un array de tantas posiciones como palabras
 * 2. Filtramos dicho array para quedarnos solo con las palabras que cumplen que su tamaño es mayor a 'n'
 */
function filterLongWords3(sentence , numCharacters) {
  return sentence.split(' ').filter(word => {
    return word.length > numCharacters
  })
}

console.log(filterLongWords3("The quick brown fox jumps over the lazy dog", 4))