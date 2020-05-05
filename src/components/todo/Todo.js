import React from 'react'

const Todo = ({todo, markAsDone, deleteTask}) =>{
    const handleMarkAsDone = (event, index) => {
        markAsDone(index);
    }

    const handleDelete = (event, index) => {
        deleteTask(index);
    }

    return (
        <tr style={{backgroundColor: todo.status === 'pending' ? 'white' : 'grey'}}>
            <td>#{todo.id}</td>
            <td>{todo.description}</td>
            <td>
                {todo.status === 'pending' && (
                    <input type="button" 
                        value="terminado?" 
                        onClick={(event) => handleMarkAsDone(event, todo.id)}
                    />
                )}
                <input type="button" 
                    value="eliminar" 
                    onClick={(event) => handleDelete(event, todo.id)}
                />
            </td>
        </tr>
    )
}

export default Todo;