import { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";


const LOCAL_STORAGE_KEY = "todoApp.todoList";

function App() {

  const [todoList, setTodoList] = useState(() => {
    return JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY) ) || [];
  });

  const todoNameRef = useRef();

  
  /*
  useEffect(() => {
    const storedTodoList = JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY) );

    setTodoList(storedTodoList);

  }, []);
  */
  
  useEffect(() => {
    localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify(todoList) );

  }, [todoList]);
  

  function toggleTodo(id) {
    const newTodoList = [...todoList];
    const todo = newTodoList.find(todo => (todo.id === id));

    todo.completed = !todo.completed;

    setTodoList(newTodoList);

  }


  function handleAddTodo(e) {
    const newTodoContent = todoNameRef.current.value;

    if (newTodoContent === "") return;

    setTodoList(prevTodoList => {
      let randomUUID;
      
      if (window !== 'undefined') {
        randomUUID = window.crypto.randomUUID();
      } else {
        randomUUID = todoItem;
      }

      return [...prevTodoList, {
        id: randomUUID,
        content: newTodoContent,
        completed: false
      }];
    });

    todoNameRef.current.value = null;
  }


  function handleClearTodoList() {
    const newTodoList = todoList.filter(todoItem => !todoItem.completed);

    setTodoList(newTodoList);

  }

  return (
    <div className="todo-app-container">
      <TodoList todoList={todoList} toggleTodo={toggleTodo} />

      <input
        type="text"
        ref={todoNameRef}
      />

      <button
        onClick={handleAddTodo}
        className="add-todo-item">
        Add Todos
      </button>

      <button
        onClick={handleClearTodoList}
        className="clear-completed-todo-items">
        Clear Completed Todos
      </button>

      <div className="todo-items-remaining">
        {todoList.filter( todoItem => !todoItem.completed ).length} left to do
      </div>
    </div>
  );
}

export default App;
