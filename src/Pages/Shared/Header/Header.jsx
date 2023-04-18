import React from 'react';
import moment from 'moment/moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div className='mt-5'>
            <div className="text-center">
                <img src="/src/assets/logo.png" alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format('dddd, MMMM D YYYY')}</p>
            </div>
            <div className='d-flex bg-secondary p-1'>
                <Button variant='danger'>Latest</Button>
                <Marquee className='text-dark mx-3' speed={50} gradient={false}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className='d-flex justify-content-end'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto align-items-end">
                            <Nav.Link href="">Home</Nav.Link>
                            <Nav.Link href="">About</Nav.Link>
                            <Nav.Link href="">Career</Nav.Link>
                        </Nav>
                        <Nav className='align-items-end'>
                            <Button variant="secondary">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;