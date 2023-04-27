import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { FaCalendarAlt } from 'react-icons/fa';
import moment from 'moment';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <div>
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
            <Row xs={1} md={1} className="g-4 mt-3">
          <Col>
            <Card>
              <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>Editor Unknown</Card.Title>
              </Card.Body>
              <div className='mb-2'>
                <FaCalendarAlt className='mx-3'/>
                {moment().format('MMMM DD, YYYY')}
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={second} />
              <Card.Body>
                <Card.Title>Editor Unknown</Card.Title>
              </Card.Body>
              <div className='mb-2'>
                <FaCalendarAlt className='mx-3'/>
                {moment().format('MMMM DD, YYYY')}
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={third} />
              <Card.Body>
                <Card.Title>Editor Unknown</Card.Title>
              </Card.Body>
              <div className='mb-2'>
                <FaCalendarAlt className='mx-3'/>
                {moment().format('MMMM DD, YYYY')}
              </div>
            </Card>
          </Col>
      </Row>
        </div>
    );
};

export default LeftNav;