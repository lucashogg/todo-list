const showModal = () => {
    const addTodoModal = document.querySelector('.add-todo-modal');
    const addTodoBtn = document.querySelector('#add-todo');

    addTodoBtn.addEventListener('click', () => {
        addTodoModal.showModal();
    });
}

export default showModal;