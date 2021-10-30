import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Container, Row } from 'react-bootstrap';

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
    return (
        <div className="my-2">
            <Container>
                <h1>Popular Tours</h1>
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