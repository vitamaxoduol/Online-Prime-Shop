import React from 'react';
import { FaPhone } from "react-icons/fa";
function Footer() {
    return (
        <footer className="footer">
            <div className="info-links">
                <a href="/about">About Us</a>
                <a href="term and conditions">Terms & Conditions</a>
                <a href="/privacy policy">Privacy Policy</a>
            </div>
            <div className="newsletter">
                <h4>Subscribe to our Newsletter</h4>
                <form>
                    <input type="email" placeholder="Your email address" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className="social-media">
                <a href="#!"><i className="fa fa-facebook"></i></a>
                <a href="#!"><i className="fa fa-twitter"></i></a>
                <a href="#!"><i className="fa fa-instagram"></i></a>
                <a href="#!"><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="contact-info">
                <p>123 Prime Shopify Lane, ShopCity, 12345</p>
                <p>Phone<FaPhone />:(123) 456-7890</p>
                <p>Email: contact@primeshopify.com</p>
            </div>
        </footer>
    );
}

export default Footer;