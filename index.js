let nombre1 = "Gemma";
let apellido = "Batlle";

let estudiante = nombre1 + " " + apellido;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);

var numLetrasEstudiante = estudiante.length;
console.log(numLetrasEstudiante);

var primeraLetra = estudiante.charAt(0);
console.log(primeraLetra);

var ultimaLetra = estudiante.charAt(numLetrasEstudiante-1);
console.log(ultimaLetra);

let estudianteSinEspacios = estudiante.replace(/\s/, "");
console.log(estudianteSinEspacios);

var contieneNombre = estudiante.includes(nombre1);
console.log(contieneNombre);


