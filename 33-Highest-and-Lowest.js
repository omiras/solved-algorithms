/** declaro el metodo "highAndLow" **/

function highAndLow(numbers) {
    /** declaro la variable array donde le hago un split para obtener un arreglo de valores **/

    let array = numbers.split(" ");   // ...

    /** declaro las variables alto y bajo donde se almacenaran los valores finales **/

    let alto;
    let bajo;

    /** recorro el arreglo con un bucle for **/

    for (let index = 0; index < array.length; index++) {

        /** evaluo el elemento actual y lo almaceno en la variable element **/

        const element = array[index];

        /** si la variable es igual a null le asigno el elemento actual **/

        if (alto == null) {
            alto = element;
        } else {
            /** si la variable element es mayor que el valor almacenado en la variable alto le asigno el valor de element a la variable alto **/

            if (element > alto) {
                alto = element;
            }
        }
        console.log(element);

        /** si la variable es igual a null le asigno el elemento bajo **/

        if (bajo == null) {

            bajo = element;

        } else {

            //  si la variable element es menor que el valor almacenado en la variable bajo le asigno el valor de element a la variable bajo 

            if (element < bajo) {
                bajo = element;
            }

        }

    }

    // imprimo por consola el resultado mas alto y mas bajo que deben ser: "7 -3"

    console.log("el mas alto es :", alto);

    console.log("el mas bajo es :", bajo);

    return alto + " " + bajo;
}

let resultado = highAndLow('5 6 4 -3 7 1');
console.log("resultado : ", resultado);