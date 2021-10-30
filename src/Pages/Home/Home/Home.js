import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Facilites from '../Facilites/Facilites';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Facilites></Facilites>
            <About></About>
        </div>
    );
};

export default Home;