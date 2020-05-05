import React, {useState} from 'react';
import Create from './components/todo/Create';
import TodoList from './components/todo/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (description) => {
    //
  }

  const markAsDone = (task) => {
    //
  }

  const deleteTask = (task) => {
    //
  }

  return (
    <>
      <h1>Todo list</h1>
      <Create addTodo={addTodo}/>
      <TodoList todos={todos} markAsDone={markAsDone} deleteTask={deleteTask} />
    </>
  );
}

export default App;