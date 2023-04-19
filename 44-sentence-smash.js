function danielAplasta(palabra) {  /*(palabra/Es un argumento)arguments es un objeto similar a Array accesible dentro de funciones que contiene los valores de los argumentos pasados a esa función. *fuentes: developer.mozilla*/
   let sentence = 
   
   ""; 
  
   for (let i = 0; i < palabra.length; i++) { /* (.length)Esta propiedad devuelve el número de caracteres de una cadena, en este caso tiene la cantidad de caracteres que se agregen cuando se invoca la función.*/
      sentence += palabra[i]; /* en esta expreción se le indica a cada caracter del argumento que se sumen a la variable sentence*/
      
   if (i !== palabra.length - 1) {
      sentence += " "; //
      }
   }
  
   return sentence;
};

console.log(danielAplasta(["Hablame", "Mi","Pana"])); //Aqui esta exprezando el resultado de sentence que seria algo parecido a console.log(sentence = "Habla", "Mi","Pana"); que son las palabras que se han agregado a esta variable en cada iteración.
console.log(danielAplasta(["Qué", "vaina", "es?"])); 
console.log(danielAplasta(["Hago", "Paddings", "a", "bajo", "costo"])); 




// function smash(words) {
//    let sentence = "";
  
//    for (let i = 0; i < words.length; i++) {
//       sentence += words[i];
      
//       if (i !== words.length - 1) {
//          sentence += " ";
//       }
//    }
  
//    return sentence;
// };

// console.log(smash(["hello", "world"])); // "hello world"
// console.log(smash(["hello", "amazing", "world"])); // "hello amazing world";
// console.log(smash(["this", "is", "a", "really", "long", "sentence"])); // "this is a really long sentence");