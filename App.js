import React from 'react';
import CreateTodoForm from './CreateTodoForm';
import useTodos from './useTodos';
import './App.css';

const App = () => {
  const [todos,addTodo,setTodoCompleted,resetTodos] = useTodos();
  return (
    <div className="App">
      <div className="todo-container">
        <h2>Your Todos</h2>
        <hr />
        {todos.map(todo => (
          <div className="todo">
            <p>{todo.label}</p>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={()=>setTodoCompleted(todo.id,!todo.completed)}
              />
              </div>
        ))}
      </div>
      <CreateTodoForm createNewTodo={addTodo} resetList={resetTodos}/>
    </div>
  )
}

export default App;
