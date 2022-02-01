/**
 * ? Necesitamos crear una función que al pasarle el array convierta los strings en números secuenciales para eso usamos el método: string.charCodeAt(index) que nos devuelve el valor UNICODE(ver tabla) de un string, index es la posición del elemento que queremos devolver, si no lo rellenamos, por default aplicará el 0.
 * */

//* Del siguiente array detectar cuál letra falta según el abecedario:
let array = ["a", "b", "c", "d", "f"];

function missChar(array) {

  //* 1.- Declaramos una variable que nos devuelva el valor UNICODE del primer string del array ya que desde él empezará el orden secuencial.
  let firstString = array[0].charCodeAt(); // Ej: Resultado para "a" = 41

  //* 2.- Para recorrer el array usaremos un for: Inicializamos a cero el recorrido hasta un valor menor de la longitud del array y luego incrementamos en uno.
  for (let i = 0; i < array.length; i++) {

    //* 3.- Ahora debemos condicionar que: Solo si el UNICODE del primer string sumado al incremento es DISTINTO al valor UNICODE del string ubicado en la posición i, retornarlo.
    if (firstString + i !== array[i].charCodeAt()) {

      //* 4.- Para retornar cuando se cumple la condición usaremos el método String.fromCharCode() que hace lo inverso al otro método, este devuelve el string que corresponde al UNICODE que le pasemos.
      return String.fromCharCode(firstString + i);
    }
  }
}
//* 5.- Mostramos en pantalla la función con los valores del array
console.log("Del array " + "[" + array + "]," + " falta la letra " + missChar(array));
