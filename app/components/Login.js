import React, {Component, PropTypes} from 'react';
import {Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap';
import {API} from '../config';
import Auth from '../services/Auth';

export default class Login extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            email:"",
            password:"",
            errors:[]
        };
    }

    login(){

        fetch(`${API}/token`, {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then((res)=>{
           if(res.ok){
               res.json().then(obj=>{
                    Auth.setToken(obj.token);
                    this.context.router.history.replace('/contact');                    
               });
           }else{
               res.json().then(obj=>{
                   let errors = this.state.errors;
                   errors.push(obj.error_message);
                   this.setState({
                       errors:errors
                   });
               });
           }
        });
    }

    validateForm(){
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit = event => {
        event.preventDefault();
        this.login();
    }

    handleChange = event => {
        this.setState({
            [event.target.id]:event.target.value
        });
    }
    
    render(){
        let error;

        if(this.state.errors.length>0){
            error = <Alert bsStyle="danger"> 
                      <p>{this.state.errors[0]}</p>
                    </Alert>;
        } 

        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId ="email" bsSize="large">
                        <ControlLabel> Email </ControlLabel>
                        <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup controlId ="password" bsSize="large">
                        <ControlLabel> Password </ControlLabel>
                        <FormControl autoFocus type="password" value={this.state.password} onChange={this.handleChange} />
                    </FormGroup>
                    {error}
                    <Button
                        bsStyle="primary" bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                               
                </form>
            </div>
        

        )
    }

    static contextTypes = {
        router: PropTypes.object.isRequired
    }
}


