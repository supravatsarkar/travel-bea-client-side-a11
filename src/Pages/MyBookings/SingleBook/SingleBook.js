import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const SingleBook = ({ bookedService, handleDelete }) => {
    console.log(bookedService);
    const { name, img } = bookedService?.service;
    const { price, seat, date, pickPoint, status } = bookedService?.bookingData;

    // const handleDelete = id => {
    //     fetch(`http://localhost:5000/bookings/${id}`, {
    //         method: "DELETE"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             const confirm = alert("Are you sure? Delete this?")
    //             if (confirm) {
    //                 if (data.deletedCount) {
    //                     alert('Delete Success');

    //                 }
    //             }
    //         })
    // }
    return (
        <Col>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            {/* <p className="card-title"></p> */}
                            <h4 className="card-text text-muted">{name}</h4>
                            <h5>Date: {date}</h5>

                            {/* <FontAwesomeIcon className="fs-3 custom-orange" icon={fafa} /> */}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h6>Bookked Seat: {seat}</h6>
                            <p>Pick-Up Point: {pickPoint}</p>
                            <p className={status === "Success fw-bolder" ? "text-success" : "text-danger fw-bolder"}>Status: {status}</p>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <Button onClick={() => handleDelete(bookedService._id)} className="" variant="danger" size="sm">Delete</Button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default SingleBook;