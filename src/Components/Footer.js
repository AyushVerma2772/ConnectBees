import React from 'react'
import '../Styles/Footer.css'
import logo from '../Images/logo.png'
import floor from '../Images/footer floor.png'

export default function Footer() {
    return (
        <>
            <div className='big-footer' style={{ backgroundImage: `url(${floor})` }} id="footer" >

                <div className="input-email footer-box d-flex">
                    <img src={logo} alt="logo" className='footer-logo' />
                    <p className="para">SIGN UP TO BE THE FIRST TO KNOW WHEN IT LAUNCHES</p>

                    <div className="email-box d-flex">
                        <input type="email" name="email" id="email" placeholder='Enter your email' className='d-flex' />
                        <input type="submit" value="Notify me" className='notify-me' />
                    </div>
                </div>

                <div className="use-case footer-box d-flex">
                    <h4>Use Cases</h4>
                    <ul className='footer-list d-flex'>
                        <li><a href="/" className='footer-link'>Web Designers</a></li>
                        <li><a href="/" className='footer-link'>Marketers</a></li>
                        <li><a href="/" className='footer-link'>Small Business</a></li>
                        <li><a href="/" className='footer-link'>Website Builders</a></li>
                    </ul>
                </div>

                <div className="company footer-box d-flex">
                    <h4>Company</h4>
                    <ul className='footer-list d-flex'>
                        <li><a href="/" className='footer-link'>About Us</a></li>
                        <li><a href="/" className='footer-link'>Careers</a></li>
                        <li><a href="/" className='footer-link'>FAQs</a></li>
                        <li><a href="/" className='footer-link'>Teams</a></li>
                        <li><a href="/" className='footer-link'>Contact Us</a></li>
                    </ul>
                </div>


                <div className="address footer-box d-flex">
                    <ul className='footer-list d-flex'>
                        <li><a href="/" className='footer-link'><i className="footer-icon fa-solid fa-location-dot"></i> TBI, 5th Floor, NIET, Greater Noida 201306</a></li>
                        <li><a href="/" className='footer-link'><i className="footer-icon fa-regular fa-envelope"></i> connectbees.me@gmail.com</a></li>
                        <li><a href="/" className='footer-link'><i className="footer-icon fa-solid fa-phone"></i> +91 8076162050</a></li>
                        <li><a href="/" className='footer-link'><i className="footer-icon fa-solid fa-phone"></i> +91 8826637343</a></li>
                    </ul>
                </div>
            </div>

            <footer className='small-footer d-flex' style={{backgroundImage: `url(${floor})`}}>
                <div className="left-footer side-footer d-flex">
                    <a href="/" className='footer-link'>© 2022 ConnectBees All Rights Reserved</a>
                </div>

                <div className="mid-footer d-flex">
                    <a href="/" className='footer-link'><i className="footer-icon fa-brands fa-facebook-f"></i></a>
                    <a href="/" className='footer-link'><i className="footer-icon fa-brands fa-twitter"></i></a>
                    <a href="/" className='footer-link'><i className="footer-icon fa-brands fa-linkedin-in"></i></a>
                    <a href="/" className='footer-link'><i className="footer-icon fa-brands fa-instagram"></i></a>
                </div>


                <div className="right-footer side-footer d-flex">
                    <a href="/" className='footer-link'>Privacy Policy</a>
                    <a href="/" className='footer-link'>Terms of Use</a>
                    <a href="/" className='footer-link'>Sales and Refunds</a>
                    <a href="/" className='footer-link'>Legal</a>
                    <a href="/" className='footer-link'>Site Map</a>
                </div>
            </footer>
        </>
    )
}
