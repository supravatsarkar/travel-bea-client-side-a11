import { faCalendarAlt, faCompass } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faMapMarkedAlt, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

const Facilites = () => {
    return (
        <div className="my-5">
            <Container>
                <h4 className="custom-orange">Facilites</h4>
                <h1>Why Choose Us</h1>
                <div className="d-flex flex-column flex-md-row">
                    <div className="shadow p-2 rounded m-2">
                        <FontAwesomeIcon className="fs-1 custom-orange" icon={faCalendarAlt} />
                        <h4 className="text-muted">Fast Booking</h4>
                        <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quam delectus consequuntur repellat libero pariatur iusto, sapiente perspiciatis.</p>
                    </div>
                    <div className="shadow p-2 rounded m-2">
                        <FontAwesomeIcon className="fs-1 custom-orange" icon={faMapMarkedAlt} />
                        <h4 className="text-muted">Worldwide Coverage</h4>
                        <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quam delectus consequuntur repellat libero pariatur iusto, sapiente perspiciatis.</p>
                    </div>
                    <div className="shadow p-2 rounded m-2 ">
                        <FontAwesomeIcon className="fs-1 custom-orange" icon={faCompass} />
                        <h4 className="text-muted">Guided Tours</h4>
                        <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quam delectus consequuntur repellat libero pariatur iusto, sapiente perspiciatis.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Facilites;