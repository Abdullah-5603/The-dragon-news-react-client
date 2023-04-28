import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>My terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa enim quas ex unde cum, alias placeat veniam nulla ipsa expedita rem debitis! Veniam soluta perspiciatis iure libero hic. Blanditiis, rerum.</p>
            <p>Go back to <Link to='/signin'>Register</Link></p>
        </div>
    );
};

export default Terms;