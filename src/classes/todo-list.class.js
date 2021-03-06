import { Todo } from "./todo.class";


// Clase encargada de agrupar toda la lista de todo's
export class TodoList {


    constructor(){

        // this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo(todo) {

        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo ( id ) {

        this.todos = this.todos.filter((todo) => todo.id != id);
        this.guardarLocalStorage();

    }

    marcarCompletado ( id ) {
        
        for (let i = 0; i < this.todos.length; i++) {
            const todo = this.todos[i];

            if (todo.id == id) {
                todo.completado = !todo.completado; 
                this.guardarLocalStorage();
            }
            
        }
        
    }

    eliminarCompletados () {

        this.todos = this.todos.filter((todo) => !todo.completado);
        this.guardarLocalStorage();

    }

    guardarLocalStorage () {

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage () {

        this.todos = localStorage.getItem('todo') 
                   ? JSON.parse(localStorage.getItem('todo')) 
                   : [];

        this.todos = this.todos.map( Todo.fromJson );
        // this.todos = this.todos.map( obj => Todo.fromJson(obj)); version larga, pero si solo se manda un argumento se puede resumir

    }

}



