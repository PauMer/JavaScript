console.log('comillas simples')
console.log("comillas dobles")
let nombre = "David"
console.log(`Mi mentor se llama ${nombre}`);
//
//Propiedad length
var nombreDeEña= 'Dinora';
console.log(nombreDeEña.length)
//MÉTODOS
//trim()
let especialidad = "   desarrollo web ";
console.log(especialidad.trim());
//toUpperCase()
let mayusculas = 'hola'
console.log(mayusculas.toUpperCase())
//toLowerCase()
let minusculas = 'PAULA'
console.log(minusculas.toLowerCase())
//concat(), se puedenagregar más de una cadena de texto o variable
let cadena1 = 'Bienvenido'
let cadena2 = 'JavaScript'
console.log(cadena1.concat(' ',cadena2));
//indexOf(valor, indice)
let titulo = 'tecnologías web: HTML, CSS, JavaScript'
console.log(titulo.indexOf('t', 2))
//lastIndexOf()
console.log(titulo.lastIndexOf('t'));
//substring(posición inicial, posición final)
let mensaje = 'Este es un mensaje'
console.log(mensaje.substring(11, 18))
//substr(posición inicial, número de caracteres)
console.log(mensaje.substr(11,7));
//slice(usa números negativos)
console.log(mensaje.slice(-7));
//convertir un string a número
let edadUsuario = prompt('¿cuál es tu edad?')
console.log(typeof edadUsuario)
let funcionNumber = console.log( Number(edadUsuario))
metodoParseInt = console.log( parseInt(edadUsuario))
metodoParseFloat = console.log( parseFloat(edadUsuario))