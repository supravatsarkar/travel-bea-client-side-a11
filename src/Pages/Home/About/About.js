import React from 'react';
import { Container } from 'react-bootstrap';
import about from '../../../images/about.jpg';
const About = () => {
    return (
        <div className="my-5">
            <Container>
                <h4 className="custom-orange">About Us</h4>
                <div className="d-flex flex-column flex-lg-row">
                    <div className="me-2">
                        <img className="img-fluid rounded shadow" src={about} alt="" />
                    </div>
                    <div className="p-2">
                        <h1>We Help You Planning Your Journey</h1>
                        <p className="text-start text-muted">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel atque nihil quam nobis tempore magni doloribus iusto vitae quia placeat illum ex aperiam numquam nostrum odio unde amet neque odit beatae, aut, omnis eveniet? Itaque explicabo deserunt eligendi. Deserunt, fugiat commodi, voluptas est saepe eius aut quos, sapiente doloremque ea unde consequuntur beatae repellendus exercitationem?
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;