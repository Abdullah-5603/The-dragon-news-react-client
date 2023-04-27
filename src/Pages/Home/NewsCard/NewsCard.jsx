import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaRegBookmark, FaRegEye, FaRegStar, FaShare, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, details, _id, image_url, author, rating, total_view } = news;

    return (
        <Card className="my-3">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <img className='rounded-circle' style={{ width: 60 }} src={author?.img} alt="" />
                    <div className='mx-2 lh-1'>
                        <h5 className='fw-bold'>{author.name}</h5>
                        <p><small>{moment(author?.published_date).format('YYYY-MM-DD')}</small></p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark/>
                    <FaShare className='mx-3'/>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='mb-2' variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <p>{details.slice(0, 250)} ....... <Link to={`/news/${_id}`} className='text-decoration-none text-warning'>Read More</Link></p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div>
                <Rating  initialRating={rating.number}
                  emptySymbol={<FaRegStar/>}
                  fullSymbol={<FaStar className='text-warning'/>}
                  readonly
                />
                    <span className='mx-2'>{rating.number}</span>
                </div>
                <div>
                    <FaRegEye className='mx-2'/>{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;