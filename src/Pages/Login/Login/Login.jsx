import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleSubmit = event => {
        console.log(event)
    }

    return (
        <Container className='w-25 mx-auto my-5 p-5 bg-secondary'>
            <h3 className='text-center mb-4'>Login Your Account</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control name='email' required type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control name='password' required type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button className='w-100 mb-2' variant="dark" type="submit">
                    Login
                </Button>
                <Form.Group className='mb-2'>
                    <Form.Text className='text-black'>
                        Don't have An Account? <Link className='text-decoration-none text-danger' to='/signin'>Register</Link>
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Text className='text-success'>

                    </Form.Text>
                    <Form.Text className='text-danger'>

                    </Form.Text>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Login;