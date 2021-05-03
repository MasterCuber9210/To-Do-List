import './styles.css';
import { TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';






export const todoList = new TodoList();

todoList.todos.forEach(todo => {
    crearTodoHtml(todo);
});

// Esto es lo mismo pero mas simplificado
// todoList.todos.forEach(crearTodoHtml); Esta forma funciona si y solo si, se manda solo 1 argumento a la  funcion o metodo

// console.log(todoList.todos);

