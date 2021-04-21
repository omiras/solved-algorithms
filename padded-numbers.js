// La función debe retornar un string, con un número de 5 carácteres siempre. Tenemos
// que añadir a la izquierda del número tantos ceros como sean necesarios para conseguir
// que el número tenga 5 dígitos

function solution(value){
    // El 'value' que obtenemos, tenemos que insertar tantos 0 como sean necesarios
   // a su izquierda para obtener un número de 5 dígitos. 
   // Puede ser interesante transformar este número 'value' a un string
   let digits = value.toString().length
   let valueStr = value.toString()

   // voy a crear un bucle que se va ejecutar tantas veces como 0s necesitemos poner
   for (let i = digits; i<5; i++) {
       valueStr = '0' + valueStr
   } 


   // cuando tengamos el número formateado con 5 dígitos, lo vamos a concatenar con el
   // string "Value is"
   return "Value is " + valueStr
 }

 console.log(solution(5))
 //"Value is 00005"