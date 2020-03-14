// Ejemplos Javascript
// Tipos de datos primitivos
// autor: Rubby Casallas. Universidad de los Andes. Colombia. 2020.

// Tipo de datos: enumeraciones, arreglos y tuplas

let tipoDatoEstr : string ;

console.log('Tipo de datos: enumeraciones, arreglos y tuplas');
console.log("---------------------------------");
tipoDatoEstr = 'enum';
console.log(`Tipos primitivos: ${tipoDatoEstr}`);


// Declarar una enumeración

enum Continentes  {
    Americano = 1,
    Europa,
    Africa,
    Oceania,
}


let miContinente : Continentes = Continentes.Americano;


console.log(`Mi continente es ${miContinente}`); 

 miContinente  = Continentes.Oceania;

console.log(`Mi continente es ${miContinente}`);

console.log("---------------------------------");
tipoDatoEstr = 'arreglos';
console.log(`Tipos primitivos: ${tipoDatoEstr}`);

// Declarar un arreglo
let cuentas : Array<number> = [123.4,56.8,90.3];


let cuentas2 : number[] = [123.4,56.8,90.3];

console.log(`Las cuentas son : ${cuentas}`);

cuentas.push(34.6);

console.log(`Las cuentas son : [${cuentas}]`);

console.log(`EL número de elementos en las cuentas son : ${cuentas.length}`);

console.log(`El índice donde está el elemento "34.6" es: ${cuentas.indexOf(34.6)}`);

console.log("---------------------------------");
tipoDatoEstr = 'tuplas';
console.log(`Tipos primitivos: ${tipoDatoEstr}`);

// Declarar una tupla

let estudiante:[ number, string,  boolean] = [1, 'María Ramos',  true];

console.log(`El estudiante actual es ${estudiante}`);

console.log(`El estudiante actual es Nombre: ${estudiante[0]}, Id:${estudiante[1]}, Está activo: ${estudiante[2]? 'Sí': 'No'} `);

estudiante[2] = false;

console.log(`El estudiante actual es Nombre: ${estudiante[1]}, Id: ${estudiante[0]}, Está activo: ${estudiante[2]? 'Sí': 'No'} `);

let estudiantes:[ number, string,  boolean] []= [[1, 'María Ramos',  true]];

estudiante = estudiantes[0];
console.log(`El estudiante  ${estudiante[0]} es Nombre: ${estudiante[1]}, Está activo: ${estudiante[2]? 'Sí': 'No'} `);

estudiantes.push([2, 'Alba Avila',  false]);
estudiante = estudiantes[1];
console.log(`El estudiante ${estudiante[0]}  Nombre: ${estudiante[1]}, Está activo: ${estudiante[2]? 'Sí': 'No'} `);
console.log(`${estudiantes[1][1]}`);


