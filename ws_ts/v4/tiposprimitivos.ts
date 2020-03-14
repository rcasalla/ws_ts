// Ejemplos Javascript
// Tipos de datos primitivos
// autor: Rubby Casallas. Universidad de los Andes. Colombia. 2020.

// Tipo de datos string
// valor de un string: 

console.log('Hola Mundo');
 
// Comillas dobles
let tipoDato: string = "string";
console.log(tipoDato);

// Comillas sencillas
tipoDato = 'string';
console.log(tipoDato);
 
// Comillas dentro de comillas
let tagDiv = "<div class=\"panel\">...</div>";
console.log(tagDiv);

// Comillas simples con comillas dobles
tagDiv = '<div class="panel">...</div>';
console.log(tagDiv);

// Comillas invertidas o acento grave. Plantillas literales ES6

// Cadena de caracteres con salto de línea

console.log("esta es una primera línea y \nesta es una segunda línea ");

console.log(`esta es una primera línea y 
esta es una segunda línea `);

console.log("---------------------------------");
// Variables dentro de la cadena de texto 
console.log(`Tipos primitivos: ${tipoDato}`);

let nombre: string = 'Juan';
let apellido: string = 'Rulfo';

let nombreApellido: string = nombre + apellido;
console.log(nombreApellido);

nombreApellido = nombre + ' ' + apellido;
console.log(nombreApellido);

console.log(nombre.concat(apellido));

console.log(`longitud de nombreApellido ${nombreApellido.length}`);

console.log(`longitud de "${nombreApellido}" ${nombreApellido.length}`);

let sliceNombre: string = nombreApellido.slice(0, nombreApellido.indexOf(" "));

console.log(`Nombre en "${nombreApellido}" es "${sliceNombre}" `);

console.log(`Nombre en Mayusculas ${nombre.toUpperCase()}`);
// Lo mismo para Apellido 

// ---------------------------------------------
// Tipo de datos numéricos
console.log("---------------------------------");
tipoDato = 'number';
console.log(`Tipos primitivos: ${tipoDato}`);

// Valores numéricos literales

console.log(10);

console.log(3.14159);

let varNumerica: number = 10;
console.log(`varNumerica ${varNumerica}`);


let operando1: number = 20;
let operando2: number = 5;

operando1++;
console.log(`Incrementar ${operando1}`);

operando2--;
console.log(`Decrementar ${operando2}`);

operando1 -= 1;
console.log(`Asignación -= ${operando1}`);

operando2 += 1;
console.log(`Asignación += ${operando2}`);

// Operadores aritméticos binarios

let resultado: number = 0;

resultado = operando1 + operando2;
console.log(`Sumar: ${resultado}`);

resultado = operando1 - operando2;
console.log(`Restar:  ${resultado}`);

resultado = operando1 * operando2;
console.log(`Multiplicar: ${resultado}`);

resultado = operando1 / operando2;
console.log(`Dividir:   ${resultado}`);

resultado = operando1 % operando2;
console.log(`Residuo:  ${resultado}`);

let otroNumero: number = 10.34;

console.log(`Precisión 2 dígitos:   ${otroNumero.toPrecision(2)}`);
;
console.log(`Exponencial:  ${otroNumero.toExponential(2)}`);

// ---------------------------------------------
// Tipo de datos booleanos
console.log("---------------------------------");
tipoDato = 'boolean';
console.log(`Tipos primitivos: ${tipoDato}`);

// Valores boleanos literales

console.log(false);
console.log(true);

let estaEntendiendo: boolean = true;

console.log(`Está entendiendo, ${estaEntendiendo}`);

// Operadores lógicos

// Negación 
estaEntendiendo = !estaEntendiendo;
console.log(`Está entendiendo, ${estaEntendiendo}`);

let otroBooleano: boolean = true;
let resultadoBool: boolean;

// AND

resultadoBool = estaEntendiendo && otroBooleano;
console.log(`Resultado &&, ${resultadoBool}`);

// OR

resultadoBool = estaEntendiendo || otroBooleano;
console.log(`Resultado ||, ${resultadoBool}`);

// Operadores de Comparación
console.log('Operadores de Comparación');
console.log(`Igualdad ${operando1 == 24}`);

console.log(`Diferente ${operando1 == 24}`);

console.log(`Igualdad ${operando1 == 20}`);

console.log(`Mayor igual ${operando1 >= 20}`);

// Operador ternario
console.log('Operador ternario condición ? valor1 : valor2');

console.log(operando1 >= 20 ? operando1 : 20 - operando1);

operando1 = 15;

console.log(operando1 >= 20 ? operando1 : 20 - operando1);

 
console.log(operando1 >= 20 ? operando1 : `le falta ${20 - operando1} para 20`);

// Any, undefined, null

let varTipoDesconocido : any;  
console.log(`variable varTipoDesconocido cuyo valor es:  ${varTipoDesconocido}`); 

varTipoDesconocido = true; // es un boolean
console.log(`variable varTipoDesconocido cuyo valor es:  ${varTipoDesconocido}`); 
varTipoDesconocido = 5.56; // es un número
console.log(`variable varTipoDesconocido cuyo valor es:  ${varTipoDesconocido}`); 

console.log(`variable varTipoDesconocido cuyo valor es:  ${varTipoDesconocido} le calculamos toPrecision(1) ${varTipoDesconocido.toPrecision(1)}`); 
varTipoDesconocido = 'es una cadena'
console.log(`variable varTipoDesconocido cuyo valor es:  ${varTipoDesconocido}`); 

// varTipoDesconocido.toPrecision(1); // error en ejecución


// null y undefined

let nuevaVariable: number;

console.log(`variable nuevaVariable cuyo valor es:  ${nuevaVariable}`); // Valor undefined

nuevaVariable = null; 

console.log(`variable nuevaVariable cuyo valor es:  ${nuevaVariable}`); // Valor null

nuevaVariable++; 

console.log(`variable nuevaVariable cuyo valor es:  ${nuevaVariable}`); // Valor 1

// void 

let varVoid : void = undefined ; 

console.log(`variable varVoid cuyo valor es:  ${nuevaVariable}`); // Valor undefined

// varVoid = 5;   error en compilación

