import React from 'React';
import {Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap';


export default class AddTodo extends React.Component{
    constructor(){
        super();
        this.state = {
            newTask:{
                description:''
            }
        };
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    
    
    changeNewTask = event => {
        let newTask = this.state.newTask;
        newTask.description = event.target.value;
        this.setState({
            newTask
        });
    }

    render(){
        return (
            <form className="Panel" onSubmit={this.onSubmit}>
                <FormGroup controlId ="todo" bsSize="large">
                    <ControlLabel> New Task </ControlLabel>
                    <FormControl autoFocus type="text" value={this.state.newTask.description}
                    onChange={this.handleChange} />
                </FormGroup>
                <button> Add </button>
            </form>
        )

    }
}