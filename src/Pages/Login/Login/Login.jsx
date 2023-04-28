import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { signInUser, loading, setLoading } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0'

    const handleSubmit = event => {
        event.preventDefault();
        // console.log(event.target.email.value)
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('Login Successfully')
                setLoading(false)
                navigate(from, {replace: true})
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    const handleTogglePassword = () => {
        setShow(!show)
    }

    return (
        <>
            <div className='my-3'>
                {
                    loading && <Loader />
                }
            </div>
            <Container className='w-25 mx-auto my-5 p-5 bg-light'>
                <h3 className='text-center mb-4'>Login Your Account</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control name='email' required type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <div style={{ position: 'relative' }}>
                            <Form.Control type={show ? "text" : "password"} placeholder="Enter your password" name="password" required/>
                            <span style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '10px',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                    zIndex: '1'
                                }} onClick={handleTogglePassword}> {show ? <FaEyeSlash /> : <FaEye />}</span>
                        </div>
                    </Form.Group>
                    <Button className='w-100 mt-3 mb-2' variant="dark" type="submit">
                        Login
                    </Button>
                    <Form.Group className='mb-2'>
                        <Form.Text className='text-black'>
                            Don't have An Account? <Link className='text-decoration-none text-danger' to='/signin'>Register</Link>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Text className='text-success'>
                            {success}
                        </Form.Text>
                        <Form.Text className='text-danger'>
                            {error}
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
};

export default Login;