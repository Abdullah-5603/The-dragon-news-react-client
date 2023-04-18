import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <div className="d-flex flex-column">
                <h2>Login with</h2>
                <Button className='my-2' variant="outline-primary"><FaGoogle className='mx-2' /> Login with Google</Button>
                <Button className='my-2' variant="outline-secondary"><FaGithub className='mx-2' />Login with Github</Button>
            </div>
            <div className='mt-3'>
                <h2>Find us on</h2>
                <ListGroup className='mt-2'>
                    <ListGroup.Item><FaFacebook className='mx-2'/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='mx-2'/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='mx-2'/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone/>
            <div>
                <img src="/src/assets/bg.png" alt="" />
            </div>
        </div>
    );
};

export default RightNav;