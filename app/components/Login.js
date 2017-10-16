import React, {Component} from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        };
    }

    validateForm(){
        return this.state.email.length > 0 && this.state.password.length > 0;
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
                    <Button
                        bsSize="large"
                        bsStyle="primary"
                        disabled={!this.validateForm()}
                        type="submit"
                        block
                    >
                        Login
                    </Button>
                </form>
            </div>
        

        )
    }
}