import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

const Todo = ({onToggle, completed, description, onDelete})=>{
    var todoClass = completed?"done":"undone";
    return (
        <li className="list-group-item">
            <div className = {todoClass}>
                <span className="glyphicon glyphicon-ok icon" aria-hidden="true">
                </span>
                {description}
                <button type="button" className="close" onClick={onDelete}>&times;</button>
            </div>
        </li>
    )
}

export default Todo;