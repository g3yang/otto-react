import React, {Component, PropTypes} from 'react';
import API from '../services/API';


export default class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            todo: {
                description:''
            }
        };
    }

    componentDidMount(){
        API.getTodos().then((res)=>{
            if(res.ok){
                return res.json();
            }
        }).then(data=>{
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    handleChange = event => {
        this.setState({
            [event.target.id]:event.target.value
        });
    }
    

    render(){
        return (
            <div>
                <form className="Panel" onSubmit={this.onSubmit}>
                    <input value = {this.state.todo.description}  onChange={this.handleChange} />
                    <span/>
                    <button> Add </button>
                </form>
            </div>
        );
    }
}