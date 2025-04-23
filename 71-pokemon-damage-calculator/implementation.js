// Lee el enunciado del siguiente algoritmo. 
// URL: https://www.codewars.com/kata/536e9a7973130a06eb000e9f - Kyu 6


function calculateDamage(yourType, opponentType, attack, defense) {
        /** Recuerda que si usas estructuras o herramientas que no hemos visto en clase es posible que tus compañeros y compañeras te pregunten por ellas :) */
        let effectiveness;

        if (yourType === 'fire') {
                switch (opponentType) {
                        case 'grass':
                                effectiveness = 2;
                                break;
                        case 'water':
                                effectiveness = 0.5;
                                break;
                        case 'electric':
                                effectiveness = 1;
                                break;
                        case 'fire':
                                effectiveness = 0.5;
                                break;
                }
        }
        else if (yourType === 'water') {
                switch (opponentType) {
                        case 'grass':
                                effectiveness = 0.5;
                                break;
                        case 'water':
                                effectiveness = 0.5;
                                break;
                        case 'electric':
                                effectiveness = 0.5;
                                break;
                        case 'fire':
                                effectiveness = 2;
                                break;
                }
        }
        else if (yourType === 'grass') {
                switch (opponentType) {
                        case 'grass':
                                effectiveness = 0.5;
                                break;
                        case 'water':
                                effectiveness = 2;
                                break;
                        case 'electric':
                                effectiveness = 1;
                                break;
                        case 'fire':
                                effectiveness = 0.5;
                                break;
                }
        }
        else if (yourType === 'electric') {
                switch (opponentType) {
                        case 'grass':
                                effectiveness = 1;
                                break;
                        case 'water':
                                effectiveness = 2;
                                break;
                        case 'electric':
                                effectiveness = 0.5;
                                break;
                        case 'fire':
                                effectiveness = 1;
                                break;
                }
        }

        return 50 * ( attack / defense ) * effectiveness;


}

console.log(calculateDamage("fire", "water", 100, 100));        // 25
console.log(calculateDamage("grass", "water", 100, 100));       // 100
console.log(calculateDamage("electric", "fire", 100, 100));     // 50
console.log(calculateDamage("grass", "electric", 57, 19));      // 150
console.log(calculateDamage("grass", "water", 40, 40));         // 100
console.log(calculateDamage("grass", "fire", 35, 5));           // 175
console.log(calculateDamage("fire", "electric", 10, 2));        // 250
