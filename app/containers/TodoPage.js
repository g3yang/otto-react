import React, {Component, PropTypes} from 'react';
import API from '../services/API';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

export default class TodoPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [],
        };
    }

    componentDidMount(){
        API.getTodos().then((res)=>{
            if(res.ok){
                return res.json();
            }
        }).then(data=>{
            this.setState({
                todos:data
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render(){
        return (
            <div> 
                <TodoList todos = {this.state.todos} clickFunc={()=>{}} />
            </div>
        )
    }
}