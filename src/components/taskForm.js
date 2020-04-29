import React , { Component } from 'react';
import '../App.css';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';

class taskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    handChange = (e) => {
        this.setState({
            value: {title: e.target.value, isComplete: Math.random() >= 0.5}
        })
    }

    handleSubmit = (e) => {
        this.props.onSubmit(this.state.value)
        e.preventDefault();
    }

    render() {
        
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                <InputGroup>
                    <Input 
                        type="text" 
                        name="name" 
                        placeholder="Nhập công việc..." 
                        onChange={this.handChange}
                    />
                    <InputGroupAddon addonType="append">
                    <Button color="secondary">Add</Button>
                    </InputGroupAddon>
                </InputGroup>
                </FormGroup>
            </Form>
        )
    }
}

export default taskForm;