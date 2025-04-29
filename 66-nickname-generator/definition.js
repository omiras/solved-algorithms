// URL problema: https://www.codewars.com/kata/593b1909e68ff627c9000186

function nicknameGenerator(name){
    /** Reescribe con tus palabras y con pseudocódigo qué hay que hacer aquí.  */
    /** S'ha de crear una funció que retorni els primers 3 o 4 caràcters d'una string. En retornarà 3 si el tercer caràcter de la string és consonant i 4 si és una vocal 
    A més si la llargada de la string és menor a 4 caràcters ha de retornar un missatge d'error: "Error: Name too short." 
    
    Què fer?
    Iterar sobre els caràcters de name (string) si aquesta té una length de 4 o més caràcters. Si l'índex 2 és una de les lletres "aeiou" la funció ha de retornar una nova string amb els 4 primers caràcters de name. No cal iterar tota la string. Gràcies a .slice podem extreure els caràcters que necessitem en funció de les condicions que li posem a l'if.
    
    Si l'índex 2 no és una d'aquestes lletres, llavors retornarà una string amb els 3 primers caràcters de name. Per tant haig de crear una variable que guardi els caràcters de la nova string.

    Puc crear una estructura condicional que si la name.length és 4 o superior iteri sobre name i si és menor a 4 directament mostri el missatge d'error. 
    Dins del primer cas haig d'iterar sobre name i acumular les lletres dels índexs corresponents dins la variable. No cal
    Si l'índex 2 és "a", "e", "i", "o", "u", llavors la variable mostrarà els índexs 0 a 3 de name.
    Si l'índex 2 NO és una d'aquestes lletres, la variable només contindrà els índexs 0 a 2 de la string.
    Amb .includes podem verificar si una string conté algun dels caràcters que li especifiquem en una string. Per tant, l'if inclourà aquesta condició
    */
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
