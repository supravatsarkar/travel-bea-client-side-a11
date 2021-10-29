import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark d-flex text-white justify-content-around align-items-center p-3">
            <div>
                <p className="p-0 m-0">Copyright &copy; <span className="default-color">TravelBea.</span> All Right Reserved</p>
            </div>
            <div className="footer-right-sec">
                <a href="#">Privacy</a>
                <a href="#">Policy</a>
                <a href="#">Policy</a>
                <a href="#">FAQ</a>
                <a href="#">Support</a>
            </div>

        </div>
    );
};

export default Footer;