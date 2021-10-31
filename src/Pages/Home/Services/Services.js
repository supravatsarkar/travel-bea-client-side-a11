import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Container, Row, Spinner } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            });
    }, [])
    if (!services.length) {
        return <Spinner animation="border" variant="warning" />
    }
    return (
        <div className="my-5">
            <Container>
                <h2 className="custom-orange ">Popular Tour</h2>
                <Row xs={1} md={2} lg={3}>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    )
};

export default Services;