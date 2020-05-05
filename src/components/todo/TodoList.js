import React, { useState } from 'react';
import Todo from './Todo'

const TodoList = ({todos, markAsDone, deleteTask }) => {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, i) => {
            return (
              <Todo key={i} todo={todo} markAsDone={markAsDone} deleteTask={deleteTask} />
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;