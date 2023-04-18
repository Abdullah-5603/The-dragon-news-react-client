import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error.message))
    },[])

    console.log(categories)
    return (
        <div className='mt-3'>
            <h4>All Category</h4>
            <div className='p-2'>
                {
                    categories.map(category => <p
                    key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary fw-bold'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;