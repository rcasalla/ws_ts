// Ejemplos Javascript
// Tipos de datos primitivos
// autor: Rubby Casallas. Universidad de los Andes. Colombia. 2020.

// Tipo de datos: objetos y clases

class Estudiante {
    id: number;
    nombre: string;
    activo: boolean;

    constructor(idE: number, nombreE: string, activoE: boolean) {
        this.id = idE;
        this.nombre = nombreE;
        this.activo = activoE;
    }
    estaActivo(): boolean {
        return this.activo;
    }

    activar(): void {
        this.activo = true;
    }

    desplegar(): void {
        console.log(`El estudiante ${this.id} de nombre "${this.nombre}" ${this.activo?'sí':'no'} está activo`);
    }
}


let e1 : Estudiante =  new Estudiante(1, 'Luis Dorado', false);

e1.activar(); 

e1.desplegar();  


