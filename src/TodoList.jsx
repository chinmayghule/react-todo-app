import Todo from "./Todo";
import crypto from 'crypto';

function TodoList({ todoList, toggleTodo }) {
    return (
        <div className="todoList-container">
            {todoList.map(todoItem => {
                
                /*
                let randomUUID;
                if(window !== 'undefined') {
                    randomUUID = window.crypto.randomUUID();
                } else {
                    randomUUID = todoItem;
                }
                */
                
                return (
                    <Todo
                        key={todoItem.id}
                        todoItem={todoItem}
                        toggleTodo={toggleTodo}
                    />
                )
            })}
        </div>
    );
}

export default TodoList;