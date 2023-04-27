import React, { useContext } from 'react';
import moment from 'moment/moment';
import { Button} from 'react-bootstrap';
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
        </div>
    );
};

export default Header;