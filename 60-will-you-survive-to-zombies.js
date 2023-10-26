/** 
 * Un algoritmo al más puro estilo Plantas contra Zombies
 * 
 * Enunciado: https://www.codewars.com/kata/5deeb1cc0d5bc9000f70aa74 Kyu 7

  Los zombis comienzan a metros de alcance y se mueven a 0,5 metros por segundo. 
  Cada segundo, primero disparas a un zombi, y luego los zombis restantes avanzan otros 0,5 metros.

  Escribe una función que acepte el número total de zombis, un rango en metros y el número de balas que tienes.

  MUERTE
  - Si algún zombi logra llegar a 0 metros, te comen.
  - Si te quedas sin munición antes de disparar a todos los zombis, también te comerán.

  VICTORIA  
  - Si disparas a todos los zombis antes de que lleguen a tí.

  ¡Buena suerte! (Creo que lo vas a necesitar.)  

*/

////////////
//// WHILE
////////////

function zombieShootout(zombies, range, ammo){


  let zombiMove = 0.5;
  let howMuchZombies = zombies;
  
    while((zombies > 0) && (range > 0) && (ammo > 0)){
      ammo--;
      zombies--;
      range = range - zombiMove;
    };
  
    if(zombies <= 0){
      return `You shot all ${howMuchZombies} zombies.`;
    } else if(range <= 0){
      return `You shot ${howMuchZombies - zombies} zombies before being eaten: overwhelmed`;
    } else if(ammo <= 0) {
      return `You shot ${howMuchZombies - zombies} before being eaten: ran out of ammo.`;
    };
  
  };
  
  
  // console.log(zombieShootout(3, 10, 10)); //"You shot all 3 zombies."
  // console.log(zombieShootout(100, 8, 200)); //"You shot 16 zombies before being eaten: overwhelmed."
  // console.log(zombieShootout(50, 10, 8)); //"You shot 8 zombies before being eaten: ran out of ammo."
  
  ////////////
  //// DO WHILE
  ////////////
  
  // function zombieShootout(zombies, range, ammo){
  
  //   let zombiMove = 0.5;
  //   let howMuchZombies = zombies;
    
  //     if(ammo === 0){
  //       return `You shot 0 before being eaten: ran out of ammo.`;
  //     }
  
  //     do{
  //       ammo--;
  //       zombies--;
  //       range = range - zombiMove;
  //     }while((zombies > 0) && (range > 0) && (ammo > 0));
    
  //     if(zombies <= 0){
  //       return `You shot all ${howMuchZombies} zombies.`;
  //     } else if(range <= 0){
  //       return `You shot ${howMuchZombies - zombies} zombies before being eaten: overwhelmed`;
  //     } else if(ammo <= 0) {
  //       return `You shot ${howMuchZombies - zombies} before being eaten: ran out of ammo.`;
  //     };
    
  //   };
    
    
    //console.log(zombieShootout(3, 10, 10)); //"You shot all 3 zombies."
    //console.log(zombieShootout(100, 8, 200)); //"You shot 16 zombies before being eaten: overwhelmed."
    //console.log(zombieShootout(50, 10, 8)); //"You shot 8 zombies before being eaten: ran out of ammo."