import React from 'react';

const Todo = ({onClick, completed, description})=>{
    return (
        <li onClick={onClick} 
             style={{
                textDecoration: completed ? 'line-through' : 'none'
             }}>
            {description}
        </li>
        
    )
}

export default Todo;