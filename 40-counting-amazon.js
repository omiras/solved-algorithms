// https://www.codewars.com/kata/55b95c76e08bd5eef100001e

function countArara(n) {
    //your code here
    let strArara = [];
    for (let i = n; i>=2; i = i - 2){
       //add adak on array with push method
       strArara.push("adak");
    }
    if ( n%2 != 0){
        //add anane on array with push method
        strArara.push("anane");
    }
     return strArara.join(" ");
    // return array into string with join method
}
    
/* Steps
    1. Creamos una variable tipo array vacía, donde añadiremos las palabras en idioma amazónico resultantes.

    2. Vamos a fraccionar nuestro numero (n), mediante un bucle que haga una cuenta hacia atrás.

    3. Nuestro bucle empezará con i = numero (n), y mientras nuestra n sea superior o igual a 2, ejecutaremos el bucle restando 2 unidades a nuestro numero. De esta manera conseguiremos desgranar de dos en dos el parametro(n) de nuestra función.

    4. Para poder añadir las palabras al array vacío utilizaremos el metodo push a cada iteración realizada por el bucle.

    5. En el caso de los números impares, es decir los números que dan un cociente 1 al dividirlos entre dos, les añadiremos a mayores otro método push, en este caso para incluir la palabra anane.
    
    6. Finalmente el ejercicio nos pide un string. Utilizaremos el método .join para convertir nuestro array en un string y además que nos separe cada elemento del string por espacios
*/





console.log(countArara(1)/* ,"anane" */);
console.log(countArara(3)/* ,"adak anane" */);
console.log(countArara(8)/* ,"adak adak adak adak" */);
console.log(countArara(10)); /* adak * 5*/
console.log(countArara(13)); /* adak * 6 + 1 anane*/
