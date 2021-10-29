import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    return (
        <div>
            <h2>Service Section</h2>
        </div>
    );
};

export default Services;