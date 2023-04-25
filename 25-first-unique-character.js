var firstUniqChar = function(palabra) {
   
	// Recorrer palabra letra por letra
	for (let i = 0; i < palabra.length; i++) {
		// Obtener carácter actual con el método charAt que nos devuelve el carácter individual de la palabra, y convertirlo a minúscula
		let caracterActual = palabra[i];
		// Ver si el primer caracter y el último carácter son iguales		
		if (palabra.indexOf(caracterActual) === palabra.lastIndexOf(caracterActual)) {
			// En caso de que sí que sea igual al último índice, regresamos el índice del carácter de la cadena por la posición del recorrido que vayamos de la palabra.
			return i;
		}
	}
	// Terminamos de recorrer la cadena, y si no encontramos ninguna letra que se repita nos devuelve un -1 
	return -1;

}