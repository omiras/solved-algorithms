// Lee el enunciado del siguiente algoritmo. 
// URL: https://www.codewars.com/kata/536e9a7973130a06eb000e9f - Kyu 6


function calculateDamage(yourType, opponentType, attack, defense){
        /** Reescribe con tus palabras y con pseudocódigo qué hay que hacer aquí. También te puedes valer de dibujos o esquemas para enseñarlos a clase. NO escribir código JavaScript  */
        /* establecer la jerarquia de tipos (si fuego pierde contra agua etc) 
           calcular la effectiveness
           aplicar la formula


           ejemplo con fuego:

           miramos si yourtype es fire, después:
                si opponentType es water guardamos la effectiveness a 0.5 (porque es inefectivo)
                si opponentType es grass guardamos la effectiveness a 2 (porque es muy efectivo)
                si opponentType es electric guardamos la effectiveness a 1 (porque es neutro)
                si opponentType es fire guardamos la effectiveness a 0.5 (porque es inefectivo al ser del mismo tipo)
        */


}

calculateDamage("fire", "water", 100, 100);        // 25
calculateDamage("grass", "water", 100, 100);       // 100
calculateDamage("electric", "fire", 100, 100);     // 50
calculateDamage("grass", "electric", 57, 19);      // 150
calculateDamage("grass", "water", 40, 40);         // 100
calculateDamage("grass", "fire", 35, 5);           // 175
calculateDamage("fire", "electric", 10, 2);        // 250
