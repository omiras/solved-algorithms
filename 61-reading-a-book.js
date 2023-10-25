/**
 *
 * Reading a Book. Kyu 7
 *
 * https://www.codewars.com/kata/570ca6a520c69f39dd0016d4/
 *
 * John reading a book, When he met a word that he had never read, he will read the word spelling, each letter(not for punctuation,number, only letter) takes 1 second; If he have read the word, he will read the word, each word takes 1 second.
 * 
 * Give you a parameter words(Each word is separated by space)
 * 
 * Return a number that how many seconds John can finish reading.
 */


function sc(words) {
  // guardar palabras detectadas en un array
  const readWords = [];

  // controlar el tiempo
  let totalTime = 0;

  // detectar si el caracter es una letra porque si es numero o un signo de puntiación, no lo deletrea y pasarlo todo a minúsculas
  // ASÍ NO FUNCIONA: const caractersToErase = /[\d\p{P}\p{S}]/u;
  const caractersToErase = /[^a-z\s]/gi;
  const onlyLetters = words.replace(caractersToErase, '').toLowerCase();
  
  // detectar cuando hay una palabra --> grupo de caracteres separados por un espacio ' '
  const wordsFounded = onlyLetters.split(/\s+/);
  
  for (word of wordsFounded) {
    // si conoce la palabra, tarda 1s en leerla
    if (readWords.includes(word)) {
      totalTime++;
    } else {
      // Si no conoce la palabra, tarda 1s por caracter porque la tiene que deletrear
      totalTime += word.length;
      // la añadimos al array de palabras leidas
      readWords.push(word);
    }
  }
  // devolver cuantos segundos tarda en leer el texto
  return totalTime;
}

// Ambos console.log deben dar lo mismo

console.log(sc("Hello World!"), 10);
console.log(sc("black cat and white cat all are cat"), 24);
console.log(sc("black cat and white cat all are CAT"), 24);
var words1 =
  "Related Articles: Ruby Environment, CoffeeScript Environment, JavaScript Environment, Python Environment, Haskell Environment, Java Environment, Clojure Environment, .NET Environment.";
console.log(sc(words1), 86);
var words2 =
  "Related Articles: Ruby Environment, Coffee Script Environment, Java Script Environment, Python Environment, Haskell Environment, Java Environment, Clojure Environment, .NET Environment.";
console.log(sc(words2), 78);
console.log(sc("Don't ask me. I don't know."), 15);