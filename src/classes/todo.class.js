
// clase encargada de crear nuevas instancias de tareas
export class Todo {

    static fromJson({tarea,id,completado,creado}) {

        const todoTemp = new Todo(tarea);
        todoTemp.id = id;
        todoTemp.completado = completado;
        todoTemp.creado = creado;

        return todoTemp;
        
    }

    constructor( tarea ) {

        this.tarea = tarea;

        this.id         = new Date().getTime(); //Genera un numero para la hora exacta y se puede usar como id
        this.completado = false;
        this.creado     = new Date();
        
    }
}

