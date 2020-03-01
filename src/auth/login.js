import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from "axios";

export function Login(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(null);

    function onEmailChange(e){
        setEmail(e.target.value);
    };
    
    function onPasswordChange(e){
        setPassword(e.target.value);
    };

    function handleSubmit(e){
        e.preventDefault();

        axios.post('http://localhost:3000/auth/login', {
              email: email,
              password: password
          },
          {            
            headers: {
              'Content-Type': 'application/json'
          }
          })
          .then(res => {
            if (res.status === 200) {
                localStorage.setItem('token', res.data.auth_token);
                props.history.push("/home");
                window.location.reload(false);
          }
          }).catch(err => console.log(err));
    };
    
    return(
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={onEmailChange}/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={onPasswordChange} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Giriş yap
        </Button>
     </Form>
     </div>
    );
}