import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark d-flex flex-column flex-md-row text-white justify-content-around align-items-center p-3">
            <div>
                <p className="p-0 m-0">Copyright &copy; <span className="custom-orange">TravelBea.</span> All Right Reserved</p>
            </div>
            <div className="footer-right-sec">
                <span href="#">Privacy</span>
                <span href="#">Policy</span>
                <span href="#">Policy</span>
                <span href="#">FAQ</span>
                <span href="#">Support</span>
            </div>

        </div>
    );
};

export default Footer;