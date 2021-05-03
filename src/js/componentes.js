import {Todo} from '../classes';
import {todoList} from '../index';

//Referencias HTML
const divTodoList      = document.querySelector('.todo-list');
const txtInput         = document.querySelector('.new-todo');
const btnRmCompletados = document.querySelector('.clear-completed');
const ulFiltros        = document.querySelector('.filters');
const anchorFiltros    = document.querySelectorAll('.filtro');


export const crearTodoHtml = ( todo ) => {


    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;


}

// Eventos

txtInput.addEventListener('keyup', (event) => {

    if (event.key === 'Enter' && txtInput.value != '') {
        // code for enter
        const newTodo = new Todo(txtInput.value); // creates a new ToDo instance
        crearTodoHtml(newTodo); // triggers the html li for the new ToDo
        todoList.nuevoTodo(newTodo); //sends the new todo to the todo list
        txtInput.value = ''; //resets the input
    }

});

divTodoList.addEventListener('click', (event)=> {

    const nombreElemento = event.target.localName; //input, label y button
    const todoElemento   = event.target.parentElement.parentElement; //obtains li element
    const todoId         = todoElemento.getAttribute('data-id') ;// gets the daata-id info

    if (nombreElemento.includes('input')) {

        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed'); //toggles the class. adding it and removing

    } else if (nombreElemento.includes('button')) {

        todoList.eliminarTodo(todoId); //eliminates the todo from the array
        divTodoList.removeChild(todoElemento); // removes the html element asociated

    }
    
    // console.log(event.target.localName);
    // console.log(event.target.parentElement.parentElement);
    // console.log(todoId);

})

btnRmCompletados.addEventListener('click', () => {

    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length-1; i >= 0; i--) {
        const todo = divTodoList.children[i];

        if (todo.classList.contains('completed')) {
            divTodoList.removeChild(todo);
        }
        
    }
    
})

ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;

    if (!filtro) { return;}

    anchorFiltros.forEach(element => {
        element.classList.remove('selected');
    });

    for (const elemento of divTodoList.children) {
        
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Completados':

                event.target.classList.add('selected');
                
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;
            
            case 'Pendientes':

                event.target.classList.add('selected');
                
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;
        }
        
    }

    
})