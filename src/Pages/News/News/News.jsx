import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const news = useLoaderData();
    const { title, image_url, details, _id, category_id, published_date } = news;

    return (
        <div>
            <Card className='mt-3'>
                <Card.Img className='p-3' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft className='mx-2' /> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <h3 className='my-3'>Editors Insight</h3>
            <EditorsInsight title={title}
            published_date={published_date}
            ></EditorsInsight>
        </div>

    );
};

export default News;