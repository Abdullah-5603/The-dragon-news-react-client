import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { FaCalendarAlt } from 'react-icons/fa';
import moment from 'moment';

const EditorsInsight = ({title, published_date}) => {
    return (
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
              </Card.Body>
              <div className='mb-2'>
                <FaCalendarAlt className='mx-3'/>
                {moment(published_date).format('MMMM DD, YYYY')}
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={second} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
              </Card.Body>
              <div className='mb-2'>
                <FaCalendarAlt className='mx-3'/>
                {moment(published_date).format('MMMM DD, YYYY')}
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={third} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
              </Card.Body>
              <div className='mb-2'>
                <FaCalendarAlt className='mx-3'/>
                {moment(published_date).format('MMMM DD, YYYY')}
              </div>
            </Card>
          </Col>
      </Row>
    );
};

export default EditorsInsight;