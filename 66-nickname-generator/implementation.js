// URL problema: https://www.codewars.com/kata/593b1909e68ff627c9000186

function nicknameGenerator(name){
    /** Por favor, no uses estructuras o herramientas que no hemos visto en clase  */
    let result = "";
    if (name.length < 4) {
        return "Error:Name too short";
    }
    else {
        let i = 0;
        while (i < 3) {
            result += name[i];
            i++;
        }
        if ("aeiou".includes(name[2])) {
            result += name[3];
        }
        return result;
    }
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
