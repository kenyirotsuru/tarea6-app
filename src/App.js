import React, {useState} from 'react';
import Create from './components/todo/Create';
import Index from './components/todo/Index';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (description) => {
    let cTodos = Object.assign([], todos);
    cTodos.push({ description: description, status: 'pending' });
    setTodos(cTodos);
  }

  const markAsDone = (task) => {
    let cTodos = Object.assign([], todos);
    cTodos[task].status = 'done';
    setTodos(cTodos);
  }

  const deleteTask = (task) => {
    let cTodos = Object.assign([], todos);
    cTodos.splice(task, 1);
    setTodos(cTodos);
  }

  return (
    <>
      <h1>Todo list</h1>
      <Create addTodo={addTodo}/>
      <Index todos={todos} markAsDone={markAsDone} deleteTask={deleteTask} />
    </>
  );
}

export default App;