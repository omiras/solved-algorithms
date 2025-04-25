// URL problema: https://www.codewars.com/kata/593b1909e68ff627c9000186

function nicknameGenerator(name) {
    /** Por favor, no uses estructuras o herramientas que no hemos visto en clase  */

    // S'ha de crear una funció que retorni els primers 3 o 4 caràcters d'una string. En retornarà 3 si el tercer caràcter de la string és consonant i 4 si és una vocal 
    // A més si la llargada de la string és menor a 4 caràcters ha de retornar un missatge d'error: "Error: Name too short." 
    let nickname = "";
    // Què fer?
    // Iterar sobre els caràcters de name (string) si aquesta té una length de 4 o més caràcters. INNECESSARI
    if (name.length < 4) {
        errorMessage = "Error: Name too short.";
        return errorMessage;
    }
    if ("aeiou".includes(name[2])) {
        nickname = name.slice(0, 4);
    } else {
        nickname = name.slice(0, 3);
    }
    return nickname;
    
    // Si l'índex 2 és una de les lletres "aeiou" la funció ha de retornar una nova string amb els 4 primers caràcters de name.
    // Si l'índex 2 no és una d'aquestes lletres, llavors retornarà una string amb els 3 primers caràcters de name. Per tant haig de crear una variable que guardi els caràcters de la nova string.


    // Puc crear una estructura condicional que si la name.length és 4 o superior iteri sobre name i si és menor a 4 directament mostri el missatge d'error. 
    // Dins del primer cas haig d'iterar sobre name i acumular les lletres dels índexs corresponents dins la variable.
    // Si l'índex 2 és "a", "e", "i", "o", "u", llavors
    // la variable mostrarà els índexs 0 a 3 de name.
    // Si l'índex 2 NO és una d'aquestes lletres, la variable només contindrà els índexs 0 a 2 de la string.
    // No cal crear la variable nickname perquè es pot retornar name.slice directament.
    
}

console.log(nicknameGenerator("Robert")); // "Rob"
console.log(nicknameGenerator("Kimberly")); // "Kim"
console.log(nicknameGenerator("Samantha")); // "Sam"
console.log(nicknameGenerator("Jeannie")); // "Jean"
console.log(nicknameGenerator("Douglas")); // "Doug"
console.log(nicknameGenerator("Gregory")); // "Greg"
console.log(nicknameGenerator("Al")); // "Error: Name too short"
console.log(nicknameGenerator("Tom")); // "Error: Name too short"
console.log(nicknameGenerator("Alex")); // "Alex" (porque 'e' es vocal)
console.log(nicknameGenerator("Chris")); // "Chr" (porque 'r' es consonante)
console.log(nicknameGenerator("Emma")); // "Emma" (porque 'm' es consonante)
console.log(nicknameGenerator("Ian")); // "Error: Name too short"
