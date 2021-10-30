import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BookService = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    const { _id, img, name, duration, location, description, seat, Season, price } = service;
    useEffect(() => {
        fetch(`http://localhost:5000/booking/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setService(data)
            });
    }, [])
    return (
        <div>
            <h2>Book Service</h2>
            <p>id: {serviceId}</p>
            <h2>{name}</h2>
            <img src={img} alt="" />
            <h5>{location}</h5>
            <p>Days: {duration}</p>
            <p>Seat: {seat}</p>
            <p>Season: {Season}</p>
            <p>From: {price}</p>
            <p>{description}</p>

        </div>
    );
};

export default BookService;