import React, { useEffect, useState } from 'react';
import { Badge, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const BookService = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    const [quantity, setQuantity] = useState(1);
    const { _id, img, name, duration, location, description, seat, Season, price } = service;
    const { user } = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const userEmail = user.email;
        const status = 'Pending';
        const totalPrice = quantity * price;
        // const bookingData = { ...data, userEmail, totalPrice, status };
        const userOrder = { ...data, service, userEmail, totalPrice, status };
        console.log(userOrder);
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('wow~~~ Booking Successful');
                }
            });
    };

    // console.log(watch("example")); // watch input value by passing the name of it
    useEffect(() => {

        fetch(`http://localhost:5000/booking/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setService(data)
            });
    }, [])

    const handleTotalPrice = (e) => {
        // console.log('Change');
        setQuantity(e.target.value);
    }


    return (
        <div className="">
            <Container>
                <Row>
                    <Col md={8}>
                        <div>
                            <h2>{name}</h2>
                            <h6>Location: {location}</h6>
                            <p>{description}</p>
                            <img className="img-fluid" src={img} alt="" />
                            <p>Days: {duration}</p>
                            <p>Seat: {seat}</p>
                            <p>Season: {Season}</p>
                            <p>From: ${price}</p>

                            {/* <p>id: {serviceId}</p> */}
                        </div>

                    </Col>
                    <Col md={4}>
                        <div>
                            <h3>Book This Tour Now</h3>
                            <Badge className="mb-1 " bg="success">{name}</Badge>
                            <br />


                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="date">Date:</label>
                                <input defaultValue="" {...register("date", { required: true })} type="date" id="date" />

                                <input defaultValue="" {...register("pickPoint", { required: true })} type="text" placeholder="Pick-Up Point" />
                                <label htmlFor="seat">Seat:</label>
                                <select {...register("seat", { required: true })} onChange={handleTotalPrice} id="seat"   >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span>This field is required</span>}
                                <Badge className="my-1 fs-5" bg="success" size='lg'>Total Payable: ${price * quantity}</Badge>

                                <input className="btn btn-warning fw-bolder" type="submit" value="Pay & Book Now" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BookService;