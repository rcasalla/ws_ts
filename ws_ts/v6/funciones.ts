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
console.log('---------------------');
console.log('Operador =>');
let varMult = (op1:number,op2:number) => op1*op2;
 
console.log(varMult(10,2));

console.log(varMult);
console.log('---------------------');
console.log('Función como parámetro');
console.log(`function calculadora(op1:number, op2:number, operador:any) : number {
    return operador(op1,op2);
}`);
function calculadora(op1:number, op2:number, operador:any) : number {
    return operador(op1,op2);
}
console.log(calculadora(10,2,varMult));

//-----------
console.log('---------------------');
console.log('Funciones de alto orden');
class Vehiculo {
    id: number;
    fabricante: string;
    modelo: string;
    anio: number;
    vin: string;
    constructor(id: number, fabricante: string, modelo: string, anio: number, vin: string) {
        this.id = id;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.anio = anio;
        this.vin = vin;
    }
    desplegar(): string {
        return ` 
        id: ${this.id}  
        fabricante: ${this.fabricante}
        modelo: ${this.modelo}
        año: ${this.anio}
        vin: ${this.vin}`;
    }
}

let vnehiculos: Array<Vehiculo> = [new Vehiculo(1, 'Dodge', 'Grand Caravan', 1994, 'WBABN53452P672584'),
new Vehiculo(2, 'Buick', 'Coachbuilder', 1995, 'WAUWFAFR9AA954095'),
new Vehiculo(3, 'Volvo', 'XC70', 2008, 'WAUHGAFC0CN058717'),
new Vehiculo(4, 'Audi', 'S4', 2005, '1G4HR54K424671728'),
new Vehiculo(5, 'Mitsubishi', 'Montero Sport', 2002, '5TFCW5F1XBX047846'),
new Vehiculo(6, 'Honda', 'Accord', 2010, 'WBALZ5C54CC332269'),
new Vehiculo(7, 'Toyota', 'Prius', 2009, 'WVWAA7AJ3CW803789'),
new Vehiculo(8, 'Saab', '9-3', 2003, 'YV4612HM9F1029474'),
new Vehiculo(9, 'Jaguar', 'X-Type', 2002, 'WBANW5C50AC270660'),
new Vehiculo(10, 'Volkswagen', 'Passat', 1986, 'WBA3A5C5XDJ866431')];

vnehiculos.forEach(v => console.log(v.desplegar()));
let nuevosIds : Array <Vehiculo>;
vnehiculos.forEach(v => v.id += 100);

vnehiculos.forEach(v => console.log(v.desplegar()));

vnehiculos.reverse();
vnehiculos.forEach(v => console.log(v.desplegar()));

console.log(vnehiculos.find(v => v.fabricante == 'Honda').desplegar());
