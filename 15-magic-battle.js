

player1 = [[1, 1], [2, 1], [2, 2], [5, 5]]
player2 = [[1, 2], [1, 2], [3, 3] ]
battle(player1, player2) // { 'player1': [[5, 5]], 'player2': [[1, 2], [3, 3]] }

//necesitamos una funcion que compare cada criatura de cada jugador

/*Cada criatura solo puede luchar una vez, por lo tanto, el bucle que recorrera
      solo tenemos que preocuparnos por recorrer la array más corta, los sobrantes de la larga no importan*/

    /*en cada iteracion del bucle, se comparara el atk con la def del rival.
      si el atk >= def, la criatura del rival se tendra q destruir. la misma comprobacion se hace al reves, con el rival.*/

    /*si tocamos la length de la array en medio del blucle nos cargaremos el bucle en si y causara errores.
      por lo tanto, en vez de eliminar, crearemos 2 arrays auxiliares, donde guardaremos las criaturas q sobreviven.
      de esta forma, nos da igual si el eliminado esta entre medio de dos eliminados o no, se guardara. solo tendremos q preocuparnos
      de guardar los extras sobrantes de la array más larga*/


    /*Otro metodo para eliminar facilmente los derrotados es modificar el atk y/o def de estos a 0. y entonces despues eliminar todos las criaturas con
      alguno de estos valores en 0*/
      
      
//metodo 1      
function battle(player1, player2){

    //iniciar variables auxiliares que necesitaremos
    var count   = (player1.length >= player2.length) ? player2.length : player1.length //guardar la que tiene el valor length mas pequeño
    var aux1 = [] //array auxiliar para player1
    var aux2 = [] //array auxiliar para player1

    //bucle para comparar cada objeto de la array
    for(let i = 0; i < count ; i++){

        //comparar el atk del player1 con la def del player2
        if(player1[i][0] < player2[i][1]){
            //guardar en el auxiliar la criatura del player2 ya que su def era mas alta
            aux2.push(player2[i])
        }
        //comparar el atk del player2 con la def del player1
        if(player2[i][0] < player1[i][1]){
            //guardar en el auxiliar la criatura del player1 ya que su def era mas alta
            aux1.push(player1[i])
        }


    }

    //comprobar que no sobren criaturas sin luchar por la diferencia de tamaño del array
    if(count < player1.length){
        for(var i = count; i < player1.length; i++){
            aux1.push(player1[i])
        }

    }
    if(count < player2.length){
        for(var i = count; i < player2.length; i++){
            aux2.push(player2[i])
        }

    }

    //el print en consola. Si no sabes que hace, estudia
    console.log("player1:", aux1)
    console.log("player2:", aux2)

    //player1 = aux1
    //player2 = aux2

    return {"player1": aux1, "player2": aux2}
}


//metodo 2
function battle2(player1, player2){

    
    //iniciar variables auxiliares que necesitaremos
    var count   = (player1.length >= player2.length) ? player2.length : player1.length //guardar la que tiene el valor length mas pequeño

    for(let i = 0; i < count ; i++){

        //hacemos la comprobacion al reves. antes mirabamos si habia sobrevivido para guardarlo, pero ahora miramos si lo ha matado para marcarlo
        if(player1[i][0] >= player2[i][1]){
           player2[i][1] = 0; //cambiamos la def a 0 para indicar que se tiene q eliminar
        }
        if(player2[i][0] >= player1[i][1]){
            player1[i][1] = 0; //cambiamos la def a 0 para indicar que se tiene q eliminar
        }


    }

    //filtramos en cada array todos los que no tengan 0 en su defensa, ya que estan MUERTOS
    const survPlayer1 = player1.filter(creature => {
        return creature[1] != 0
    })
    const survPlayer2 = player2.filter(creature => {
        return creature[1] != 0
    })

    console.log("player1:", survPlayer1)
    console.log("player2:", survPlayer2)

    //player1 = aux1
    //player2 = aux2
   
    return  {"player1": survPlayer1, "player2": survPlayer2}
}
function battle(player1, player2) {
 
    let result1 = player1.filter((card, index) => {
      return !player2[index] || card[1]>player2[index][0]
    })
 
    let result2 = player2.filter((card, index) => {
      return !player1[index] || card[1]>player1[index][0]
    })
 
    return {'player1': result1, 'player2': result2}
 
 
  }