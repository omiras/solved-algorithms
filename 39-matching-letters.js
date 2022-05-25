// https://www.codewars.com/kata/5912ded3f9f87fd271000120



function countCorrectCharacters(correctWord, guess) {
    // Code here
    /* 
    Tengo que buscar qué coincidencia hay entre las dos palabras, no solo en las letras, sino también en la posicición.

    En primer lugar compruebo que la palabra propuesta tenga la misma cantidad de caracteres que la palabra a adivinar

    Puedo tratar las dos palabras como arrays, pero solo es necesario recorrerlo una vez, ya que no me interesa saber si una letra se encuentra en cualquier lugar de la palabra con la que la comparo, sino si coincide en la misma posición
    
    Es decir para el primer caso ("dog", "car"): 
    la "c" coincide con la "d"?:
    la "a" coincide con la "o"?;
    la "r" coincide con la "g"?;

    Según vaya encontrando coincidencias las iré sumando en una variable y además gardaré las letras que coincidan

    En el caso de que no coincida ninguna o coincidan las 3 letras daré un mensaje, en relación, de lo contrario, mostraré el total de coincidencias y las letras que han coincidido.
    */

    //console.log(guess.length);

    if (guess.length == correctWord.length) {

        const guessW = Array.from(guess); //genero un array de la palabra que voy a comprobar
        let matches = 0; //inicializo una variable para almacenar la cantidad de coincidencias
        let matchesW = []; //inicializo un array para almacenar las letras que han coincidido
        //let output; //me reservo una variable para guardar el mensaje de salida


        guessW.forEach(compareWords);

        function compareWords(item, index) {
            //console.log(item, index);
            if (item == correctWord[index]) {
                matches++;
                matchesW.push(item);
            }
        }


/*         switch (matches) {
            case 0:
                output = "0 (No coincide ninguna letra en la misma posición)"
                break
            case 1:
                output = `1 ("${matchesW[0]}")`
                break
            case 2:
                output = `2 ("${matchesW[0]}") y ("${matchesW[1]}")`
                break
            case 3:
                output = "3 (Correcto!)"
                break
        } */


        
        
        //console.log(output);
        if (matchesW.length == 0){
            console.log(matches);
            return matches;
        } else {
            console.log(matches, matchesW);
            return matches, matchesW; //return matches, matchesW; //podría retornar también output si me interesase llevarme el mensaje 
        }

        
    } else {
        return console.error("La palabra debe tener 3 caracteres");
    }
}

countCorrectCharacters("dog", "elephant");
countCorrectCharacters("dog", "cat"); //0 (No letters are in the correct position)
countCorrectCharacters("dog", "god"); //1 ("o")
countCorrectCharacters("dog", "cog"); //2 ("o" and "g")
countCorrectCharacters("dog", "cod"); //1 ("o")
countCorrectCharacters("dog", "bog"); //2 ("o" and "g")
countCorrectCharacters("dog", "dog"); //3 (Correct!)