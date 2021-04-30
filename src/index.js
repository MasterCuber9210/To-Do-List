import './styles.css';
import { Todo,TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';





const tarea = new Todo('Aprender JavaScript');

const todoList = new TodoList();

// const crearHtml = new crearTodoHtml(tarea);

todoList.nuevoTodo(tarea);
crearTodoHtml(tarea);

console.log(todoList);

