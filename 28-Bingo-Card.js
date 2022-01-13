// After yet another dispute on their game the Bingo Association decides to change course and automize the game.
// Can you help the association by writing a method to create a random Bingo card?

// Task:
// Finish method: getCard()
// A Bingo card contains 24 unique and random numbers according to this scheme:
// 5 numbers from the B column in the range 1 to 15
// 5 numbers from the I column in the range 16 to 30
// 4 numbers from the N column in the range 31 to 45
// 5 numbers from the G column in the range 46 to 60
// 5 numbers from the O column in the range 61 to 75

// The card must be returned as an array of Bingo style numbers:
// { 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... }
// The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

function getCard(){
 var card = []

 //La funcion random genera valores aleatorios unicos, los introduce en un array y los devuelve. 
 //Para ello, usamos 4 parametros (min,max,numbers,letter); 'min' determina el valor minimo del numero aleatorio
 //mientras que 'max', su maximo; 'numbers' determina la cantidad de numeros que generara, y 'letter', la letra que 
 //antepondremos al numero.

 function random(min,max,numbers,letter){

 //Declaramos el array en el que vamos a almacenar los valores
 var arr = [];

  //Utilizamos un bucle para introducir los valores en el array mientras su total sea inferior a 'numbers'
  while(arr.length < numbers){

   //Utilizamos Math.random para generar un valor entre 0 y 1, y lo multiplicamos por la diferencia entre 'max' y 'min'
   //para asegurarnos un valor entre 0 y el maximo; finalmente le sumamos el 'min' para evitar el valor 0, y lo asignamos a 'r'
   var r = letter + Math.floor((Math.random() * (max - min) + min))

    //Usamos un if para comprobar si el numero que obtuvimos ya se encuentra en el array. El metodo de array indexOf
    //busca el valor de 'r', y si no lo encuentra, devuelve un -1, tras lo cual, usamos el metodo push para añadir el valor
    //de r a la ultima posicion del array 
    if(arr.indexOf(r) === -1) arr.push(r);
  }
  return arr


 }
 
 //Finalmente, llamamos al metodo random con los parametros que consideremos, y utilizamos el metodo de array concat para unir
 //los array que obtenemos e introducirlos en el array 'card'
 card = card.concat(random(1,15,5,'B'))
 card = card.concat(random(16,30,5,'I'))
 card = card.concat(random(31,45,4,'N'))
 card = card.concat(random(46,60,5,'G'))
 card = card.concat(random(61,75,5,'O'))

 return card 
}

console.log(getCard())

//Math.random()              ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Math.floor()               ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
//Array.prototype.indexOf()  ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//Array.prototype.push()     ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
//Array.prototype.concat()   ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat