import React from 'react';
import {ListGroup} from 'react-bootstrap';
import Todo from './Todo';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadTodos,deleteTodo} from '../actions/todoActions';


class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.loadTodos();
    }

    render(){
       return (
        <ul>
         {
            this.props.todos.map(todo=>(
                <Todo key = {todo.id} description={todo.description}
                 completed={todo.completed} 
                 onToggle={()=>onTodoClick(todo._id)} 
                 onDelete={()=>this.props.deleteTodo(todo._id)}/>
            ))
         }
        </ul>
       )
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadTodos: ()=> dispatch(loadTodos()),
        deleteTodo: (id) => dispatch(deleteTodo(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);