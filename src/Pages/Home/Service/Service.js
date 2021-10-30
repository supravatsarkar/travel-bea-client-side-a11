import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { _id, img, name, duration, location } = service;
    // console.log(img);
    return (
        <div>
            <Col>
                <Card className="shadow rounded my-1">
                    <Card.Img className="img-fluid" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Location: {location}</p>
                            <p>Days: {duration}</p>
                        </Card.Text>
                        <Button variant="primary">Book Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;