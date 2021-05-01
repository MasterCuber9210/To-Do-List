import './styles.css';
import { Todo,TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';





const tarea = new Todo('Aprender JavaScript');

export const todoList = new TodoList();

// const crearHtml = new crearTodoHtml(tarea);

todoList.nuevoTodo(tarea);
todoList.marcarCompletado(tarea.id);

crearTodoHtml(tarea);

console.log(todoList);

