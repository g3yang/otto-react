import React, {Component, PropTypes} from 'react';
import API from '../services/API';

export default class TodoList extends Component{
    constructor(props){
        super(props);
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

    render(){
        return (
            <h1> Todo List </h1>
        );
    }
}