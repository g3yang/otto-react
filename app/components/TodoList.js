import React, {Component, PropTypes} from 'react';
import {Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap';
import API from '../services/API';


const List = ({todos})=>{
    const list = todos.map((todo)=>{
        return (<li>{todo.description}</li>);
    });
    return (<ul>{list}</ul>);
};


export default class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            todo: 'DIU'            
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

    handleSubmit = event => {
        event.preventDefault();
    }

    handleChange = event => {
        console.log(event.target.id);
        this.setState({
            [event.target.id]:event.target.value
        });
    }
    

    render(){
        return (
            <div>
                <form className="Panel" onSubmit={this.onSubmit}>
                    <FormGroup controlId ="todo" bsSize="large">
                        <ControlLabel> New Task </ControlLabel>
                        <FormControl autoFocus type="text" value={this.state.todo}
                         onChange={this.handleChange} />
                    </FormGroup>
                    
                    <button> Add </button>
                </form>
                <List todos = {this.state.todos} />
            </div>
        );
    }
}