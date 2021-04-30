import './styles.css';
import { Todo,TodoList } from './classes';




const tarea = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Comprar un unicornio');

const todoList = new TodoList(tarea);

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);
console.log(todoList);

