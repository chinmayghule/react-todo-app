function Todo({ todoItem, toggleTodo }) {
    
    function handleTodoClick() {
        toggleTodo(todoItem.id);
    }
    
    return (
        <div className="todoItem">
            <label>
                <input
                    type="checkbox"
                    onChange={handleTodoClick}
                    checked={todoItem.completed}
                />
                <div>{todoItem.content}</div>
            </label>
        </div>
    );
}

export default Todo;