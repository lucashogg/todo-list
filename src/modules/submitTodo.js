// Imports
import createTodo from "./createTodo";

const submitTodo = () => {
    const submitTodoBtn = document.querySelector('#submit-todo-btn');

    submitTodoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        createTodo();
    })
}

export default submitTodo;