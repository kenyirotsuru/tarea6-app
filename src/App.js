import React, {useState, useEffect} from 'react';
import Create from './components/todo/Create';
import TodoList from './components/todo/TodoList';
import Axios from 'axios';

function App() {
  
  const url = 'http://localhost:3001';
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const result = await Axios(url + '/');
      setTodos(result.data);
    }catch(err) {
      //Atrapar errores
      console.log(err);
    }
  };

  //manejar los updates del fetch
  useEffect(() => {
    fetchTodos();
  },[todos]);

  const addTodo = (description) => {
    //conectar a bd
    Axios({
      method: 'post', url: url + '/tasks',
      data: {
        description : description
      }
    }).then((_newTask) => {
      fetchTodos();
    }).catch((err) => {
      console.log(err);
    })
  }
  

  const markAsDone = (id) => {    
    //conectar a bd 
    Axios({
      method: 'post', url: url + '/tasks/' + id + '/done',
    }).then((_Task) => {
      fetchTodos();
    }).catch((err) => {
      console.log(err);
    })
  }

  const deleteTask = (id) => {

    //conectar a bd
    Axios({
      method: 'delete', url: url + '/tasks/' + id,
    }).then((_Task) => {
      fetchTodos();
    }).catch((err) => {
      console.log(err);
    })
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