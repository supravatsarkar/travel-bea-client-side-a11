import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, img, name, duration, location, price } = service;
    // console.log(img);
    return (
        <div>
            <Col>
                <Card className="shadow rounded my-1">
                    <Card.Img className="img-fluid" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Location: {location}</Card.Text>
                        <Card.Text>Days: {duration}</Card.Text>
                        <h6>From: ${price}</h6>
                        <Button as={Link} to={`/booking/${_id}`} variant="warning">Book Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;