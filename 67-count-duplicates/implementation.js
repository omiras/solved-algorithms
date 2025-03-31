// URL: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){
    /** Por favor, no uses estructuras o herramientas que no hemos visto en clase  */
    text = text.toUpperCase();
    let count = 0;
    let lista = [];
    let listarepes = []
    for (letra of text) {
        if (!lista.includes(letra)) {
            lista.push(letra);
        }
        else if (lista.includes(letra) && !listarepes.includes(letra)) {
            count++;
            listarepes.push(letra)
        }
    }
    return count;
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

