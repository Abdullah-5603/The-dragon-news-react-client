import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Loader from '../../Shared/Loader/Loader';

const Register = () => {
    const { createUser, setUser, loading, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        // console.log(event.target.email.value)
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setSuccess('Registered successfully')
                setLoading(false)
            })
            .catch(error => {
                const errorMessage = error.message;
                if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                    setError('This Account already exists. Please Login')
                    setSuccess('')
                    setLoading(false)
                }
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
                <h3 className='text-center mb-4'>Register Your Account</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Your Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Photo url</Form.Label>
                        <Form.Control name='photo_url' type='text' placeholder="Enter your photo url" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control name='email' required type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <div style={{ position: 'relative' }}>
                            <Form.Control type={show ? "text" : "password"} placeholder="Enter your password" name="password" required />
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
                    <Form.Group className="my-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Terms & Conditions" />
                    </Form.Group>
                    <Button className='w-100 mb-2' variant="dark" type="submit">
                        Register
                    </Button>
                    <Form.Group className='mb-2'>
                        <Form.Text className='text-black'>
                            Already have An Account? <Link className='text-decoration-none text-danger' to='/login'>Login</Link>
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

export default Register;