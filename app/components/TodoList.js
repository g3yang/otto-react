import React from 'react';
import Todo from './Todo';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/todoActions';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.actions.loadTodos();
    }

    render(){
       return (
        <ul>
         {
            this.props.todos.map(todo=>(
                <Todo key = {todo.id} description={todo.description} completed={todo.completed} onClick={()=>onTodoClick(todo.id)} />
            ))
         }
        </ul>
       )
    }
}
/**
const TodoList = ({todos, onTodoClick})=>(
    <ul>
        {
            todos.map(todo=>(
                <Todo key = {todo.id} description={todo.description} completed={todo.completed} onClick={()=>onTodoClick(todo.id)} />
            ))
        }
    </ul>
);
*/

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);