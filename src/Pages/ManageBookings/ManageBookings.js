
import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const ManageBookings = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [load, setLoad] = useState(false);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/managebooking')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllBookings(data);
                setLoad(false);
            })
    }, [load])

    const handleDelete = (id) => {
        if (window.confirm("Are you sure? Delete this?")) {
            fetch(`http://localhost:5000/managebooking/${id}`, {
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

    const handleStatus = (id) => {
        const status = 'Approved';
        fetch(`http://localhost:5000/managebooking/updatestatus/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLoad(true);
            })
    }

    return (
        <Container>
            <h2>Manage Bookings </h2>
            <h3>Total Bookings {allBookings.length}</h3>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Sl.</th>
                        <th>Tour Name</th>
                        <th>Tour Date</th>
                        <th>User Email</th>
                        <th>Status</th>
                        <th>Change Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBookings.map((booking, index) => <tr
                            key={booking._id}
                        >
                            <td>{index + 1}</td>
                            <td>{booking?.service?.name}</td>
                            <td>{booking?.date}</td>
                            <td>{booking?.userEmail}</td>
                            <td>{booking?.status}</td>
                            <td><Button onClick={() => handleStatus(booking._id)} variant="info" size="sm">Approve</Button></td>
                            <td><Button onClick={() => handleDelete(booking._id)} variant="danger" size="sm">Delete</Button></td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default ManageBookings;