//toFixed()
let pi = 3.1416;
console.log(pi.toFixed(3))
//parseInt(convierte a un número entero)
console.log(parseInt(pi))
//parseFloat(convierte número a número, o texto a número)
console.log(parseFloat(pi))

//Objeto MATH
//PI
let valorPi = Math.PI;
console.log(valorPi)
//convertir números en string
let numeroTelefono = 4260162
let numeroAString = String(numeroTelefono)
let numeroAStringMetodo = numeroTelefono.toString()
console.log(numeroAString.length);
console.log(numeroAStringMetodo.length);

let nombre = "Gustavo";
// console.log(`El nombre del de al lado es ${nombre}`)
console.log("El nombre de el de al lado es: ", nombre);
console.log(`Habia una vez un chiquito llamado ${nombre} que quería ir a culiar y no podía porque estaba caro.`)
console.log("Habia una vez un chiquito llamado " + nombre + " que quería ir a culiar y no podía porque estaba caro.");