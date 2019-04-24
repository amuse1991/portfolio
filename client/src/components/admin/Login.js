import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Login extends React.Component{
    render(){
        <Form>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Password" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    }
}