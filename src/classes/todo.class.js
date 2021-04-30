
// clase encargada de crear nuevas instancias de tareas
export class Todo {


    constructor( tarea ) {

        this.tarea = tarea;

        this.id         = new Date().getTime(); //Genera un numero para la hora exacta y se puede usar como id
        this.completado = false;
        this.creado     = new Date();
        
    }
}

