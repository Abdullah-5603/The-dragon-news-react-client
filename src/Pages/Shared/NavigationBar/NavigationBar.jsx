import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className='d-flex justify-content-end'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto w-25 justify-content-between">
                            <Link to='/category/0' className='text-decoration-none text-muted'>Home</Link>
                            <Link to='/about' className='text-decoration-none text-muted'>About</Link>
                            <Link to='/career' className='text-decoration-none text-muted'>Career</Link>
                        </Nav>
                        <Nav className='align-items-center '>
                            {
                                user && <Link className='text-muted me-2'>
                                    <FaUserCircle style={{ fontSize: 30 }} />
                                </Link>
                            }
                            {
                                user  ?
                                    <Button variant="secondary">Sign Out</Button> :
                                    <Link to='/login'>
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;