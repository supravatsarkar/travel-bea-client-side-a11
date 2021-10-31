import React, { useEffect, useState } from 'react';
import SingleBook from '../SingleBook/SingleBook';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(data);
            })
    }, [])
    return (
        <div>
            <h1>Booked service {bookings.length}</h1>
            {
                bookings.map(bookedService => <SingleBook
                    key={bookedService._id}
                    bookedService={bookedService}
                ></SingleBook>)
            }

        </div>
    );
};

export default MyBookings;