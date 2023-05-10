function getFirstPython(list) {
  const pythonDeveloper = list.find((developer) => developer.language === "Python");
  return pythonDeveloper ? `${pythonDeveloper.firstName}, ${pythonDeveloper.country}` : "There will be no Python developers";
}

var list1 = [
  { firstName: "Mark", lastName: "G.", country: "Scotland", continent: "Europe", age: 22, language: "JavaScript" },
  { firstName: "Victoria", lastName: "T.", country: "Puerto Rico", continent: "Americas", age: 30, language: "Python" },
  { firstName: "Emma", lastName: "B.", country: "Norway", continent: "Europe", age: 19, language: "Clojure" },
];

var list2 = [
  { firstName: "Kseniya", lastName: "T.", country: "Belarus", continent: "Europe", age: 29, language: "JavaScript" },
  { firstName: "Amar", lastName: "V.", country: "Bosnia and Herzegovina", continent: "Europe", age: 32, language: "Ruby" },
];

console.log(getFirstPython(list1));
console.log(getFirstPython(list2));

//El método find() busca el primer elemento de un array que cumpla con una condición específica.

/*
La constante "pythonDeveloper" utiliza el método find()
para buscar el primer desarrollador Python del array.
Luego, utilizando el operador ternario, se verifica
si la constante "pythonDeveloper" es verdadera y,
en caso afirmativo, la función devuelve una string que contiene
el nombre y el país del desarrollador.
En caso contrario, devuelve un mensaje informando
que no hay desarrolladores de Python en la lista.
  */
