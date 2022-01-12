function validSpacing(s) {
    // write your code here
    //Creamos una expresión, que determina que: Si el string empieza por un espacio, o si termian por un por un espacio, o si contiene más de dos espacios.
    let pattern = /(^\s|\s$|\s{2,})/
    // Evaluamos el string ('s'), buscando que no coincida con la expresión regular
    return !(pattern.test(s));
  }
  