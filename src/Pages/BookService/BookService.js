import React, { useEffect, useState } from 'react';
import { Badge, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const BookService = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    const { _id, img, name, duration, location, description, seat, Season, price } = service;

    const { user } = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // console.log(watch("example")); // watch input value by passing the name of it
    useEffect(() => {
        fetch(`http://localhost:5000/booking/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setService(data)
            });
    }, [])


    return (
        <div className="">
            <Container>
                <Row>
                    <Col md={8}>
                        <div>
                            <h2>{name}</h2>
                            <img className="img-fluid" src={img} alt="" />
                            <h5>{location}</h5>
                            <p>Days: {duration}</p>
                            <p>Seat: {seat}</p>
                            <p>Season: {Season}</p>
                            <p>From: {price}</p>
                            <p>{description}</p>
                            <p>id: {serviceId}</p>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div>
                            <h3>Book This Tour Now</h3>
                            <Badge className="mb-1 " bg="success">{name}</Badge>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user?.email} {...register("email")} type="email" />
                                <input defaultValue={user?.displayName} {...register("name", { required: true })} type="text" />
                                <input defaultValue="" {...register("date", { required: true })} type="date" />
                                <Form.Select size="sm" {...register("seat")}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Select>
                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span>This field is required</span>}

                                <input type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BookService;