//Usar tres metodos por cada tipo de dato visto (string, number, bool, object, array). 

//STRING

//1. charAt 
//Devuelve el caracter en la posicion especifica de una cadena 

let str = "Hola";
console.log(str.charAt(1)); // "j"

//2. toUpperCase()
//Convierte todos los caracteres de una cadena a mayúsculas.

let stri = "hola";
console.log(str.toUpperCase()); // "HOLA MUNDO"

//3. includes()
//Comprueba si una cadena contiene otra cadena.

let strin = "Hola mundo";
console.log(str.includes("mundo")); // true


//NUMBER

//1. toFixed()
// Formatea un número utilizando notación de punto fijo.

let num = 11607.83;
console.log(num.toFixed(2)); // "11607.83"

//2. parseInt(string)
//Convierte una cadena a un número entero


let numStr = "11607";
console.log(parseInt(numStr)); // 11607

//3. toString()
//Convierte un número a una cadena.

let numb = 11607;
console.log(num.toString()); // "11607"

//BOOLEAN 

//1. Boolean(value)
// Convierte un valor a su valor booleano.

let value = 0;
console.log(Boolean(value)); // false

//2. toString()
//Convierte un valor booleano a una cadena.

let bool = true;
console.log(bool.toString()); // "true"

//3. valueOf()
//Devuelve el valor primitivo de un objeto Boolean.

let boolObj = new Boolean(false);
console.log(boolObj.valueOf()); // false

//OBJECT

//1. Object.keys(obj)
//Devuelve un array con los nombres de las propiedades enumerables de un objeto.

let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ["a", "b", "c"]

//2. Object.assign(target, ...sources)
// Copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino.

let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }

//3. Object.values(obj)
// Devuelve un array con los valores de las propiedades enumerables de un objeto.

let obje = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [1, 2, 3]


//ARRAY

//1. push(element)
//Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

//2. map(callback)
//Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array.

let arra = [1, 2, 3];
let newArr = arr.map(x => x * 2);
console.log(newArr); // [2, 4, 6]

//3. filter(callback)
//Crea un nuevo array con todos los elementos que cumplan con la condición implementada por la función proporcionada.

let array = [1, 2, 3, 4];
let filteredArr = arr.filter(x => x > 2);
console.log(filteredArr); // [3, 4]
