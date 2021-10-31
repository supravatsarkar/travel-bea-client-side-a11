import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import SingleBook from '../SingleBook/SingleBook';
import { Badge, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyBookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [load, setLoad] = useState(false);


    useEffect(() => {
        const userEmail = user.email;
        fetch(`http://localhost:5000/bookings/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(data);
                setLoad(false);
            })
    }, [load])
    const handleDelete = id => {
        if (window.confirm("Are you sure? Delete this?")) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        alert('Delete Success');
                        setLoad(true);
                    }
                })
        }

    }
    return (
        <Container>
            <h2>My Booking: {bookings.length}</h2>
            <Row xs={1} md={1} lg={1}>
                {
                    bookings.map(bookedService => <SingleBook
                        handleDelete={handleDelete}
                        key={bookedService._id}
                        bookedService={bookedService}
                    ></SingleBook>)
                }
            </Row>
        </Container>
    );
};

export default MyBookings;