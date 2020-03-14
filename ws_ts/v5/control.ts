// Ejemplos Javascript
// Estructuras de control
// autor: Rubby Casallas. Universidad de los Andes. Colombia. 2020.
//--------------------------------------
console.log('Estructuras de control');
console.log('Estructuras de control condicionales');
// if ... else


// if ... else if ... else


// switch 


console.log('------------------------------------');

console.log('Estructuras de control ciclos');

let cuentas: Array<number> = [123.4, 56.8, 90.3];

// while
let i: number = 0;
let suma: number = 0;
while (i < cuentas.length) {
    suma += cuentas[i];
    i++;
}
console.log(suma);
// for 
suma = 0;
for (let j: number = 0; j < cuentas.length; j++) {
    suma += cuentas[j];
}
console.log(suma);

//--------

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

let vehiculos: Array<Vehiculo> = [new Vehiculo(1, 'Dodge', 'Grand Caravan', 1994, 'WBABN53452P672584'),
new Vehiculo(2,'Buick','Coachbuilder',1995,'WAUWFAFR9AA954095'),
new Vehiculo(3,'Volvo','XC70',2008,'WAUHGAFC0CN058717'),
new Vehiculo(4,'Audi','S4',2005,'1G4HR54K424671728'),
new Vehiculo(5,'Mitsubishi','Montero Sport',2002,'5TFCW5F1XBX047846'),
new Vehiculo(6,'Honda','Accord',2010,'WBALZ5C54CC332269'),
new Vehiculo(7,'Toyota','Prius',2009,'WVWAA7AJ3CW803789'),
new Vehiculo(8,'Saab','9-3',2003,'YV4612HM9F1029474'),
new Vehiculo(9,'Jaguar','X-Type',2002,'WBANW5C50AC270660'),
new Vehiculo(10,'Volkswagen','Passat',1986,'WBA3A5C5XDJ866431')];

for (let i:number = 0; i< vehiculos.length;i++){
    console.log(vehiculos[i].desplegar());
}



