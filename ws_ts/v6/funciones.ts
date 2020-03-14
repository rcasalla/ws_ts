// Ejemplos Javascript
// Estructuras de control
// autor: Rubby Casallas. Universidad de los Andes. Colombia. 2020.
//--------------------------------------
console.log('Funciones');

function imprimir1() : void {
    console.log('Hola mundo');
   }

function imprimir(aImprimir : string) : void {
 console.log(aImprimir);
}

imprimir1();
imprimir('Otra vez Hola mundo');

function sumar(op1: number, op2:number) : number{
return op1 + op2;
}

console.log(sumar(3,4));

let varRestar : any = function restar(op1: number, op2:number) : number{
    return op1 - op2;
    };

console.log(varRestar(4,3));
console.log(varRestar);

let varMult = (op1:number,op2:number) => op1*op2;
 
console.log(varMult(10,2));

console.log(varMult);

function calculadora(op1:number, op2:number, operador:any) : number {
    return operador(op1,op2);
}
 
console.log(calculadora(10,2,varMult));