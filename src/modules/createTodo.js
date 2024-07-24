const createTodo = () => {
    class Todo {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }
    }

    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const dueDate = document.querySelector('#dueDate');
    const priority = document.querySelector('#priority');

    const newTodo = new Todo(title.value, description.value, dueDate.value, priority.value);

    console.log(newTodo);
}

export default createTodo;