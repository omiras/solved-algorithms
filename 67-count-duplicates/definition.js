// URL: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
    /** Reescribe con tus palabras y con pseudocódigo qué hay que hacer aquí.  */
    /**
    La funció recorre la string text. És convenient fer que aquesta estigui .toLowerCase.
    Ha de retornar el nombre de lletres diferents que es repeteixen (si a es repeteix i b també, retornarà 2)
    Això vol dir que si un dels índexs es repeteix, és a dir una lletra es troba a més d'una posició, la variable counter s'incrementa.
    Aquesta pot ser un objecte en el qual li anem afegint keys que siguin els diferents caràcters.
    Crear variable = {} que compti els caràcters de text

    Si aquest objecte té caràcters repetits necessitem una altra variable que els guardi.
    Aquestes variables són objectes buits. Creem un loop i dins d'aquest fem que busqui la variable char de la string que li donem.
    characterCounter conté cada caràcter que compta el loop. Cada nou caràcter de la string suma 1 i els que no apareixen tenen un valor de 0.
    Si algun dels caràcters de characterCounter apareix més d'un cop el guardem a repeatedCharacters amb el nombre de repeticions. És a dir, rpeatedCharacters guarda les vegades que algun dels caràcters es repeteix.
    Finalment només és qüestió de retornar la llargada de les keys que té l'objecte repeatedCharacters. Si té 2 keys, vol dir que s'han repetit dues lletres.
    */


}

console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2 ('a' y 'b')
console.log(duplicateCount("aabBcde")); // 2 ('a' y 'b')
console.log(duplicateCount("indivisibility")); // 1 ('i')
console.log(duplicateCount("Indivisibilities")); // 2 ('i' y 's')
console.log(duplicateCount("aA11")); // 2 ('a' y '1')
console.log(duplicateCount("ABBA")); // 2 ('A' y 'B')
console.log(duplicateCount("mississippi")); // 3 ('i', 's' y 'p')
console.log(duplicateCount("1122334455")); // 5 ('1', '2', '3', '4', '5')
console.log(duplicateCount("abcdefghijklmnopqrstuvwxyz")); // 0 (sin repetidos)
console.log(duplicateCount("aAbBcCdD")); // 4 ('a', 'b', 'c', 'd')
