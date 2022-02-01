

function repeatStr (n, s) {
  // declaro variable -a- q será el string resultado
    let resultado = '';
    // cuando el valor sea desde 0 a -n- se sumara uno más cada vez
    for(let i = 0; i < n; i++){
      //suma lo q "vale" -a- + lo q "vale" -s-
      resultado += s;
    }
  return resultado; // devuelve el valor de la variable a 
}
  
  
  //repeatStr(6, "I") // "IIIIII"
  //repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));


/*en realidad valdría con:
function repeatStr (n, s) {
  return s.repeat(n);
}*/



//const repeatStr = (n, s) => s.repeat(n);
